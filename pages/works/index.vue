<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Works</h1>
      <div class="content">
        <p>制作に携わったサイトを紹介します。</p>
      </div>
      <Workscolumn />
    </div>
  </section>
</template>

<script>
import Workscolumn from '~/components/Workscolumn.vue'

export default {
  components: {
    Workscolumn,
  },
}
</script>
