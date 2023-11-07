<template>
  <div class="app">
    <LandingPage />
    <brand />
    <products />
    <!-- <footer /> -->
  </div>
</template>
<script>
import LandingPage from '../components/LandingPage.vue'
import Brand from '../components/Brand.vue'
import products from '../components/products.vue'
// import footer from '../components/footer.vue'
export default {
  components: {
    Brand,
    LandingPage,
    products
    // footer
  }
}
</script>