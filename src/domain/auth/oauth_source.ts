export interface OauthSource {
    get_token(): Promise<string>;
}
