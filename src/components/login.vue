<template>
   <div class="q-pa-md">
   </div>
</template>

<script>
import Web3 from 'web3';
import UniLogin from '@unilogin/provider';


// Only Metamask
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
// new Web3(window.ethereumProvider || 'ws://localhost:8545');
web3.setProvider(UniLogin.createPicker(web3.currentProvider));

// Only Unilogin
// const ulProvider = UniLogin.create('mainnet');
// const web3 = new Web3(ulProvider);

// Either of the two
// const ulProvider = UniLogin.createPicker(window.ethereum);
// const web3 = new Web3(ulProvider);

// eslint-disable-next-line no-console
console.log(Web3.givenProvider, 'web3', web3);
export default {
};
</script>
