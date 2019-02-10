import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import beers from "./modules/beers";
import createLogger from "../debug/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    cart,
    beers
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
