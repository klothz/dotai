<template>
    <div>
        <!-- Start Best Sellers Area -->
        <section class="best-sellers-area pb-60">
            <div class="container">
                <br>
                <div class="row">

                    <ProductItem
                        v-for="(product, index) in products"
                        :product="product"
                        :key="product.id"
                        :glow="colors[index % 2]"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>

                </div>
            </div>
        </section>
        <!-- End Best Sellers Area -->
        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from './ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },
    methods: {
        toggle() {
            mutations.toggleQuickView()
        }
    },
    computed: {
        products(){
            return this.$store.state.products.all.filter(product => product.bestSellers === true)
        },
        colors(){
            return ["border-flicker-blue 3s linear infinite;", "border-flicker-pink 2s linear infinite;"]
        }
    }
}
</script>