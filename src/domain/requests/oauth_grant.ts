import { OauthGrantResponse } from "../../data/response/oauth_grant";
import { POSTHTTPRequest } from "../../net/requests/post";
import { HTTPModelResponseParser } from "../../net/response/model";

export class OauthGrantRequest extends POSTHTTPRequest<string, OauthGrantResponse> {
    public constructor(credentials: string) {
        const options = {
            host: "us.battle.net",
            path: "/oauth/token",
            headers: {
                Authorization: `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };
        const response_parser = new HTTPModelResponseParser<OauthGrantResponse>();
        const payload = "grant_type=client_credentials";
        super(options, response_parser, payload);
    }
}
