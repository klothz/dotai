<template>
  <div>
    <div class="modal-backdrop" v-if="isPanelOpen"></div>
    <!-- Start Shopping Cart Modal -->
    <transition name="slide-fade">
      <div
        v-if="isPanelOpen"
        class="modal right shoppingCartModal"
        id="shoppingCartModal"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <button type="button" class="close" @click="closeSidebarPanel">
              <span aria-hidden="true">&times;</span>
            </button>

            <div class="modal-body" v-if="cart.length > 0">
              <h3>My Cart ({{ cart.length }})</h3>

              <div class="product-cart-content">
                <div class="product-cart" v-for="cart in cart" :key="cart.id">
                  <div class="product-image">
                    <img :src="cart.image" :alt="cart.name" />
                  </div>

                  <div class="product-content">
                    <h3>
                      <a href="#">{{ cart.name }}</a>
                    </h3>
                    <div class="product-price">
                      <span>{{ cart.quantity }}</span>
                      <span>x</span>
                      <span class="price">${{ cart.price }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-cart-subtotal">
                <span>Subtotal</span>

                <span class="subtotal">${{ cartTotal }}</span>
              </div>

              <div
                @click="closeSidebarPanel"
                class="product-cart-btn"
                id="cartButtonGroup"
              >
                <stripe-checkout
                  ref="checkoutRef"
                  :pk="pk"
                  :items="items"
                  :successUrl="successUrl"
                  :cancelUrl="cancelUrl"
                >
                  <template slot="checkout-button">
                    <button class="btn btn-primary" @click="checkout">
                      Proceed to Checkout
                    </button>
                  </template>
                </stripe-checkout>
              </div>
            </div>
            <div class="modal-body" v-else>
              <h3>Empty!</h3>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Shopping Cart Modal -->
  </div>
</template>

<script>
import { store, mutations } from "../utils/sidebar-util";
export default {
  name: "SidebarPanel",
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      items: [],
      successUrl: 'http://localhost:3000',
      cancelUrl: 'http://localhost:3000',
    };
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
    cart() {
      let cartItems = this.$store.getters.cart

      this.items = [];

      cartItems.forEach((item) => {
          this.items.push({
            sku: item.id,
            quantity: item.quantity
          })
      })
      
      console.log(this.items)
      return cartItems;
    },
    
    cartTotal() {
      return this.$store.getters.totalAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles/_transitions.scss";
</style>
