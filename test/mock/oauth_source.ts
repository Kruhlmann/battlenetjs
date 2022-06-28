import { OauthSource } from "../../src/domain/auth/oauth_source";

export class MockOathSource implements OauthSource {
    private token: string;

    public constructor(token: string) {
        this.token = token;
    }

    public async get_token(): Promise<string> {
        return this.token;
    }
}
