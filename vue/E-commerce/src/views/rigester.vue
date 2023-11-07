<template>
  <B-container>
    <form class="form" novalidate>
      <BAlert :model-value="true" v-model="alertVisible" variant="success"
        >You Rigested Successfully
      </BAlert>
      <BAlert :model-value="true" v-model="DalertVisible" variant="danger"
        >Plz Enter All Information
      </BAlert>
      <BAlert :model-value="true" v-model="PassalertVisible" variant="danger"
        >Password Not The Same
      </BAlert>
      <p class="title">Register</p>
      <p class="message">Signup now and get full access to our app.</p>
      <div class="flex">
        <label>
          <input placeholder="" type="text" id="firstname" v-model="firstname" class="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            id="lastname"
            type="text"
            v-model="lastname"
            class="input"
          />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" id="email" type="email" v-model="email" class="input" />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" id="pass" type="password" v-model="pass" class="input" />
        <span>Password</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          id="conpass"
          type="password"
          v-model="conpass"
          class="input"
        />
        <span>Confirm password</span>
      </label>
      <button class="submit" @click.prevent="rigesterData()" id="btn-submit">Submit</button>
      <p class="signin">
        Already have an acount ? <router-link to="/login" replace> Signin </router-link>
      </p>
    </form></B-container
  >
</template>

<script >
export default {
  name: 'registerApp',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      pass: null,
      conpass: null,
      alertVisible: false,
      DalertVisible: false,
      PassalertVisible: false
    }
  },
  methods: {
    rigesterData() {
      if (
        this.firstname === '' ||
        this.lastname === '' ||
        this.email === '' ||
        this.pass === '' ||
        this.conpass === ''
      ) {
        // alert('plz file all order')
        this.DalertVisible = true
        this.alertVisible = false
      } else {
        localStorage.setItem('name', this.firstname)
        localStorage.setItem('fullname', this.firstname + this.lastname)
        localStorage.setItem('email', this.email)
        localStorage.setItem('pass', this.pass)

        if (this.pass === this.conpass) {
          this.alertVisible = true
          this.DalertVisible = false
          this.PassalertVisible = false
          window.DelayNode
          window.location = 'login'
        } else {
          this.PassalertVisible = true
          this.alertVisible = false
          this.DalertVisible = false
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
.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
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