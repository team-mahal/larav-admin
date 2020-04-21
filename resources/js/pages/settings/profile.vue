<template>
<div class="max-w-xs m-auto text-center bg-white shadow-lg">
	<card :title="$t('your_info')">
		<form @submit.prevent="update" class="p-5" @keydown="form.onKeydown($event)">
			<alert-success :form="form" :message="$t('info_updated')" />

			<!-- Name -->
			<label class="block text-green-500 text-sm font-bold mb-2 text-left">{{ $t('name') }}</label>
			<input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="text" name="name">
			<has-error :form="form" field="name" />

			<!-- Email -->
			<label class="block text-green-500 text-sm font-bold mb-2 text-left">{{ $t('email') }}</label>
			<div class="col-md-7">
				<input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="email" name="email">
				<has-error :form="form" field="email" />
			</div>

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
import { mapGetters } from 'vuex'

export default {
	scrollToTop: false,

	metaInfo () {
		return { title: this.$t('settings') }
	},

	data: () => ({
		form: new Form({
			name: '',
			email: ''
		})
	}),

	computed: mapGetters({
		user: 'auth/user'
	}),

	created () {
		// Fill the form with user data.
		this.form.keys().forEach(key => {
			this.form[key] = this.user[key]
		})
	},

	methods: {
		async update () {
			const { data } = await this.form.patch('/api/settings/profile')

			this.$store.dispatch('auth/updateUser', { user: data })
		}
	}
}
</script>
