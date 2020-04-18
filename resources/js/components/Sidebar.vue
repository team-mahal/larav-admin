<template>
<div class="site-bar">

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
    
    <div v-else id="sidebar" class="h-screen w-64 menu bg-white text-white flex nunito static fixed shadow">
        <ul class="list-reset w-full">
            <li class="relative">
               <div class="absolute z-20 posation cursor-pointer" @click="taggleview()">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="align-justify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 w-8 pl-2 text-green-700"><g class="fa-group">
                        <path fill="currentColor" d="M432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z" class="fa-secondary"/>
                        <path fill="currentColor" d="M432 288H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-256H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z" class="fa-primary"/></g>
                    </svg>
               </div>
            </li>
            <li class="text-center text-green-900 py-1">
                <h2 class="text-sm p-2 text-4xl text-center">
                    <img src="/logo.png" alt="" class="w-40">
                </h2>
            </li>
            <li class="my-2 md:my-0">   
                <router-link to="/" class="py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block">Home</span>
                </router-link>
            </li>

            <li class="my-2 md:my-0" v-for="(item,index) in navitem">
                <router-link v-if="item.link" :to="item.link" class="py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center">
                    <span v-html="item.icon"></span>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block">{{ item.name }}</span>
                </router-link>
                <div v-else class="py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center cursor-pointer" @click="toggle(index)">
                    <span v-html="item.icon"></span>

                    <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block">{{ item.name }}</span>

                    <svg class="w-4 h-4" v-if="!item.collapsed" aria-hidden="true" data-prefix="fas" data-icon="angle-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>

                    <svg class="w-4 h-4" v-else aria-hidden="true" data-prefix="fas" data-icon="angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                </div>
                <ul class="list-reset w-full block" v-if="item.child && item.collapsed">
                    <li class="my-2 md:my-0" v-for="(i,index1) in item.child"> 

                        <router-link v-if="!i.child" :to="i.link" class="py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center">
                            <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block pl-10">{{ i.name }}</span>
                        </router-link>

                        <div v-else class="ml-2 py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center cursor-pointer" @click="toggle(index1)">
                            <span v-html="i.icon"></span>

                            <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block">{{ i.name }}</span>

                            <svg class="w-4 h-4" v-if="!i.collapsed" aria-hidden="true" data-prefix="fas" data-icon="angle-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>

                            <svg class="w-4 h-4" v-else aria-hidden="true" data-prefix="fas" data-icon="angle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                        </div>
                        <ul class="list-reset w-full block" >
                            <li class="my-2 md:my-0" v-for="j in i.child" v-if="i.child"> 
                                <router-link :to="j.link" class="py-2 pl-1 text-gray-600 no-underline hover:text-green-200 flex items-center">
                                    <span class="w-full inline-block pb-1 md:pb-0 text-sm pl-2 hidden sm:hidden md:block lg:block xl:block pl-10">{{ j.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
    </div>
    
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data: () => ({
            children: false,
            navitem:[
                {
                    name:'Datatables',
                    link:'/users',
                    icon:'<svg class="w-4 h-4 fill-current" aria-hidden="true" data-prefix="fad" data-icon="users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g class="fa-group"><path fill="currentColor" d="M96 224a64 64 0 10-64-64 64.06 64.06 0 0064 64zm480 32h-64a63.81 63.81 0 00-45.1 18.6A146.27 146.27 0 01542 384h66a32 32 0 0032-32v-32a64.06 64.06 0 00-64-64zm-512 0a64.06 64.06 0 00-64 64v32a32 32 0 0032 32h65.9a146.64 146.64 0 0175.2-109.4A63.81 63.81 0 00128 256zm480-32a64 64 0 10-64-64 64.06 64.06 0 0064 64z" class="fa-secondary"/><path fill="currentColor" d="M396.8 288h-8.3a157.53 157.53 0 01-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 00128 403.2V432a48 48 0 0048 48h288a48 48 0 0048-48v-28.8A115.23 115.23 0 00396.8 288zM320 256a112 112 0 10-112-112 111.94 111.94 0 00112 112z" class="fa-primary"/></g></svg>'
                },
                {
                    name:'Components',
                    link:'',
                    icon:'<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M0 0h54.857v54.857H0V0zm0 73.143h54.857V128H0V73.143zm73.143 0H128V128H73.143V73.143zm27.428-18.286C115.72 54.857 128 42.577 128 27.43 128 12.28 115.72 0 100.571 0 85.423 0 73.143 12.28 73.143 27.429c0 15.148 12.28 27.428 27.428 27.428z"/></svg>',
                    collapsed:false,
                    child:[
                        {
                            name:"Charts",
                            link:'/components/charts',
                        },  
                        {
                            name:"Test",
                            link:'/asas/werewr'
                        },
                        {
                            name:"Test",
                            link:'/asas/dfsdfs'
                        },
                        {
                            name:"Test",
                            link:'/asas/sdfsf'
                        },
                        {
                            name:"Test",
                            link:'/asas/sdfsdf'
                        }
                    ]
                },
                {
                    name:'UI Elements',
                    link:'',
                    icon:'<svg aria-hidden="true" data-prefix="fas" data-icon="laptop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4 fill-current"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>',
                    collapsed:false,
                    child:[
                        {
                            name:"Buttons",
                            link:'/uielements/buttons',
                            icon:'<svg aria-hidden="true" data-prefix="fas" data-icon="laptop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4 fill-current"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>',
                            collapsed:false,
                            child:[
                                {
                                    name:"Buttons",
                                    link:'/uielements/buttons',
                                },
                                {
                                    name:"Buttons",
                                    link:'/uielements/buttons',
                                },
                                {
                                    name:"Buttons",
                                    link:'/uielements/buttons',
                                },
                            ],
                        },
                        {
                            name:"Test",
                            link:'/asas/werewr'
                        },
                        {
                            name:"Test",
                            link:'/asas/dfsdfs'
                        },
                        {
                            name:"Test",
                            link:'/asas/sdfsf'
                        },
                        {
                            name:"Test",
                            link:'/asas/sdfsdf'
                        }
                    ]
                },
            ]
        }),
        computed: {
            ...mapGetters({
                ismobile: 'sidebar/ismobile'
            }),
        },
        methods:{
            toggle(index){
                this.navitem[index].collapsed=!this.navitem[index].collapsed;
            },
            taggleview(){
                this.$store.dispatch('sidebar/setview')
            }
        }
    };
</script>

<style>
    .site-bar .router-link-exact-active{
        color: #68D391;
        border-right: 2px solid;
        background: #EDF2F7;
    }
    .posation{
        right: 1%;
        top: 20px;
    }
    .posationm{
        right: 18%;
        top: 21px; 
    }
</style>