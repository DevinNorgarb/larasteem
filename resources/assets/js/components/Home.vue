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
    this.getDiscussionsByTrending()
    steem.api.setOptions({ url: 'https://api.steemit.com' })
    // steem.api.getAccounts(['xenetics'], (err, result) => {
    //   console.log(JSON.parse((result[0].json_metadata)))
    // })
  },
  methods: {
    getDiscussionsByTrending() {
      steem.api.getDiscussionsByTrending(query, function(err, result) {
        console.log(err, result);
      });
    }
  }

}
</script>

<style lang="css">
</style>
