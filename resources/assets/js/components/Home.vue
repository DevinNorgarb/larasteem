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
    steem.api.setOptions({ url: 'https://api.steemit.com' })
    steem.api.getAccounts(['xenetics'], (err, result) => {
      console.log(JSON.parse((result[0].json_metadata)))
    })  }
}
</script>

<style lang="css">
</style>
