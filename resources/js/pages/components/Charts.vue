<template>
<div>
	<div class="flex flex-wrap justify-center">
		<div class="bg-white shadow-lg w-full md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-5 border-l-4 rounded-md border-green-500 m-2">
			<MonthlyIncome/>
		</div>
		<div class="bg-white shadow-lg w-full md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-5 border-l-4 rounded-md border-green-500 m-2">
			<BarExample/>
		</div>
	</div>
	<div class="flex flex-wrap mt-3">
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<BubbleExample/>	
		</div>
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<CustomExample/>
		</div>
	</div>
	<div class="flex flex-wrap mt-3">
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<DoughnutExample/>	
		</div>
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<HorizontalBarExample/>
		</div>
	</div>
	<div class="flex flex-wrap mt-3">
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<LineExample/>	
		</div>
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<PieExample/>
		</div>
	</div>
	<div class="flex flex-wrap mt-3">
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<PolarAreaExample/>	
		</div>
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<RadarExample/>
		</div>
	</div>
	<div class="flex flex-wrap mt-3">
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<ReactiveExample/>	
		</div>
		<div class="md:w-1/3 lg:w-1/3 xl:w-1/3 flex-grow p-3 bg-white shadow-lg m-2">
			<ReactivePropExample/>
		</div>
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MonthlyIncome from './../../components/chartjs/MonthlyIncome.vue'
import BarExample from './../../components/chartjs/BarExample.vue'
import BubbleExample from './../../components/chartjs/BubbleExample.vue'
import CustomExample from './../../components/chartjs/CustomExample.vue'
import DoughnutExample from './../../components/chartjs/DoughnutExample.vue'
import HorizontalBarExample from './../../components/chartjs/HorizontalBarExample.vue'
import LineExample from './../../components/chartjs/LineExample.vue'
import PieExample from './../../components/chartjs/PieExample.vue'
import PolarAreaExample from './../../components/chartjs/PolarAreaExample.vue'
import RadarExample from './../../components/chartjs/RadarExample.vue'
import ReactiveExample from './../../components/chartjs/ReactiveExample.vue'
import ReactivePropExample from './../../components/chartjs/ReactivePropExample.vue'

export default {
	name:"components.charts",
	layout: 'basic',
	components: { MonthlyIncome,BarExample,BubbleExample,CustomExample,DoughnutExample,HorizontalBarExample,LineExample,PieExample,PolarAreaExample,RadarExample,ReactiveExample,ReactivePropExample },
	metaInfo () {
		return { title: this.$t('home') }
	},

	data: () => ({
		title: window.config.appName
	}),

	computed: mapGetters({
		authenticated: 'auth/check'
	}),
};
</script>
