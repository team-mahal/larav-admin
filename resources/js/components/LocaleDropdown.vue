<template>
  <li v-if="Object.keys(locales).length > 1" class="list-none">
	<a class="px-4 py-2 block text-gray-900 hover:bg-green-400 hover:text-white no-underline hover:no-underline" href="#" role="button"
	   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
	>
	  {{ locales[locale] }}
	</a>
	<div class="hidden">
	  <a v-for="(value, key) in locales" :key="key" class="px-4 py-2 block text-gray-900 hover:bg-green-400 hover:text-white no-underline hover:no-underline" href="#"
		 @click.prevent="setLocale(key)"
	  >
		{{ value }}
	  </a>
	</div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
export default {
  	computed: mapGetters({
		locale: 'lang/locale',
		locales: 'lang/locales'
  	}),
  	methods: {
		setLocale (locale) {
		  	if (this.$i18n.locale !== locale) {
				loadMessages(locale)
				this.$store.dispatch('lang/setLocale', { locale })
		  	}
		}
  	}
}
</script>