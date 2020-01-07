<template>
<div>
    <div class="flex flex-wrap items-start">
        <div class="flex flex-wrap items-baseline w-full xl:w-2/3 xxl:w-1/2 p-5 pb-0 xl:p-10 xl:pr-5">
            <div class="card z-20 mb-5 xl:mb-10">
                <h2 class="font-bold tracking-wide text-2xl mt-0 mb-4 text-primary inline-block">
                    Your Identity
                </h2>

                <div>
                    Address: {{identity}}
                </div>
                <div class="flex">
                    <!-- <span class="px-4 py-2 m-2 mb-4"> Balance: {{erc20balance}} </span> -->
                    <span class="mt-4 mb-4"> Balance: {{balance}} </span>
                    <a target="_blank" class="px-4 py-2 m-2 border-2 bg-primary rounded-lg text-center text-white hover:opacity-50 transition-all font-medium tracking-wide py-2 px-4 hover:text-white hover:bg-primary transition-all" href="https://faucet.ropsten.be/">Get
                        funds</a>
                </div>

            </div>

            <div class="card z-20 mb-5 xl:mb-10">
                <h2 class="font-bold tracking-wide text-2xl mt-0 mb-6 text-primary block">
                    Transaction
                </h2>
                <div class="flex">
                    <input v-model="to" type="text" placeholder="To" class="outline-none flex-1 px-4 py-2 m-2 rounded-lg" />
                    <input v-model="value" type="text" placeholder="Value" class="outline-none flex-1 px-4 py-2 m-2 rounded-lg" />
                    <a class="px-4 py-2 m-2 flex-1 border-2 bg-primary rounded-lg text-center text-white hover:opacity-50 transition-all font-medium tracking-wide py-2 px-4 hover:text-white hover:bg-primary transition-all" v-on:click="send">Send</a>
                </div>

                <ul class="flex flex-col bg-gray-200 m-2">
                    <li v-for="hash in txHashes" class="px-4">
                        <a target="_blank" v-bind:href="'https://ropsten.etherscan.io/tx/' + hash">{{ hash }}</a>
                    </li>
                </ul>
            </div>

            <div class="card z-20 mb-5 xl:mb-10">
                <h2 class="font-bold tracking-wide text-2xl mt-0 mb-6 text-primary block">
                    ERC-20
                </h2>
                <div>
                    Address: {{erc20address}}
                </div>
                <div>
                    Tokens: {{erc20balance}}
                </div>

                <h2 class="font-bold tracking-wide text-2xl mt-6 mb-6 text-primary block">
                    Transfert
                </h2>

                <div class="flex">
                    <input v-model="erc20To" type="text" placeholder="To" class="outline-none flex-1 px-4 py-2 m-2 rounded-lg" />
                    <input v-model="erc20Amount" type="text" placeholder="Amount" class="outline-none flex-1 px-4 py-2 m-2 rounded-lg" />
                    <a class="px-4 py-2 m-2 flex-1 border-2 bg-primary rounded-lg text-center text-white hover:opacity-50 transition-all font-medium tracking-wide py-2 px-4 hover:text-white hover:bg-primary transition-all" v-on:click="transfer">Send</a>
                </div>

                <ul class="flex flex-col bg-gray-200 m-2">
                    <li v-for="hash in ercTxHashes" class="px-4">
                        <a target="_blank" v-bind:href="'https://ropsten.etherscan.io/tx/' + hash">{{ hash }}</a>
                    </li>
                </ul>
            </div>

            <div class="card z-20">
                <h2 class="font-bold tracking-wide text-2xl mt-0 mb-6 text-primary block">
                    Capture the Flag
                </h2>
                <div>
                    Address: {{flagAddress}}
                </div>
                <div>
                    Winner: {{winner}}
                </div>

                <h2 class="font-bold tracking-wide text-2xl mt-6 mb-6 text-primary block">
                    Capture
                </h2>

                <a class="px-4 py-2 m-2 flex-1 border-2 bg-primary rounded-lg text-center text-white hover:opacity-50 transition-all font-medium tracking-wide py-2 px-4 hover:text-white hover:bg-primary transition-all" v-on:click="capture">Take the
                    flag</a>

                <ul class="flex flex-col bg-gray-200 m-2">
                    <li v-for="hash in flagTxHashes" class="px-4">
                        <a target="_blank" v-bind:href="'https://ropsten.etherscan.io/tx/' + hash">{{ hash }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- <div class="flex flex-wrap items-center w-full xl:w-1/3 xxl:w-1/2 p-5 xl:p-10 xl:pl-5 xxl:flex-col">
            <div class="card z-20 xl:max-w-lg">
                <h2 class="font-bold tracking-wide text-2xl mt-0 mb-6 text-primary inline-block ">
                    Neep help?
                </h2>
                <a href="https://rockside.gitbook.io/rockside/" class="text-primary mb-4 block">
                    <i class="fas fa-book mr-4 opacity-75" />
                    Read documentation
                </a>

                <a href="https://rockside.io/about" class="text-primary mb-4 block">
                    <i class="fas fa-address-card z-20 mr-4 opacity-75" />
                    About us
                </a>

                <a href="mailto:contact@rockside.io" class="text-primary block">
                    <i class="fas fa-paper-plane mr-4 opacity-75" />
                    Contact us
                </a>
            </div>
        </div> -->
</div>
</div>
</template>

<script src="./Dashboard.ts" lang="ts" />
