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
     computed: {
        ...mapGetters({
            ismobile: 'sidebar/ismobile'
        }),
    },
  mounted () {
		this.$loading = this.$refs.loading
		// window.onresize = () => {
		// 	console.log("ssssssssss");
	 //        if(768>=window.innerWidth){
	 //        	if(this.ismobile!='m'){
	 //            	let data='m';
	 //            	this.$store.dispatch('sidebar/setview1',{m:data})
	 //        	}
	 //        }else{
	 //        	if(this.ismobile!='d'){
		//             let data='d';
		//             this.$store.dispatch('sidebar/setview1',{m:data})
		//         }
	 //        }
	 //    }
	},
	name: 'BasicLayout'
};
</script>

<style>
	
</style>
