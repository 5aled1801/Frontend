<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div :class="{ 'fixed-navbar': isFixed }" :style="{ 'position': wh }" id="headerApp">
    <B-container>
      <BNavbar toggleable="lg">

        <img :style="{ 'display': isdispaly }" :src="logofir" alt="">
        <img :style="{ 'display': isdispalynone }"
          src="http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png" alt="">
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav>
            <BNavItem>
            </BNavItem>
            <RouterLink to="/" exact>Home</RouterLink>
            <BNavItem>
              <RouterLink to="/about" replace>About</RouterLink>
            </BNavItem>
            <BNavItem>
              <RouterLink to="/offer" replace>Our Offer</RouterLink>
            </BNavItem>
            <BNavItem>
              <RouterLink to="/gallery" replace>Gallery</RouterLink>
            </BNavItem>
            <BNavItem>
              <RouterLink to="/blog" replace>Blog</RouterLink>
            </BNavItem>
            <BNavItem>
              <RouterLink to="/contact" replace>Contact</RouterLink>
            </BNavItem>
          </BNavbarNav>
          <!-- Right aligned nav items -->
          <BNavbarNav class="me-auto mb-2 mb-lg-0"> </BNavbarNav>
        </BCollapse>
      </BNavbar>
    </B-container>
  </div>


  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      logofir: 'http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-color.png'
      , isFixed: false,
      isdispaly: 'none',
      isdispalynone: 'block',
      wh: ' absolute',

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300) {
        this.isFixed = true,
          // this.isdispaly= true,
          this.isdispalynone = 'none',
          this.wh = 'fixed'
        this.bck = 'none'
        this.isdispaly = 'block'
      } else if (window.scrollY < 300) {
        this.isFixed = false;
        this.isdispaly = "none"
        this.isdispalynone = 'block'
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  },

}
</script>
<style  scoped>
.navbar-nav {
  justify-content: end;
  display: flex;
  width: 100%;
  align-items: center;
  right: 0;
  position: absolute
}

.router-link-exact-active {
  color: #8e7754;
  position: relative
}

.router-link-exact-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: -28px;
  width: 100%;
  height: 2px;
  background-color: #8e7754
}

a {
  text-decoration: none;
  color: gray;
  margin-inline: 10px;
  font-weight: 500
}

.navbar-toggler {
  background-color: rgba(242, 242, 242, .684)
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff
}

img {
  width: 239px
}

#headerApp {
  width: 100%;
  z-index: 1111111111
}

@media (max-width:992px) {
  .navbar-nav {
    background-color: rgba(11, 9, 9, .456);
    transform: translateY(10px)
  }

  a {
    color: #fff
  }

  .router-link-exact-active::before {
    top: 0
  }
}

@media (max-width:457px) {
  img {
    width: 150px
  }
}</style>


