<template lang="html">
  <b-container>
    <b-row>
      <b-col v-if="$fetchState.pending" md="12">
        <div class="loading-state">
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </div>
      </b-col>
      <b-col v-else md="4" v-for="(mountain, index) in mountains" :key=index>
        <b-card
          :title="mountain.title"
          :img-src="mountain.image"
          img-top
          style="margin-bottom: 24px;">
          <b-card-text>
            {{mountain.description}}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      mountains:[],
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  },
  // call fetch only on client-side
  fetchOnServer: false
}
</script>

<style lang="css" scoped>
.loading-state {
  text-align: center;
  padding-top: 50px;
}
</style>
