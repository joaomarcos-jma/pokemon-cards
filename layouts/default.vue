<template>
  <v-app dark>
    <v-main>
      <v-app-bar color="brown" dense dark>
        <v-btn
          v-if="$i18n.locale === 'pt'"
          :to="`/en` + $route.fullPath"
          class="Header__Link"
          active-class="none"
          exact
          id="language"
        >
          {{ $t('links.english') }}
          <v-icon>mdi-language</v-icon>
        </v-btn>
        <v-btn
          v-else
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          class="Header__Link"
          active-class="none"
          exact
        >{{ $t('links.brazilian') }}</v-btn>
      </v-app-bar>
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
      return this.$store.state.isLoading;
    }
  }
};
</script>
