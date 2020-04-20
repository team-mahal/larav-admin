function page (path) {
	return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
	{ path: '/', name: 'welcome', component: page('welcome.vue') },
	{ path: '/login', name: 'login', component: page('auth/login.vue') },
	{ path: '/register', name: 'register', component: page('auth/register.vue') },
	{ path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
	{ path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
	{ path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
	{ path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
	{ path: '/users', name: 'users', component: page('users.vue') },
	{ path: '/components', name: 'components', component: page('components/charts.vue'),
		children: [
			{ path: 'charts', name: 'components.charts', component: page('components/charts.vue') },
		]
	}, 
	{ path: '/uielements',
		component: page('uielements/index.vue'),
		children: [
			{ path: '', redirect: { name: 'uielements.buttons' } },
			{ path: 'buttons', name: 'uielements.buttons', component: page('uielements/buttons.vue') },
			{ path: 'progress', name: 'uielements.progress', component: page('uielements/progress.vue') },
			{ path: 'accordions', name: 'uielements.accordions', component: page('uielements/accordions.vue') },
			{ path: 'notifications', name: 'uielements.notifications', component: page('uielements/notifications.vue') },
		]
	},  
	{ path: '/settings',
		component: page('settings/index.vue'),
		children: [
			{ path: '', redirect: { name: 'settings.profile' } },
			{ path: 'components/profile', name: 'settings.profile', component: page('settings/profile.vue') },
			{ path: 'password', name: 'settings.password', component: page('settings/password.vue') }
		]
	},
	{ path: '*', component: page('errors/404.vue') }
]
