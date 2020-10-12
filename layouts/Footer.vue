<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Quick Links</h3>

                        <ul class="quick-links">
                            <li><nuxt-link to="/products">Products</nuxt-link></li>
                            <li><nuxt-link to="/cart">Cart</nuxt-link></li>
                            <li><nuxt-link to="/blog-one">Blog</nuxt-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contact Us</h3>

                        <ul class="footer-contact-info">
                            <li><i class="far fa-envelope"></i> Email Us: <a href="#">klothz@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p>Copyright &copy; 2020 Klothz.AI. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>