"use strict";

const Util = require("../util/Util");

/**
 * Represents a VoCoin Account
 */
module.exports = class Account {
    
    /**
     * The ID of this account
     * @type {string}
     */
    id;


    /**
     * The Discord user ID of this account
     * @type {string}
     */
    discord;

    
    /**
     * This account's VoCoin balance
     * @type {number}
     */
    balance;

    /**
     * The amount of VoCo XP in this account
     * @type {number}
     */
    xp;

    constructor(data) {
        this.id = data.id;
        this.discord = data.discord;
        this.balance = parseInt(data.balance);
        this.xp = parseInt(data.xp);
    }

    /**
     * Fetch an account by its ID
     * @param {string} id 
     * @returns {Promise<?Account>} The account, if found
     */
    static async getById(id) {
        const result = await Util.getJson(`account/${id}`);
        if (result.success) {
            return new Account(result.account);
        }
        return null;
    }

    /**
     * Fetch an account by its Discord user ID
     * @param {String} discord 
     * @returns {Promise<?Account>} The account, if found
     */
    static async getByDiscord(discord) {
        const result = await Util.getJson(`account/discord/${discord}`);
        if (result.success) {
            return new Account(result.account);
        }
        return null;
    }

};