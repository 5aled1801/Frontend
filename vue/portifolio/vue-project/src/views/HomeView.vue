<template>
  <div class="home">
    <b-container class="dd">
      <div class="textforme col-6">
        <h1>Hello</h1>
        <h2>I`m Khaled Hassan</h2>
        <P class="con">
          Front-end <span class="caller"><spece></spece></span
        ></P>
      </div>
      <div class="right-part col-6">
        <img src="../components/icons/photo_2023-08-13_20-35-41.jpg" alt="" />
      </div>
    </b-container>
  </div>
</template>
<style scoped>
.home {
  display: flex;
}

.textforme {
  transform: translateY(70%);
  color: white;
}

.con {
  display: flex;
}
.caller {
  /* display: inline-block; */
  /* transition: 3s; */
  border-right: 1px solid;
  /* overflow: hidden; */
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: Textcalle 6s 1s both infinite;
  margin-left: 5px;
}
@keyframes Textcalle {
  0% {
    width: 0;
  }
  50% {
    width: 150px;
  }
  100% {
    width: 0;
  }
}
p {
  font-size: 30px;
}
.dd {
  display: flex;
}
img {
  width: 300px;
  border-radius: 15px;
  transform: translateY(25%);
}
.right-part {
  display: flex;
  justify-content: center;
}
@media (max-width: 766px) {
  .home {
    overflow: visible;
  }
  .dd {
    flex-direction: column-reverse !important;
    align-content: center;
    align-self: center;
  }
  .right-part {
    align-self: center;
  }
  .textforme {
    min-width: 100%;
    /* margin-top: ; */
    text-align: -webkit-center;
  }
  p {
    transform: translateX(15%);
    margin: 0;
    max-width: 291px;
    margin-left: -88px;
  }
  img {
    transform: translateY(10%);
  }
}
</style>