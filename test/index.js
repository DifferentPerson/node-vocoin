"use strict";

const { Account, Transfer } = require("../");

(async () => {

    // Get an account by its ID
    console.log(await Account.getById("GAMHGB"));

    // Get an account by Discord
    console.log(await Account.getByDiscord("269916553171042315"));

    // Get a transfer by ID
    console.log(await Transfer.getById(1));

    // Iterate through transfers (first and last are inclusive)
    // Defaults to 1 to Infinity
    for await (const transfer of Transfer.iterate(1000, 1010)) {
        console.log(transfer);
    }

})();