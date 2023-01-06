const Web3 = require('web3');
const contract = require('truffle-contract');

// Connect to the Ethereum network
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

// Load the ERC20Lottery contract
const ERC20Lottery = contract(require('./build/contracts/ERC20Lottery.json'));
ERC20Lottery.setProvider(provider);

// Get the contract instance
let lottery;
ERC20Lottery.deployed().then(function(instance) {
  lottery = instance;
});

// Participate in the lottery by staking some ERC20 tokens
function participate() {
  lottery.participate(1, { from: web3.eth.accounts[0], value: 1 }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    console.error(err);
  });
}

// Draw the winner of the lottery
function draw() {
  lottery.draw({ from: web3.eth.accounts[0] }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    console.error(err);
  });
}
