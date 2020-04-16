<template>
<div>
	<sidebar/>
	<div :class="ismobile=='m' ? 'ml-10':'sm:ml-10 md:ml-64 lg:ml-64 xl:ml-64'">
		<navbar/>
		<div class="p-3">
			<child />
		</div>
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
export default {
	components: {
    	Navbar,
    	Sidebar
  	},
  	computed: mapGetters({
        ismobile: 'sidebar/ismobile'
    }),
	name: 'BasicLayout'
};
</script>

<style>
	
</style>
