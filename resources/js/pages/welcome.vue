<template>
<div>
	<div class="flex flex-wrap mb-5">
		<div class="bg-white shadow py-2">
			<div class="card-body">
				<div class="row no-gutters align-items-center">
					<div class="col mr-2">
						<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Users</div>
						<div class="h5 mb-0 font-weight-bold text-gray-800">7918</div>
					</div>
					<div class="col-auto">
						<i class="fas fa-calendar fa-2x text-gray-300"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex">
		<div class="bg-white shadow w-1/4">
			<div class="flex border-b-2 border-gray-100 p-5 items-center justify-between">
			    <h3 class="text-md font-bold">Users</h3>
			    <a href="#" class="text-md underline text-green-700">View All Users</a>
			</div>
			<div class="bg-white shadow" style="height: 25rem;">
				<vuescroll>
					<div class="flex border-b-2 border-gray-100 p-6 items-center">
					    <img class="h-12 w-12 rounded-full" src="/avatar/17.jpg">
					    <div class="text-center md:text-left ml-5 w-1/3">	
					     	<h3 class="text-md font-bold">Erin Lindford</h3>
					      	<div class="text-green-700 text-xs">Very Active</div>
					    </div>
					    <div class="text-sm text-gray-500 ml-10 text-right w-1/3 text-right">1 hour ago</div>
					</div>
					<div class="flex border-b-2 border-gray-100 p-6 items-center">
					    <img class="h-12 w-12 rounded-full" src="/avatar/1.jpg">
					    <div class="text-center md:text-left ml-5 w-1/3">	
					     	<h3 class="text-md font-bold">Jual Ahmed</h3>
					      	<div class="text-red-500 text-xs">Not Active</div>
					    </div>
					    <div class="text-sm text-gray-500 ml-10 w-1/3 text-right">1 hour ago</div>
					</div>
					<div class="flex border-b-2 border-gray-100 p-6 items-center">
					    <img class="h-12 w-12 rounded-full" src="/avatar/2.jpg">
					    <div class="text-center md:text-left ml-5 w-1/3 ">	
					     	<h3 class="text-md font-bold">Erin Lindford</h3>
					      	<div class="text-green-700 text-xs">Very Active</div>
					    </div>
					    <div class="text-sm text-gray-500 ml-10 w-1/3 text-right">1 hour ago</div>
					</div>
					<div class="flex border-b-2 border-gray-100 p-6 items-center">
					    <img class="h-12 w-12 rounded-full" src="/avatar/3.jpg">
					    <div class="text-center md:text-left ml-5 w-1/3">	
					     	<h3 class="text-md font-bold">Erin Lindford</h3>
					      	<div class="text-green-700 text-xs">Very Active</div>
					    </div>
					    <div class="text-sm text-gray-500 ml-10 w-1/3 text-right">1 hour ago</div>
					</div>
					<div class="flex p-6 items-center">
					    <img class="h-12 w-12 rounded-full" src="/avatar/17.jpg">
					    <div class="text-center md:text-left ml-5 w-1/3">	
					     	<h3 class="text-md font-bold">Erin Lindford</h3>
					      	<div class="text-green-700 text-xs">Very Active</div>
					    </div>
					    <div class="text-sm text-gray-500 ml-10 w-1/3 text-right">1 hour ago</div>
					</div>
				</vuescroll>
			</div>
		</div>

		<div class="bg-white shadow ml-5 w-1/4">
			<div class="flex border-b-2 border-gray-100 p-5 items-center justify-between">
			    <h3 class="text-md font-bold">Total Yearly Impact</h3>
			</div>
			<div class="bg-white shadow" style="height: 25rem;">
				<vuescroll>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Donations</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Actions</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-900 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Goal</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Tax</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-gray-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
				</vuescroll>
			</div>
		</div>

		<div class="bg-white shadow ml-5 w-2/4">
			<div class="flex border-b-2 border-gray-100 p-5 items-center justify-between">
			    <h3 class="text-md font-bold">Total Business Earning</h3>
			</div>
			<div class="bg-white shadow" style="height: 25rem;">
				<vuescroll>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Donations</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Actions</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-900 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Goal</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-green-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
					<div class="border-b-2 border-gray-100 p-6 items-center">
					    <div class="flex justify-between">	
					     	<h3 class="text-md font-bold">Your Tax</h3>
					      	<div class="text-green-700 text-xs">545$</div>
					    </div>
					    <div class="shadow w-full bg-green-100 mt-2">
						    <div class="bg-gray-500 text-xs leading-none py-1 text-center text-white" style="width: 45%">45%</div>
						</div>
					</div>
				</vuescroll>
			</div>
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
