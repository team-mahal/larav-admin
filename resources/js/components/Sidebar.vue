<template>
<div>
    <div v-if="ismobile=='m'" id="sidebar" class="h-screen w-10 menu bg-white text-white px-0 lex nunito static fixed shadow">
        <ul class="list-reset w-full">
            <li class="relative">
               <div class="absolute z-20 posationm cursor-pointer" @click="taggleview()">
                    <svg aria-hidden="true" data-prefix="fal" data-icon="times" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-8 w-8 pl-2 text-green-700"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
               </div>
            </li>
            <li class="text-center text-green-900 py-1">
                <h2 class="text-sm py-4 md:py-0 md:text-4xl invisible">
                    <router-link to="/">
                        <img src="/logo.png" alt="">
                    </router-link>
                </h2>
            </li>
            <li class="my-1 md:my-0">
                <a href="#" class="block justify-center hover:justify-start md:md:justify-start py-2 align-middle text-gray-600 no-underline hover:text-indigo-400 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                </a>
            </li>
              <li class="my-1 md:my-0">
                <a href="#" class="block justify-center hover:justify-start md:md:justify-start py-2 align-middle text-gray-600 no-underline hover:text-indigo-400 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    
    <div v-else id="sidebar" class="h-screen w-64 menu bg-white text-white px-0 md:px-4 flex nunito static fixed shadow">
        <ul class="list-reset w-full">
            <li class="relative">
               <div class="absolute z-20 posation cursor-pointer" @click="taggleview()">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="align-justify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 w-8 pl-2 text-green-700"><g class="fa-group">
                        <path fill="currentColor" d="M432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z" class="fa-secondary"/>
                        <path fill="currentColor" d="M432 288H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-256H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z" class="fa-primary"/></g>
                    </svg>
               </div>
            </li>
            <router-link to="/">
                <li class="text-center text-green-900 py-1">
                    <h2 class="text-sm py-4 md:py-0 md:text-4xl">
                        <router-link to="/">
                            <img src="/logo.png" alt="" class="w-48">
                        </router-link>
                    </h2>
                </li>
            </router-link>
            <li class="my-2 md:my-0">   
                <a href="#" class="block justify-center hover:justify-start md:md:justify-start py-2 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block">Home</span>
                </a>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="/users" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block active">Users</span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters({
                ismobile: 'sidebar/ismobile'
            }),
        },
        methods:{
            taggleview(){
                this.$store.dispatch('sidebar/setview')
            }
        }
    };
</script>

<style>
    .posation{
        right: -5%;
        top: 21px;
    }
    .posationm{
        right: 18%;
        top: 21px; 
    }
</style>