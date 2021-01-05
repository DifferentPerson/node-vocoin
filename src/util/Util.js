"use strict";

const got = require("got");

const baseUrl = "https://joinvo.co/api/vcn/";

module.exports = class Util {

    constructor() {
        throw new Error("Util cannot be instantiated");
    }

    static async getJson(path) {
        return (await got(path, {
            prefixUrl: baseUrl,
            responseType: "json",
            headers: {
                "user-agent": "node-vocoin"
            }
        })).body;
    }

};
