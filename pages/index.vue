<template>
  <div>
    <Facility></Facility>
    <BestSellers></BestSellers>
  </div>
</template>

<script>
import BestSellers from '../components/landing-one/BestSellers';
import Facility from '../components/landing-one/Facility';

export default {
  components: {
    BestSellers, Facility
  }
}
</script>