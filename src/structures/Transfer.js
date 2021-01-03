"use strict";

const Util = require("../util/Util");

/**
 * Represents a VoCoin Transfer
 */
module.exports = class Transfer {
    
    /**
     * The numerical (ordinal) ID of this transfer
     * @type {number}
     */
    id;

    /**
     * The ID of the account that sent this transfer
     * @type {?string}
     */
    source;

    /**
     * The ID of the account that received this transfer
     * @type {string}
     */
    recipient;

    /**
     * The amount of VoCoin involved in this transfer
     * @type {number}
     */
    amount;

    /**
     * The type of this transfer (like PAYMENT or CREDIT)
     * @type {string}
     */
    category;

    /**
     * The reason or note attached to this transfer
     * @type {?string}
     */
    note;

    constructor(data) {
        this.id = data.id;
        this.source = data.source ?? null;
        this.recipient = data.recipient;
        this.amount = data.amount;
        this.category = data.category;
        this.note = data.note ?? null;
    }

    /**
     * Fetch a transfer by its numerical ID
     * @param {number} id 
     * @returns {Promise<?Transfer>} The transfer, if found
     */
    static async getById(id) {
        const result = await Util.getJson(`transfer/${id}`);
        if (result.success) {
            return new Transfer(result.transfer);
        }
        return null;
    }

    /**
     * Creates an iterator that allows you to iterate through a range of transfers
     * @param {number} start The first transfer ID to get
     * @param {number} end The last transfer ID to get. This is inclusive
     * @returns {AsyncGenerator<?Transfer>} An iterator for transfers
     */
    static async* iterate(start = 1, end = Infinity) {
        let count = start;
        while (count <= end) {
            const transfer = await Transfer.getById(count);
            if (transfer === null) {
                return;
            }
            yield transfer;
            count++;
        }
    }

};
