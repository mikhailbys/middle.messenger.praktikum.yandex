import { expect } from "chai";

const hello = (str: string) => 'Hello mocha'

describe("Typescript + Babel usage suite", () => {
    it("should return string correctly", () => {
        expect(hello("mocha"), "Hello mocha");
    });
});