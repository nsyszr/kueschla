<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!beers.length">
      <i>Please add some beer to cart.</i>
    </p>
    <ul>
      <li
        v-for="beer in beers"
        :key="beer.id"
      >{{ beer.title }} - {{ beer.price | currency }} x {{ beer.quantity }}</li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p>
      <button :disabled="!beers.length" @click="checkout(beers)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      beers: "cartBeers",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(beers) {
      this.$store.dispatch("cart/checkout", beers);
    }
  }
};
</script>