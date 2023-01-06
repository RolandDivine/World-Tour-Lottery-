# World-Tour-Lottery-
# ERC20 Lottery Smart Contract

This smart contract allows users to participate in a lottery game by staking their ERC20 tokens. The winner of the lottery will receive 10% of all staked tokens, while the creator of the contract will receive 90% of the staked tokens.

To participate in the lottery, users must call the enter function and provide the amount of tokens they wish to stake. The contract will keep track of all staked tokens and the number of participants.

Once the closing time for the lottery is reached, the contract will use a random number generator to select the winner. The winner will be determined based on their index in the list of participants.

The contract also includes a withdraw function, which allows users to retrieve their staked tokens if they choose to opt out of the lottery before the closing time.

# Requirements
ERC20 token contract address
Functions
enter

# Parameters:
_amount: The amount of tokens to stake
Returns:
bool: Whether the staking was successful
withdraw

# Parameters:
_amount: The amount of tokens to withdraw
Returns:
bool: Whether the withdrawal was successful
selectWinner

# Parameters: None
Returns:
bool: Whether the winner was successfully selected
claim

# Parameters: None
Returns:
bool: Whether the winner's reward was successfully claimed
