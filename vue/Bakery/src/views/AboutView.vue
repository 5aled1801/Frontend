<template>
  <div class="about">
    <div class="landing-about">
      <img :src="landingimg" loading="lazy" alt="">
      <div class="tex">
        <h1>About</h1>
        <p>Learn more about us.</p>
      </div>
    </div>
    <div class="ourstory">
      <b-container>
        <div class="left"><img loading="lazy"
            src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/roman-kraft-56589-800x760.jpg"
            alt="">
        </div>
        <div class="right">
          <h6>Our Story</h6>
          <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on
            projects big and small from small</p>
          <p>esidential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
          <hr>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </b-container>
    </div>
    <div class="ourbakery">
      <b-container>
        <div class="hed">
          <i class="fa-solid fa-layer-group"></i>
          <h2>Why our Bakery?</h2>
          <p>Learn why it's worth to try our bakings.</p>
        </div>
        <div class="cont-text-bak">
          <div class="items">
            <h6>Facilities</h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
          <div class="items">
            <h6>Best Equipment
            </h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
          <div class="items">
            <h6>Incredible Location

            </h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
          <div class="items">
            <h6>Premium Support
            </h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
          <div class="items">
            <h6>Incredible Team
            </h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
          <div class="items">
            <h6>Incredible Location

            </h6>
            <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque.
              Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.</p>
          </div>
        </div>
      </b-container>
    </div>
    <section class="three">
      <b-container>
        <div class="logo-market">
          <i class="fa-solid fa-thumbs-up"></i>
          <i class="fa-solid fa-location-pin"></i><i class="fa-solid fa-lightbulb"></i>
          <i class="fa-regular fa-comment"></i>
        </div>
        <div class="nums">
          <div class="num" v-for="(goal, index) in goals" :key="index">
            {{ counterValues[index] }}
          </div>
        </div>
        <div class="tex-lo">
          <p>Page Likes</p>
          <p>Locations</p>
          <p>Great Ideas</p>
          <p>Comments</p>
        </div>
      </b-container>
    </section>
  </div>
  <div class="last">
    <img loading="lazy" src="http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png"
      alt="">
  </div>
</template>
<script>
export default { name: "AboutApp", data: () => ({ landingimg: "https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg", goals: [100, 100, 150, 50], counterValues: [0, 0, 0, 0], started: !1 }), mounted() { window.addEventListener("scroll", this.handleScroll) }, methods: { handleScroll() { let e = document.querySelector(".nums"); !this.started && window.scrollY >= e.offsetTop - 1e3 && (this.started = !0, this.startCounters()) }, startCounters() { this.goals.forEach((e, t) => { let s = setInterval(() => { this.counterValues[t] < e ? this.counterValues[t]++ : clearInterval(s) }, 1e3 / e) }) } }, beforeUnmount() { window.removeEventListener("scroll", this.handleScroll) } };

</script>
<style>
.ourstory .container {
  display: flex;
  gap: 35px;
  justify-content: space-evenly;
  margin-top: 70px
}

.left {
  width: 50%
}

.left img {
  width: 100%;
  position: relative;
  top: 71px;
  height: 75%
}

.right {
  max-width: 35%;
  align-self: center
}

.right h6 {
  font-size: 25px;
  font-weight: 500;
  font-family: serif;
  margin-bottom: 35px
}

.cont-text-bak h6,
.hed h2 {
  font-family: ui-sans-serif
}

p {
  font-size: 14px;
  color: gray;
  font-family: sans-serif;
  line-height: 1.7;
  padding: 0;
  text-align: justify
}

hr {
  width: 20%
}

.hed {
  -moz-text-align-last: center;
  text-align-last: center;
  padding: 30px
}

.ourbakery {
  background-color: #d3d3d382
}

.hed i {
  font-size: 41px;
  margin-bottom: 11px;
  color: #8f7854
}

.tex-lo p,
.three {
  color: #fff
}

.hed h2 {
  font-size: 35px
}

.cont-text-bak {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center
}

.logo-market,
.nums {
  justify-content: space-around;
  display: flex
}

.items {
  max-width: 25%;
  min-width: 170px
}

.three {
  background-color: #8f7854;
  padding: 100px 0
}

.logo-market {
  font-size: 25px;
  margin-bottom: 15px
}

.nums {
  font-size: 28px
}

.tex-lo {
  display: flex;
  justify-content: space-around;
  margin-top: 10px
}

@media (max-width:767px) {
  .ourstory .container {
    flex-wrap: wrap;
    margin-top: 20px
  }

  .right {
    max-width: 80%
  }

  .left {
    width: 90%
  }
}
</style>
