<template>
  <div class="landing-page">
    <B-container>
      <div class="left-landing col-m-8">
        <h2>Get 50% Offer</h2>
        <p>Shopping Now</p>
      </div>
      <div class="right-landing">
        <img src="https://www.geomix.at/shop/images/0-0-79871.png" alt="" />
      </div>
    </B-container>
  </div>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>
<style scoped>
.landing-page {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #d3d3d33c;
  width: 100%;
  padding: 30px;
}
img {
  width: 250px;
}
.left-landing {
  align-self: center;
}
.left-landing h2 {
  font-size: 35px;
  color: #507070;
}
.left-landing p {
  border-radius: 9px;
  font-size: 18px;
  text-align-last: center;
  background-color: #507070;
  padding: 10px;
  color: white;
  width: 75%;
  cursor: pointer;
}
.left-landing p:hover {
  background-color: #435e5e;
}

@media (max-width: 570px) {
  .landing-page .container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .left-landing p {
    margin: 19px;
  }
}
</style>