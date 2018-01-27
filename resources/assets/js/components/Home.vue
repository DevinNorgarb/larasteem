<template lang="html">
<profile></profile>
</template>

<script>
import steem from 'steem'
import Profile from './profile/Profile.vue'
export default {
  name: 'home',
  components: {
    Profile
  },
  mounted() {
    console.log(steem);
  }
}
</script>

<style lang="css">
</style>
