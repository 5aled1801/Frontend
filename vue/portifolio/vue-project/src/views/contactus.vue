<template>
  <div class="app">
    <b-container>
      <h1>Contact</h1>
      <div class="icon">
        <i class="fa-brands fa-facebook-f face"><span @click="openFace">Go to contact</span></i>
        <i class="fa-brands fa-linkedin-in link"><span @click="openlink">Go to contact</span></i>
        <i class="fa-solid fa-envelopes-bulk mail"><span @click="openmail">Go to contact</span></i>
        <i class="fa-solid fa-phone phone"> <span>01284456019</span></i>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  methods: {
    openFace: () => {
      window.open(
        'https://www.facebook.com/profile.php?id=100010463460335&mibextid=LQQJ4d',
        '_blank',
        'width=400px,height=600px'
      )
    },
    openlink: () => {
      window.open(
        'https://www.linkedin.com/in/khaled-hassan-2820b4248',
        '_blank',
        'width=400px,height=600px'
      )
    },
    openmail: () => {
      window.open(
        'mailto:zxkmkm432184@gmail.com?subject=Your%20Subject&body=Your%20Message',
        '_blank',
        'width=400px,height=600px'
      )
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.icon {
  width: 80%;
  color: white;
  position: relative;
  top: 189px;
  left: 10%;
}
i {
  display: flex;
  margin-bottom: 50px;
  align-items: center;

  font-size: 25px;
  padding: 10px;
  place-content: center;
}
.face {
}
.link {
}
.mail {
}
.phone {
  letter-spacing: 5px;
}
span {
  margin-left: 25px;
  border-radius: 16px;
  font-size: 20px;
  background: -webkit-linear-gradient(#3d3d3d, #333);
  padding: 12px;
}
</style>
