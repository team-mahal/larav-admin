<template>
	<div class="text-center">
		<div>
			<card :title="$t('login')">
				<div class="max-w-xs m-auto">
					<form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login" @keydown="form.onKeydown($event)">
						<!-- Email -->
						<div>
							<label class="block text-green-500 text-sm font-bold mb-2 text-left" for="username">{{ $t('email') }}</label>
							<div class="col-md-7">
								<input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3" type="email" name="email">
								<has-error :form="form" field="email" class="mt-2 text-red-600 text-left font-semibold" />
							</div>
						</div>

						<!-- Password -->
						<div class="form-group row">
							<label class="block text-green-500 text-sm font-bold mb-2 text-left" for="password">{{ $t('password') }}</label>
							<div class="col-md-7">
								<input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="sblock w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md rounded-full pl-12 pr-4 py-3"  type="password" name="password">
								<has-error :form="form" field="password" class="mt-2 text-red-600 text-left font-semibold"/>
							</div>
						</div>

						<!-- Remember Me -->
						<div class="form-group row text-left">
							<div class="col-md-3" />
							<div class="col-md-7 d-flex">
								<checkbox v-model="remember" name="remember">
									{{ $t('remember_me') }}
								</checkbox>

								<router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto underline">
									{{ $t('forgot_password') }}
								</router-link>
							</div>
						</div>

						<div class="form-group row">
							<div class="col-md-7 offset-md-3 d-flex">
								<!-- Submit Button -->
								<v-button :loading="form.busy">
									{{ $t('login') }}
								</v-button>

								<!-- GitHub Login Button -->
								<login-with-github />
							</div>
						</div>
					</form>
				</div>
			</card>
		</div>
	</div>
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/LoginWithGithub'

export default {
	middleware: 'guest',
	layout: 'basic',
	components: {
		LoginWithGithub
	},

	metaInfo () {
		return { title: this.$t('login') }
	},

	data: () => ({
		form: new Form({
			email: 'admin@admin.com',
			password: 'password'
		}),
		remember: false
	}),

	methods: {
		async login () {
			// Submit the form.
			const { data } = await this.form.post('/api/login')

			// Save the token.
			this.$store.dispatch('auth/saveToken', {
				token: data.token,
				remember: this.remember
			})

			// Fetch the user.
			await this.$store.dispatch('auth/fetchUser')

			// Redirect home.
			this.$router.push({ name: 'home' })
		}
	}
}
</script>
