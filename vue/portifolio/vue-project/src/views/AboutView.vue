<template>
  <div class="about">
    <b-container>
      <h2>About Me</h2>
      <div class="ab">
        <b-container>
          <p>
            <span>></span>
            Hi there! I'm Khaled, a passionate front-end with a focus on developed and designed.
            I've had the opportunity to work on a variety of projects that have enriched my skills
            in [HTML &CSS &JS &Bootstrap].
          </p>
          <p>
            <span>></span> My goal is to find position as frontend whether it's designing
            user-friendly interfaces, crafting efficient code, or collaborating with teams.
          </p>
        </b-container>
      </div>

      <div class="skils" id="sec">
        <h3>Skills</h3>
        <div class="con-skills">
          <img src="../components/icons/html-5_318-566077.avif" alt="" /><img
            src="../components/icons/css2.png"
            alt=""
          /><img src="../components/icons/boot2.png" alt="" />
          <img src="../components/icons/js.png" alt="" style="width: 150px" />
          <img src="../components/icons/vue.png" alt="" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.about {
  min-height: 100vh;
}

h2 {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  font: 25px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  top: 20%;
}

.ab {
  position: absolute;
  top: 35%;
  transform: translateY(20%);
  color: white;
  line-height: 2;
  font-size: 19px;
  max-width: 936px;
}

.ab span {
  color: gray;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .ab {
    position: absolute;
    top: 11%;
    /* transform: translateY(50%); */
  }

  h2 {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 10%;
  }
}

.skils {
  position: absolute;
  top: 80%;
  /* max-width: 936px; */
  width: 100%;
  min-height: 80vh;
  left: 0;
  margin-top: 20%;
}

h3 {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.con-skills {
  place-content: center;
  display: flex;
  width: 100%;
  margin-top: 70px;
  flex-wrap: wrap;
  gap: 50px;
}
img {
  width: 100px;
  margin-bottom: 20px;
}
</style>
