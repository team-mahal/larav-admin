<template>
<div>
	
</div>
</template>

<script>


export default {
	name:"components.charts",
	layout: 'basic',

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
