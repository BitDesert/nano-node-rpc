const NanoClient = require("./lib");

const NANO_ADDRESS =
  "nano_1ninja7rh37ehfp9utkor5ixmxyg8kme8fnzc4zty145ibch8kf5jwpnzr3r";

const client = new NanoClient({apiKey: 'yourapikey'});

const handleErrors = e => {
  console.log("\nError: " + e.message);
};

client
  .account_balance(NANO_ADDRESS)
  .then(account => console.log("Account balance:", account))
  .catch(handleErrors);

client
  .block_count()
  .then(count => console.log("Block count:", count))
  .catch(handleErrors);
