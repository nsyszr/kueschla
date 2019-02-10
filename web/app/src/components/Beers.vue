<template>
  <div>
    <v-toolbar color="light-blue" light extended>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-btn fab small color="cyan accent-2" bottom left absolute @click="dialog = !dialog">
        <v-icon>add</v-icon>
      </v-btn>
      <v-toolbar-title slot="extension" class="white--text">Unsere Biere</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>view_module</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line subheader>
      <template v-for="brewery in getBreweries()">
        <div :key="brewery">
          <v-subheader inset v-if="brewery">{{brewery}}</v-subheader>
          <v-list-tile v-for="beer in getBeersByBrewery(brewery)" :key="beer.id" avatar @click>
            <v-list-tile-avatar>
              <img :src="beer.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ beer.title }}</v-list-tile-title>
              <v-list-tile-sub-title>
                {{ beer.alcoholicStrength }}% Vol. Alkohol
                {{ beer.originalWort}}% Stammwürze
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
        </div>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  /*computed: mapState({
    beers: state => state.beers.all
  }),*/
  computed: {
    ...mapGetters({
      getBreweries: "beers/getBreweries",
      getBeersByBrewery: "beers/getBeersByBrewery"
    })
  },
  methods: {
    ...mapActions("cart", ["addBeerToCart"])
  },
  created() {
    this.$store.dispatch("beers/getAllBeers");
  }
};
</script>
