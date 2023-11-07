<template>
  <div class="brand">
    <b-container>
      <div class="text-name w-100 h-100">
        <p>Our Brands</p>
      </div>
      <div class="photo-brand">
        <img
          src="https://th.bing.com/th/id/R.d59c9acdd0800375396b2d87f186f7e1?rik=4BzsuiKDiPpoxQ&pid=ImgRaw&r=0"
          alt=""
        /><img
          src="https://th.bing.com/th/id/OIP.So1tOzwktKUdnDpkuR3sNwHaHo?pid=ImgDet&rs=1"
          alt=""
        /><img
          src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-2515199407298sbym.png"
          alt=""
        /><img
          src="https://logos-download.com/wp-content/uploads/2019/01/Penfield_Outdoor_Apparel_Logo.png"
          alt=""
        />
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'brandPage'
}
</script>
<style scoped>
.brand {
  position: absolute;
  top: 53%;
  width: 100%;
  height: 100%;
  left: 0;
  place-content: center;
  width: 100%;
  left: 0;
}
.container {
  width: 100%;
  /* left: 0; */
  /* position: absolute; */
  height: 100vh;
}
p {
  font-weight: bold;
  color: #9797975c;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
}
img {
  width: 177px;
  filter: grayscale(100%);
  opacity: 0.1;
  transition: 1s;
}
img:hover {
  filter: grayscale(0);
  opacity: 0.8;
}

.photo-brand {
  display: flex;
  overflow-x: scroll;
  position: absolute;
  top: 20%;
  max-width: 91vw;
  gap: 43px;
  width: 100%;
  justify-content: center;
}
::-webkit-scrollbar {
  display: none;
}
@media (max-width: 569px) {
  .brand {
    top: 72%;
  }
}
</style>