import beers from "../../api/beers";

// initial state
const state = {
  all: []
};

// getters
const getters = {
  getBreweries: state => () => {
    const breweries = state.all.map(beer => beer.brewery);
    return [...new Set(breweries)];
  },
  getBeersByBrewery: state => brewery => {
    return state.all.filter(beer => beer.brewery === brewery);
  }
};

// actions
const actions = {
  getAllBeers({ commit }) {
    beers.getBeers(beers => {
      commit("setBeers", beers);
    });
  }
};

// mutations
const mutations = {
  setBeers(state, beers) {
    state.all = beers;
  },

  decrementBeerInventory(state, { id }) {
    const beer = state.all.find(beer => beer.id === id);
    beer.inventory--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
