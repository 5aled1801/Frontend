<template>
  <B-container>
    <form class="form" novalidate>
      <BAlert :model-value="true" v-model="loginalertVisible" variant="success"
        >Login Successfully
      </BAlert>
      <BAlert :model-value="true" v-model="PassalertVisible" variant="danger"
        >plz check your login details
      </BAlert>
      <BAlert :model-value="true" v-model="enteralertVisible" variant="danger"
        >plz add ur login information
      </BAlert>
      <p class="title">Login</p>
      <p class="message">Sign in now and get full access to our app.</p>
      <div class="flex">
        <label>
          <input
            required=""
            placeholder=""
            id="username"
            v-model="username"
            type="text"
            class="input"
          />
          <span>FullName</span>
        </label>
      </div>

      <label>
        <input
          required=""
          placeholder=""
          id="emaillogin"
          type="email"
          v-model="loginemail"
          class="input"
        />
        <span>Email</span>
      </label>

      <label>
        <input
          required=""
          placeholder=""
          id="password"
          type="password"
          v-model="loginpass"
          class="input"
        />
        <span>Password</span>
      </label>

      <button class="submit" @click.prevent="onSignin()" id="btn-login">Submit</button>
      <p class="login">
        Don't have an acount ? <router-link to="/singnup" replace> Sign up </router-link>
      </p>
    </form>
  </B-container>
</template>
<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      username: '',
      loginemail: '',
      loginpass: null,
      loginalertVisible: false,
      PassalertVisible: false,
      enteralertVisible: false
    }
  },
  methods: {
    onSignin() {
      // e.preventDefault()
      if (this.username === '' || this.loginemail === '' || this.loginpass === '') {
        this.enteralertVisible = true
        this.loginalertVisible = false
        this.passalertVisible = false
      } else {
        if (
          this.username === localStorage.getItem('name') &&
          this.loginemail === localStorage.getItem('email') &&
          this.loginpass === localStorage.getItem('pass')
        ) {
          this.loginalertVisible = true
          this.passalertVisible = false
          this.enteralertVisible = false

          window.location = '/home'
        } else {
          this.PassalertVisible = true
          this.loginalertVisible = false
          this.enteralertVisible = false
        }
      }
    }
  }
}
</script>
<style scoped>
.container {
  place-content: center;
  top: 114px;
  position: relative;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,
.title::after {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message,
.login {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.login {
  text-align: center;
}

.login a {
  color: royalblue;
}

.login a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
  width: 100%;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>