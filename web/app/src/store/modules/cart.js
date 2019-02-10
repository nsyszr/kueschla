import beers from "../../api/beers";

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {
  cartBeers: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const beer = rootState.beers.all.find(beer => beer.id === id);
      return {
        title: beer.title,
        price: beer.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartBeers.reduce((total, beer) => {
      return total + beer.price * beer.quantity;
    }, 0);
  }
};

// actions
const actions = {
  checkout({ commit, state }, items) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    beers.buyBeers(
      items,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addBeerToCart({ state, commit }, beer) {
    commit("setCheckoutStatus", null);
    if (beer.inventory > 0) {
      const cartItem = state.items.find(item => item.id === beer.id);
      if (!cartItem) {
        commit("pushBeerToCart", { id: beer.id });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit("beers/decrementBeerInventory", { id: beer.id }, { root: true });
    }
  }
};

// mutations
const mutations = {
  pushBeerToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
