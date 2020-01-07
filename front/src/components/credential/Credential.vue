<template>
<div class="flex items-center p-1 rounded bg-gray-300 truncate px-4 py-2">
    <span id="apikey" class="font-mono flex-1 overflow-auto">{{ text }}</span>
    <i class="fas fa-copy cursor-pointer text-gray-700 hover:opacity-100 hover:text-gray-800 transition-all opacity-75 ml-2" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError" />
</div>
</template>

<script lang="ts" src="./Credential.ts" />
