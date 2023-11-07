<template>
  <div class="headerpage">
    <BNavbar toggleable="lg" type="dark" variant="light">
      <B-container>
        <BNavbarBrand href="#"><b>Shopping</b></BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav>
            <ul id="pageuser">
              <li><router-link to="/" exact>Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact" replace>Contact Us</router-link></li>
              <li>
                <router-link to="/car" replace
                  ><i class="fa-brands fa-opencart" title="Shopping Cart"></i
                ></router-link>
              </li>
              <li>
                <router-link to="/fav" replace
                  ><i class="fa-solid fa-heart" title="Favourit"></i
                ></router-link>
              </li>
            </ul>
            <BDropdown v-model="show" text="User">
              <div id="signorlogin" v-if="!namefound">
                <BDropdownItem v-model="band">
                  <router-link to="/singnup" replace> Sign up </router-link>
                </BDropdownItem>
                <BDropdownItem>
                  <router-link to="/login" replace> Login </router-link>
                </BDropdownItem>
              </div>
              <div class="usershow">
                <BDropdownItem v-model="dband">
                  <i class="fa-solid fa-user"></i>
                  {{ username }}
                </BDropdownItem>
                <BDropdownItem id="user"></BDropdownItem>
              </div>
            </BDropdown>
          </BNavbarNav>
          <!-- Right aligned nav items -->
          <BNavbarNav class="me-auto mb-2 mb-lg-0"> </BNavbarNav>
        </BCollapse>
      </B-container>
    </BNavbar>
  </div>
</template>
<style >
.headerpage {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 1000000;
}
.container {
  display: flex;
  justify-content: space-between;
}
#nav-collapse {
  position: absolute;
  /* right: 30%; */
  left: 50%;
  transform: translateX(-50%);
  top: 21px;
  z-index: 1111111;
}

ul {
  list-style: none;
  display: flex;
  width: 437px;
  justify-content: space-around;
  position: absolute;
}
a {
  text-decoration: none;
  font-size: 19px;
  color: gray;
}
.router-link-active {
  color: #507070;
}
.btn-group {
  position: absolute;
  right: -70px;
  top: -10px;
}
.navbar-nav {
  position: absolute;
  left: -38px;
}
@media (max-width: 992px) {
  #nav-collapse {
    position: absolute;
    margin-top: 41px;
    background-color: #ffffff8c;
    width: 100%;
    top: 15px;
    height: 253px;
  }
  ul {
    display: contents;
    position: relative;
    align-items: center;
  }
  .btn-group {
    display: block;
    left: 0;
    top: 100%;
  }
  .navbar-nav {
    position: relative;
    width: 283px;
  }
  .dropdown-menu {
    transform: translateX(57%);
  }
  li {
    margin-bottom: 10px;
  }
  .btn-md {
    transform: translateX(139%);
  }
}
</style>
<script>
export default {
  name: 'App',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    changename() {
      const namefound = localStorage.getItem('name')

      if (namefound) {
        this.username = namefound
        console.log(namefound)
      }
    }
  },
  created() {
    this.changename()
  }
}
</script>