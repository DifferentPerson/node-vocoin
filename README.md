# node-vocoin

A NodeJS Client for the VoCoin API

## Usage

```js
const { Account, Transfer } = require("vocoin");

// Get an account by ID
const account = await Account.getById("GAMHGB");

// Get an account by Discord
const account = await Account.getByDiscord("269916553171042315");

// Get a transfer by ordinal ID
const transfer = await Transfer.getById(1);

// Iterate through transfers (first and last are inclusive)
// Defaults to 1 to Infinity
for await (const transfer of Transfer.iterate(1000, 1010)) {
    console.log(transfer);
}
```

## License
[MIT License](./LICENSE)