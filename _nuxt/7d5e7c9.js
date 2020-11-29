(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{405:function(t,e,r){"use strict";r.r(e);r(129);var n={props:["image"],data:function(){return{images:[{id:1,image:this.image}]}}},l=r(19),c=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"products-page-gallery",staticStyle:{animation:"border-flicker-blue 3s linear infinite"}},[e("div",{staticClass:"product-page-gallery-main"},[e("vueper-slides",{attrs:{bullets:!1}},this._l(this.images,(function(img,i){return e("vueper-slide",{key:i,attrs:{image:img.image}})})),1)],1)])])])}),[],!1,null,null,null).exports,o=(r(229),r(24),{data:function(){return{getExistPId:!1,quantity:1}},props:["id","name","price","image","type"],computed:{cart:function(){return this.$store.getters.cart}},methods:{addToCart:function(){var t=[{id:this.id,name:this.name,price:this.price,image:this.image,quantity:this.quantity}];if(this.cart.length>0){var e=this.id;-1==this.cart.findIndex((function(t){return t.id==e}))?(this.$store.dispatch("addToCart",t),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})):(this.$store.dispatch("updateCart",{id:e,unit:1,cart:this.cart}),this.getExistPId=!0,this.$toast.info("Already added to the cart"))}else this.$store.dispatch("addToCart",t),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})},increaseQuantity:function(){this.quantity>9?this.$toast("Can't add more than 10",{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast("Can't add less than 1",{icon:"fas fa-cart-plus"}):this.quantity--}}}),d={components:{ProductImages:c,Details:Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-md-6"},[r("div",{staticClass:"product-details-content"},[r("h3",[t._v(t._s(t.name))]),t._v(" "),r("div",{staticClass:"price"},[r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.price))])]),t._v(" "),r("ul",{staticClass:"product-info"},[r("li",[r("span",[t._v("Product Type:")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v(t._s(t.type))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"product-add-to-cart"},[r("div",{staticClass:"input-counter"},[r("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[r("i",{staticClass:"fas fa-minus"})]),t._v("\n                "+t._s(t.quantity)+"\n                "),r("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[r("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.getExistPId?r("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(e){return t.addToCart()}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Already Added \n            ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart()}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Add to Cart\n            ")])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-size-wrapper"},[r("h4",[t._v("Size:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("XS")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("S")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("M")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("XL")])])])])}],!1,null,null,null).exports,DetailsInfo:Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-12 col-md-12"},[r("div",{staticClass:"tab products-details-tab"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 col-md-12"},[r("ul",{staticClass:"tabs"},[r("li",[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"dot"}),t._v(" Description\n                    ")])])])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-12"},[r("div",{staticClass:"tab_content"},[r("div",{staticClass:"tabs_item"},[r("div",{staticClass:"products-details-tab-content"},[r("p",[t._v("Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("ul",[r("li",[t._v("Fabric 1: 100% Polyester")]),t._v(" "),r("li",[t._v("Fabric 2: 100% Polyester,Lining: 100% Polyester")]),t._v(" "),r("li",[t._v("Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane")])])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("ol",[r("li",[t._v("Fabric 1: 75% Polyester, 20% Viscose, 5% Elastane")]),t._v(" "),r("li",[t._v("Fabric 2: 100% Polyester,Lining: 100% Polyester")]),t._v(" "),r("li",[t._v("Fabric 3: 100% Polyester")])])])])])])])])])])])}],!1,null,null,null).exports},data:function(){return{id:this.$route.params.id}},computed:{product:function(){var t=this;return this.$store.state.products.all.find((function(e){return e.id===t.id}))}}},m=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Site"},[r("div",{staticClass:"page-title-area"},[r("div",{staticClass:"container"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",[t._v(t._s(t.product.name))])])])]),t._v(" "),r("section",{staticClass:"products-details-area ptb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("ProductImages",{attrs:{image:t.product.image}}),t._v(" "),r("Details",{attrs:{id:t.product.id,name:t.product.name,price:t.product.price,image:t.product.image,type:t.product.itemType}})],1)])])])}),[],!1,null,null,null);e.default=m.exports}}]);