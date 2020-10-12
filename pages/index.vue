<template>
  <div>
    <Banner></Banner>
    <BestSellers></BestSellers>
    <Facility></Facility>
    <LatestProducts></LatestProducts>
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner';
import LatestProducts from '../components/landing-one/LatestProducts';
import BestSellers from '../components/landing-one/BestSellers';
import Facility from '../components/landing-one/Facility';

export default {
  components: {
    Banner, LatestProducts, BestSellers, Facility
  }
}
</script>