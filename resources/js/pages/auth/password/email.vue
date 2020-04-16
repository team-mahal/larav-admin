<template>
	<div class="text-center">
		<div class="m-auto">
			<div class="max-w-xs m-auto">
				<card :title="$t('reset_password')">
						<form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="send" @keydown="form.onKeydown($event)">
							<alert-success :form="form" :message="status" />

							<!-- Email -->
							<div class="form-group">
								<label class="block text-green-500 text-sm font-bold mb-2 text-left">{{ $t('email') }}</label>
								<div class="my-2">
									<input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="email" name="email">
									<has-error :form="form" field="email" class="mt-2 text-red-600 text-left font-semibold"/>
								</div>
							</div>

							<!-- Submit Button -->
							<div class="form-group">
								<div class="ml-md-auto">
									<v-button :loading="form.busy">
										{{ $t('send_password_reset_link') }}
									</v-button>
								</div>
							</div>
						</form>
				</card>
			</div>
		</div>
	</div>
</template>

<script>
import Form from 'vform'

export default {
	middleware: 'guest',

	metaInfo () {
		return { title: this.$t('reset_password') }
	},

	data: () => ({
		status: '',
		form: new Form({
			email: ''
		})
	}),

	methods: {
		async send () {
			const { data } = await this.form.post('/api/password/email')

			this.status = data.status

			this.form.reset()
		}
	}
}
</script>
