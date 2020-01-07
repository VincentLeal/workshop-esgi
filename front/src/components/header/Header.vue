<template>
<header class="hidden md:flex justify-between items-center py-3 px-10 border-b border-gray-200">
    <div>
        <img src="@/assets/logo.png" class="h-8 mr-4" alt="Rockside Logo Sign Up Log In" />
    </div>

    <div class="flex">
        <a @click="$emit('logout')" target="_blank" class="flex text-primary items-center mr-8 cursor-pointer">
            <i class="fas fa-sign-out-alt mr-2 opacity-75"></i>
            <p>Sign out</p>
        </a>
    </div>
</header>
</template>

<script lang="ts" src="./Header.ts" />
