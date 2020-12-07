<template>
  <v-app dark>
    <v-main>
      <v-overlay class="fill-height" :value="isLoading">
        <loading v-if="isLoading" />
      </v-overlay>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
};
</script>
