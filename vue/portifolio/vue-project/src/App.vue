<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <b-container>
      <div class="div">
        <BNavbar toggleable="lg">
          <BNavbarBrand id="logoP" href="#">Portfolio</BNavbarBrand>
          <BNavbarToggle target="nav-collapse" style="" />
          <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav>
              <BNavItem class="links"> <RouterLink to="/" exact>Home</RouterLink> </BNavItem>
              <BNavItem class="links"> <RouterLink to="/about" replace>About</RouterLink></BNavItem>
              <BNavItem class="links">
                <RouterLink to="/project" replace>Projects</RouterLink></BNavItem
              >
              <BNavItem class="links">
                <RouterLink to="/contact" replace>Contact</RouterLink></BNavItem
              >
            </BNavbarNav>
            <!-- Right aligned nav items -->
            <BNavbarNav class="me-auto mb-2 mb-lg-0"> </BNavbarNav>
          </BCollapse>
        </BNavbar>
      </div>
    </b-container>
    <RouterView />
  </header>
</template>
<style >
header {
  position: absolute;
  width: 100%;
}
#logoP {
  font-size: 30px !important;
  font-weight: 500;
  background: -webkit-linear-gradient(#ffffff, #171717);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.links a {
  text-decoration-line: none;
  color: gray;
}
.links a:hover {
  color: var(--main-color);
}
ul {
  position: absolute;
  left: 80%;
  transform: translateX(-50%);
}
@media (max-width: 992px) {
  ul {
    position: relative;
  }
}
</style>