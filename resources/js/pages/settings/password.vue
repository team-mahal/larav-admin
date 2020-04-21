<template>
<div class="max-w-xs m-auto text-center bg-white shadow-lg">
	<card :title="$t('your_password')">
		<form class="p-5" @submit.prevent="update" @keydown="form.onKeydown($event)">
			<alert-success :form="form" :message="$t('password_updated')" />

			<!-- Password -->
			<label class="block text-green-500 text-sm font-bold mb-2 text-left">{{ $t('new_password') }}</label>
			<input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="password" name="password">
			<has-error :form="form" field="password" />

			<!-- Password Confirmation -->
			<label class="block text-green-500 text-sm font-bold mb-2 text-left">{{ $t('confirm_password') }}</label>
			<input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="password" name="password_confirmation">
			<has-error :form="form" field="password_confirmation" />

			<!-- Submit Button -->
			<div class="mt-3">
				<v-button :loading="form.busy" type="success">
					{{ $t('update') }}
				</v-button>
			</div>
		</form>
	</card>
</div>
</template>

<script>
import Form from 'vform'

export default {
	scrollToTop: false,

	metaInfo () {
		return { title: this.$t('settings') }
	},

	data: () => ({
		form: new Form({
			password: '',
			password_confirmation: ''
		})
	}),

	methods: {
		async update () {
			await this.form.patch('/api/settings/password')

			this.form.reset()
		}
	}
}
</script>
