<template>
  <transition name="page" mode="out-in">
    <slot>
      <router-view />
    </slot>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
	
export default {
  name: 'Child',
 
}
</script>
