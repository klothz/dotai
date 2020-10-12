<template>
    <div class="col-lg-4 col-md-12">
        <div class="woocommerce-sidebar-area">
            <div class="collapse-widget filter-list-widget">
                <h3 v-b-toggle.collapse-1 class="collapse-widget-title">
                    Current Selection
                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-1" class="selected-filters-wrap-list">
                    <ul>
                        <li><a href="#">T-Shirt</a></li>
                        <li><a href="#">Jackets</a></li>
                        <li><a href="#">Bottoms</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>

                    <div class="delete-selected-filters">
                        <a href="#"><i class="far fa-trash-alt"></i> <span>Clear All</span></a>
                    </div>
                </b-collapse>
            </div>

            <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    Collections

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row">
                        <li><a href="#">Triangle</a></li>
                        <li><a href="#">Advesieral Attack</a></li>
                        <li><a href="#">Elon-Musk</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget size-list-widget">
                <h3 v-b-toggle.collapse-4 class="collapse-widget-title">
                    Size

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-4">
                    <ul class="size-list-row">
                        <li><a href="#">XS</a></li>
                        <li><a href="#">S</a></li>
                        <li><a href="#">M</a></li>
                        <li><a href="#">L</a></li>
                        <li><a href="#">XL</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget price-list-widget">
                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                    Price

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-5">
                    <ul class="price-list-row">
                        <li><a href="#">$10 - $100</a></li>
                        <li><a href="#">$100 - $200</a></li>
                        <li><a href="#">$200 - $300</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget aside-products-widget">
                <h3 class="aside-widget-title">
                    Popular Products
                </h3>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img2.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img3.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img4.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>