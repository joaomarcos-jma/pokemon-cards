<template>
  <v-layout wrap>
    <v-container>
      <div style="text-align: right">
        <v-btn @click="goTo('/')" text style="margin-right: 30px">
          <v-icon size="35">mdi-arrow-left</v-icon>
        </v-btn>
      </div>
      <v-row class="section">
        <v-col cols="12" sm="4">
          <v-img :src="resolvePokemon.imageUrlHiRes"></v-img>
        </v-col>

        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title>
              {{ resolvePokemon.name }}
              HP {{resolvePokemon.hp}}
              <img
                v-if="resolvePokemon.types"
                width="35"
                height="35"
                :src="require(`@/static/icons/${resolvePokemon.types[0]}.png`)"
              />
            </v-card-title>
            <v-card-subtitle>{{ `${resolvePokemon.supertype} - ${resolvePokemon.subtype}`}}</v-card-subtitle>
            <v-divider />
            <v-container>
              <v-row v-for="(att, a) of resolvePokemon.attacks" :key="a">
                <div v-for="(cost, c) of att.cost" :key="c">
                  <img width="25" height="25" :src="require(`@/static/icons/${cost}.png`)" />
                </div>
                {{`${att.name} | ${att.damage}`}}
                <v-card-text>{{att.text}}</v-card-text>
              </v-row>
              <v-row>
                <v-col>
                  <h3>WEAKNESS</h3>
                  <div v-if="resolvePokemon.weaknesses">
                    <img
                      width="25"
                      height="25"
                      :src="require(`@/static/icons/${resolvePokemon.weaknesses[0].type}.png`)"
                    />
                    {{resolvePokemon.weaknesses[0].value}}
                  </div>
                  <div v-else>N/A</div>
                </v-col>
                <v-col>
                  <h3>RESISTANCES</h3>
                  <div v-if="resolvePokemon.resistances">
                    <img
                      width="25"
                      height="25"
                      :src="require(`@/static/icons/${resolvePokemon.resistances[0].type}.png`)"
                    />
                    {{resolvePokemon.resistances[0].value}}
                  </div>
                  <div v-else>N/A</div>
                </v-col>
                <v-col>
                  <h3>RETREAT COST</h3>
                  <div v-if="resolvePokemon.retreatCost">
                    <img
                      width="25"
                      height="25"
                      :src="require(`@/static/icons/${resolvePokemon.retreatCost[0]}.png`)"
                    />
                  </div>
                  <div v-else>N/A</div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["resolvePokemon"])
  },
  mounted() {
    this.$store.dispatch("getPokemonById", this.$route.params.id);
  },
  methods: {
    goTo(path) {
      if (this.$i18n.locale === "pt") {
        return this.$router.push(path)
      }
      this.$router.push(`/en` + path);
    }
  }
};
</script>