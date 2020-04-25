<template>
<div>
    <h1 class="mb-4 text-xl text-center">
        Collapsible
    </h1>
    <div class="">
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
        <Accordion title="Massa vitae tortor condimentum lacinia quis vel eros donec" :cssclass='cssclass' class="w-1/2 mx-auto bg-white">
            <ul class="pl-4">
                <li class="pb-2">
                    consectetur adipiscing elit
                </li>
                <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </Accordion>
    </div>
</div>
</template>

<script>
	export default {
        data() {
            return {
                cssclass: {
                    content:'pl-8 pr-8 pb-5 text-grey-darkest border-l-2 border-indigo-500',
                    header:{
                        default:'flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none',
                        title:'text-grey-darkest font-thin text-xl',
                        icon:'rounded-full border border-grey w-7 h-7 flex items-center justify-center'
                    },
                    activeheader:{
                        default:'flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none border border-b-1',
                        title:'text-indigo font-thin text-xl',
                        icon:'rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo-500'
                    }
                }
            }
        },
		 methods : {
	        
	    }
	}
</script>

<style>
.content {
    transition: all 150ms ease;
}
.not-expanded .content {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    height: 0;
    padding: 0;
}
</style>