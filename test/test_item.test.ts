import { mocked } from "jest-mock";
import { BattleNetClient } from "../src/domain/client";
import { MockOathSource } from "./mock/oauth_source";
import { BattleNetBaseNamespace } from "../src/data/namespace/base_namespace";
import { BattleNetNamespace } from "../src/data/namespace/namespace";
import { BattleNetRegion } from "../src/data/region";
import { GETHTTPRequest } from "../src/net/requests/get";
jest.mock("../src/net/requests/get")

// const THUNDERFURY_ITEM_ID = 19_019;
// const THUNDERFURY_ITEM_NAME = "Thunderfury";

const oauth_source = new MockOathSource("test_token")
const namespace = new BattleNetNamespace(BattleNetBaseNamespace.WOW_CLASSIC_PROGRESSION, BattleNetRegion.NORTH_AMERICA);
const client = new BattleNetClient(oauth_source, namespace);

jest.mock("../src/net/requests/get", () => {
    return {
        GETHTTPRequest: jest.fn().mockImplementation(() => {
            return {
                send: () => undefined,
            };
        })
    };
});
const MockedGETHTTPRequest = mocked(GETHTTPRequest, true);

describe("Item API", () => {
    beforeEach(() => {
        MockedGETHTTPRequest.mockClear();
    });

    it("gets an item by ID", async () => {
        expect(MockedGETHTTPRequest).not.toHaveBeenCalled();
        await client.get_item_by_id(0).catch(() => undefined);
        expect(MockedGETHTTPRequest).toHaveBeenCalledTimes(1);
    });

    it("gets an item by name", async () => {
        expect(MockedGETHTTPRequest).not.toHaveBeenCalled();
        await client.get_item_by_name("");
        expect(MockedGETHTTPRequest).toHaveBeenCalledTimes(2);
    });
})
