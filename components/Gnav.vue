<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo__wrap" href="#">
        <img
          class="logo__img"
          src="~/assets/images/common/qutti96-logo.svg"
          alt="qutti96 portfolio"
        />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>
      <div class="navbar-end">
        <!-- <a class="navbar-item" href="/">
          Home
        </a> -->
        <a class="navbar-item gnav__anchor is-size-3" href="/works">
          Works
        </a>
        <a class="navbar-item gnav__anchor is-size-3" href="/contact">
          Contact
        </a>
        <!-- <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu(e) {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
.logo__wrap {
  display: block;
  background-color: transparent;
  padding: 0.75rem 1rem;
}
.logo__img {
  width: auto;
  height: 60px;
}
.gnav__anchor {
  background-color: transparent;
  font-family: 'Pinyon Script', cursive;
  padding: 0.5rem 1rem;
}

a.navbar-item:hover,
a.gnav__anchor:hover {
  color: #ada095;
  background-color: transparent;
}
</style>
