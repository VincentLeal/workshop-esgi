<template>
<div class="min-h-screen md:flex md:flex-col">
    <Header v-on:logout="logout" class="z-20 bg-white" />

    <div class="bg-gray-100 min-h-screen md:flex md:flex-1 md:min-h-0">
        <nav :class="{ 'flex-wrap': isOpen }" class="flex justify-between bg-white border-b border-gray-200 w-full md:w-auto md:flex-col md:border-0 md:border-r md:inline-flex md:min-w-48 z-20">
            <button @click="toggleIsOpen" class="md:hidden flex-1 self-start focus:outline-none">
                <img class="ml-5 block h-6 my-5" src="@/assets/HamburgerIcon.svg" alt="Hambuger icon" />
            </button>

            <router-link :to="{ name: 'dashboard' }" class="flex-grow md:flex-grow-0 flex self-center flex justify-center md:hidden">
                <img class="h-8 md:h-10 my-3" src="@/assets/logo.png" alt="Rockside Logo" />
            </router-link>

            <div class="flex-1 md:hidden" />

            <div :class="isOpen ? 'flex w-screen' : 'hidden'" class="md:flex flex-col mt-0 md:mt-5 text-gray-700 h-full overflow-hidden md:p-0 border-t md:border-t-0">
                <router-link :to="{ name: 'dashboard' }" active-class="text-primary border-l-4 border-primary" class="mb-4 mt-5 md:mt-0 flex items-center py-2 px-4">
                    <i class="fas fa-home mr-2 opacity-75" />
                    <p>Home</p>
                </router-link>

                <a href="https://rockside.gitbook.io/rockside/" target="_blank" class="mb-4 flex items-center py-2 px-4 md:hidden">
                    <i class="fas fa-book mr-2 opacity-75" />
                    <p>Documentation</p>
                </a>

                <div class="mx-5 mb-5 mt-auto md:hidden">
                    <button @click="logout" class="mb-0 btn bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 tracking-wide">
                        <i class="fas fa-sign-out-alt mr-2 opacity-50" />
                        Sign out
                    </button>
                </div>
            </div>
        </nav>

        <router-view class="flex-1 max-h-screen overflow-auto relative z-10" />
    </div>
</div>
</template>

<script lang="ts" src="./Navbar.ts" />
