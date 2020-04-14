<template>
<div>
	<div class="flex">
		<div class="flex bg-white shadow rounded-lg p-6">
		    <img class="h-12 w-12 rounded-full mr-5" src="/avatar/17.jpg">
		    <div class="text-center md:text-left">
		     	<h3 class="text-md font-bold">Erin Lindford</h3>
		      	<div class="text-green-500 text-xs">Very Active</div>
		    </div>
		    <div class="text-sm text-gray-500 mt-3 ml-5">1 hour ago</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	layout: 'basic',

	metaInfo () {
		return { title: this.$t('home') }
	},

	data: () => ({
		title: window.config.appName
	}),

	computed: mapGetters({
		authenticated: 'auth/check'
	})
};
</script>

<style scoped>
.top-right {
	position: absolute;
	right: 10px;
	top: 18px;
}

.title {
	font-size: 85px;
}
</style>
