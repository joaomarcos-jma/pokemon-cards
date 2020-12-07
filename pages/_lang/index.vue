<template>
  <v-layout wrap>
    <v-row>
      <v-slide-x-reverse-transition mode="out-in">
        <v-text-field
          v-model="search"
          :loading="loading"
          :items="items"
          class="mx-4"
          flat
          :label="$t('home.search')"
          solo-inverted
          clearable
        ></v-text-field>
      </v-slide-x-reverse-transition>
      <v-flex xs12 sm8 offset-sm2 align-center justify-center>
        <v-layout column class="justify-center align-center">
          <v-layout class="cards pokemon-cards flex-wrap justify-center">
            <v-row>
              <v-col cols="4" v-for="(pokemon, i) of pokemonData.cards" :key="i">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="d-flex">
                    <div class="animate__animated animate__fadeInRight">
                      <v-img @click="goTo(`/pokemon/${pokemon.id}`)" :src="pokemon.imageUrl">
                        <v-expand-transition>
                          <v-fade-transition>
                            <v-overlay v-if="hover" absolute color="#036358">
                              <span class="white--text headline pt-10">{{pokemon.name}}</span>
                            </v-overlay>
                          </v-fade-transition>
                        </v-expand-transition>
                      </v-img>
                    </div>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-row>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    viewPokemon: "",
    loading: false,
    items: [],
    search: null,
    select: null,
    comics: []
  }),
  computed: {
    ...mapState(["pokemonData", "isLoading"])
  },
  watch: {
    search(val) {
      if (!val) {
        return this.getPokemons();
      }
      val && this.querySelections(val);
    }
  },
  created() {
    this.getPokemons();
  },
  methods: {
    getPokemons() {
      this.$store.dispatch("getPokemon", this.search);
    },
    querySelections(v) {
      this.loading = true;
      this.getPokemons();
      setTimeout(() => {
        this.items = this.pokemonData.cards.filter(e => {
          return (
            (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 100);
    },
    goTo(path) {
      if (this.$i18n.locale === "pt") {
        return this.$router.push(`${path}`);
      }
      this.$router.push(`/en` + path);
    }
  }
};
</script>