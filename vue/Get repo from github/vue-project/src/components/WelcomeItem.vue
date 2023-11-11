<template>
  <div class="item">
    <div class="cont">
      <input type="text" placeholder="Enter User" v-model="username">
      <button @click="getrepo">Get Repos</button>
    </div>
    <div class="postname" v-for="re in repo" :key="re">

      <h4>{{ re.name }}</h4>
      <a :href="re.html_url" target="_blank">source</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppItem',
  data() {
    return {
      username: '',
      repo: null
      ,
    }
  },
  methods: {
    getrepo: function () {

      fetch(`https://api.github.com/users/${this.username}/repos`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        }).then(data => {
          // Process the data (list of repositories)
          this.repo = data
          console.log(this.repo);
        })
        .catch(error => {
          console.error("Error:", error);
        });

    }
  }
}
</script>