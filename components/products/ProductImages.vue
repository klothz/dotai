<template>
    <client-only>
        <div class="col-lg-6 col-md-6">
            <div class="products-page-gallery" style="animation:border-flicker-blue 3s linear infinite;">
                <div class="product-page-gallery-main">
                    <vueper-slides
                        :bullets = "false"
                    >
                        <vueper-slide
                            v-for="(img, i) in images"
                            :key="i"
                            :image="img.image" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    props: ['image' ],
    data(){
        return{
            images: [
                {
                    id: 1,
                    image: this.image
                },
            ]
        }
    },
}
</script>