<template>
  <div class="container">
    <div class="consearch">
      <input type="text" name="search" placeholder="enter place u wanaa search..." v-model="place">
      <button @click="searchBykek">search</button>
    </div>
    <div class="display" v-if="temp">
      <p class="location">{{ weather.name }},{{ sys.country }}</p>
      <h1 class=" temp ">{{ tempmain.temp }} °C</h1>
      <p class="des">{{ des.main }}</p>
      <div class="main">
        <p class="stat"> Temp_max <span>{{ main.temp_max }}°C</span></p>
        <p class="stat"> Temp_min <span>{{ main.temp_min }}°C</span></p>
      </div>
      <div class="loactions">

        <div class="con">
          <img src="https://th.bing.com/th/id/R.34bcbc31a8d747f2fa7f907086642484?rik=SRC0i34ZgcGn%2fw&pid=ImgRaw&r=0"
            alt="">
          <span>{{ main.humidity }}%</span><span>Humidity</span>
        </div>

        <div class="con">
          <img
            src="https://th.bing.com/th/id/R.c2ca9787ee267fad429da22ec1a109c0?rik=M4eYqwDfIU7j7w&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f03%2f69775-cold-wind.png&ehk=%2fNX0CGiy0atVrycc5vMYCZfYsKD3hAf7bvEfdgmNZng%3d&risl=&pid=ImgRaw&r=0"
            alt="" style="width: 55px;">
          <span>{{ wid.speed }}%</span><span>Wind speed</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',

  data() {
    return {
      place: '',
      baseApi: 'https://api.openweathermap.org/data/2.5/',
      basicLinkApi: '0cdf8570170ca012779249f80ec2d800', // Replace with your API key
      weather: {},
      tempmain: {},
      temp: false,
      des: {},
      main: {},
      wid: {},
    };
  },

  methods: {
    searchBykek() {
      if (this.place === '') {
        alert('Please enter a location');
        this.temp = false
      }

      else {
        fetch(`${this.baseApi}weather?q=${this.place}&units=metric&APPID=${this.basicLinkApi}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.weather = data;
            this.tempmain = data.main
            this.des = data.weather[0]
            this.sys = data.sys
            this.main = data.main
            this.wid = data.wind
            this.temp = true
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }

  }
}

</script>
<style>
img {
  width: 35px;
}

.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0;
}

span {
  color: rgb(15, 171, 171);
  font-size: 28px;
}

.consearch {
  display: flex;
  justify-content: center;
}

input {
  width: 80%;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.337);
  border-radius: 10px;
  margin-right: 20px;
  text-align: center;
  font-size: 18px;
}

button {
  border: 1px solid rgba(0, 0, 0, 0.337);
  border-radius: 10px;
  margin-right: 20px;
  background-color: cadetblue;
  color: white;
  cursor: pointer;
}

.des {
  padding: 40px 0;
}

.display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-family: math;
}

.location {
  font-size: 25px;
}

p {
  font-family: math;
  font-size: 18px;
  letter-spacing: 3px;

}

h1 {
  padding: 20px;
  background-color: rgba(83, 92, 109, 0.342);
  font-size: 55px;
  margin-top: 30px;
  width: 60%;
  text-align: center;
  border-radius: 10px;
}

.loactions {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #2c2f35;
  padding: 20px 0;
  border-radius: 10px;
}

.loactions span {
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
}

.con {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.con span {
  padding: 10px 0;
  color: white;
}
</style>