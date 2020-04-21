<template>
<div>
	<div>
		<card :title="$t('settings')" class="settings-card">
			<ul class="nav flex-column nav-pills">
				<li v-for="tab in tabs" :key="tab.route" class="nav-item">
					<router-link :to="{ name: tab.route }" class="underline">
						{{ tab.name }}
					</router-link>
				</li>
			</ul>
		</card>
	</div>

	<div>
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</div>
</template>

<script>
export default {
	middleware: 'auth',

	computed: {
		tabs () {
			return [
				{
					icon: 'user',
					name: this.$t('profile'),
					route: 'settings.profile'
				},
				{
					icon: 'lock',
					name: this.$t('password'),
					route: 'settings.password'
				}
			]
		}
	}
}
</script>

<style>
.settings-card .card-body {
	padding: 0;
}
</style>
