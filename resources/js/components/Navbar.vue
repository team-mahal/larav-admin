<template>
<div class="bg-white">
    <div class="w-full flex flex-wrap shadow py-2">
        <nav id="header1" class="w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">
            <div class="flex h-full justify-between items-center">
            <!--Search-->
            <div class="relative w-50 px-6">
                <div class="hidden md:block">
                    <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                        <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>

                    <input id="search-toggle" type="search" placeholder="search" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3" onkeyup="updateSearchResults(this.value);">
                </div>
            </div>
            <!-- / Search-->
            <!--Menu-->
            <div class="flex relative inline-block pr-6">
                <LocaleDropdown/>
                <div class="relative text-sm">
                    <div class="flex">
                    	<template v-if="token"> 
							<button id="userButton" class="flex items-center focus:outline-none mr-3" @click="dropdown()">
                                <avatar :username="user.name" v-if="user" backgroundColor="#276749" :size="30"></avatar>
                                <span v-if="user" class="hidden md:inline-block ml-1">Hi, {{ user.name }}</span>
                            </button>
						</template>
						<template v-else>
							<router-link class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" :to="{ name: 'login' }">
								{{ $t('login') }}
							</router-link>
							<router-link class="ml-3 bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow" :to="{ name: 'register' }">
								{{ $t('register') }}
							</router-link>
						</template>
                    </div>
                    <div id="userMenu" v-bind:class="activeClass ? '' : 'hidden'"  class="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
                        <ul class="list-reset">
                            <li @click="dropdown()">
                                <router-link to="/settings" class="px-4 py-2 block text-gray-900 hover:bg-green-400 hover:text-white no-underline hover:no-underline">
                                My account
                            </router-link>
                        </li>
                        <li>
                            <a href="#" class="px-4 py-2 block text-gray-900 hover:bg-green-400 hover:text-white no-underline hover:no-underline">
                                Notifications
                            </a>
                        </li>
                        <li>
                            <hr class="border-t mx-2 border-gray-400">
                        </li>
                        <li>
                            <a href="#" class="px-4 py-2 block text-gray-900 hover:bg-green-400 hover:text-white no-underline hover:no-underline" @click="logout">
                                Logout
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- / Menu -->

            </div>

        </nav>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
	components: {
		LocaleDropdown
	},

	data: () => ({
		appName: window.config.appName,
        activeClass: false,
	}),

	computed: mapGetters({
        user: 'auth/user',
		token: 'auth/token',
        ismobile: 'sidebar/ismobile'
	}),

	methods: {
        dropdown(){
            this.activeClass=!this.activeClass
        },
		async logout () {
            this.activeClass=!this.activeClass
			await this.$store.dispatch('auth/logout')
			this.$router.push({ name: 'login' })
		}
	},
};
</script>

