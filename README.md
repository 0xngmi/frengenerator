# frengenerator
Create fren DAOs

> Inspired by dennison's work on simple DAO creation tools

This just uses a fork of compound governance with the following changes:
- Timelock has been removed
- Admin with upgradeability rights is initially set to governance itself
- Contract accepts NFTs

You can check these changes through git history.

## How to use
1. Change the parameters at the top of GovernorBravoDelegate.sol, Comp.sol and deploy.js
2. Install dependencies with `npm install`
3. Modify hardhat.config.js to include you RPC url and private key
4. Run `node scripts/deploy.js --network mainnet`


#### hardhat.config.js modifications:
```
networks: {
    mainnet: {
      url: "RPC URL",
      accounts: ["PRIVATE key"]
    }
}
```