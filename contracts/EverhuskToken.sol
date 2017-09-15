pragma solidity ^0.4.15;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract EverhuskToken is MintableToken {
    string public constant name = "EverhuskToken";
    string public constant symbol = "SUKH";
    uint8 public constant decimals = 18;
}
