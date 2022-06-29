import { InvalidBattleNetCredentialsError } from "../../error/invalid_credentials";
import { Logger } from "../../logger/logger";
import { OauthGrantRequest } from "../requests/oauth_grant";
import { OauthSource } from "./oauth_source";

export class BattleNetOauthService implements OauthSource {
    private readonly credentials_b64: string;
    private readonly logger: Logger;
    private token: string | undefined;
    private token_expiration_time_ms: number;
    private token_request_is_in_flight: boolean;

    public constructor(client_id: string, client_secret: string) {
        const authentication_buffer = Buffer.from(`${client_id}:${client_secret}`);
        this.credentials_b64 = authentication_buffer.toString("base64");
        this.token_expiration_time_ms = 0;
        this.token_request_is_in_flight = false;
        this.logger = Logger.get_logger(this);

        this.start_service();
    }

    public async get_token(): Promise<string> {
        return new Promise((resolve) => {
            setInterval(() => {
                if (this.token !== undefined) {
                    resolve(this.token);
                }
            }, 10);
        });
    }

    private start_service(): void {
        this.logger.debug("Starting oauth update service");
        this.update_token();
        setInterval(() => this.update_token(), 100);
    }

    private is_token_expired(): boolean {
        return Date.now() > this.token_expiration_time_ms;
    }

    private should_update_token(): boolean {
        return this.is_token_expired() && !this.token_request_is_in_flight;
    }

    private async update_token(): Promise<void> {
        if (!this.should_update_token()) {
            return;
        }
        this.token_request_is_in_flight = true;
        this.logger.debug("Sending new Oauth token request");
        return new OauthGrantRequest(this.credentials_b64)
            .send()
            .then((response) => {
                if (response.access_token === undefined) {
                    throw new InvalidBattleNetCredentialsError();
                }
                this.token_expiration_time_ms = Date.now() + response.expires_in * 1000;
                this.token = response.access_token;
                this.logger.debug(`Assigned new oauth token '${response.access_token.replace(/./g, "*")}'`);
            })
            .catch((error: Error) => {
                this.logger.error("Error during new oauth token request");
                this.logger.error(error.toString());
            })
            .finally(() => {
                this.token_request_is_in_flight = false;
            });
    }
}
