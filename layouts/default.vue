<template>
  <div>
    <Gnav />
    <nuxt />
  </div>
</template>
<script>
import Gnav from '~/components/Gnav.vue'

export default {
  components: {
    Gnav,
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.title {
  font-family: 'Pinyon Script', cursive;
  font-weight: normal;
  padding-bottom: 12px;
  position: relative;
  font-size: 2.4em;
  margin-bottom: 2em;
}

.title:not(:last-child) {
  margin-bottom: 2rem;
}

.title::after {
  content: '';
  display: block;
  height: 2px;
  width: 30px;
  background-color: #ada095;
  position: absolute;
  bottom: 0;
  left: -3px;
}

.card-detail__list {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  font-size: 0.875rem;
}
</style>
