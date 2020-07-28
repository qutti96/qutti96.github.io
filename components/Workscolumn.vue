<template>
  <div class="columns">
    <div v-for="item in list" :key="item" class="column">
      <div class="card">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card-image list-arrow"
        >
          <figure class="image is-4by3">
            <img :src="item.img" alt="" />
          </figure>
        </a>
        <div class="card-content label-wrap">
          <div class="content">
            <h2 class="subtitle is-5">
              {{ item.title }}
            </h2>
            <dl>
              <dt class="card-detail__title has-text-weight-semibold">
                [メンバー構成]
              </dt>
              <dd class="card-detail__txt">
                {{ item.member }}
              </dd>
              <dt class="card-detail__title has-text-weight-semibold">
                [業務内容]
              </dt>
              <dd class="card-detail__txt" v-html="item.detail_txt"></dd>
              <dt class="card-detail__title has-text-weight-semibold">
                [成果・学んだこと]
              </dt>
              <dd class="card-detail__txt" v-html="item.achievement"></dd>
              <dt class="card-detail__title has-text-weight-semibold">
                [フレームワーク・ツール]
              </dt>
              <dd class="card-detail__txt">
                {{ item.framework }}
              </dd>
            </dl>
            <div class="label-group">
              <template v-for="tag in item.label.split(',')">
                <span :key="tag" class="label-type">{{ tag }}</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import list from '~/assets/data/works-data.json'

export default {
  data() {
    return {
      list,
    }
  },
  // created() {
  //   axios
  //     .get('@/assets/data/works-data.json')
  //     .then(
  //       function (response) {
  //         this.list = response.data
  //       }.bind(this)
  //     )
  //     .catch(function (e) {
  //       console.error(e)
  //     })
  // },
}
</script>

<style scoped>
.columns {
  flex-wrap: wrap;
}
.column {
  flex-basis: 33%;
  margin-bottom: 1rem;
}
.card-image {
  /* border-bottom: 1px solid #bab6b3; */
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
}
.card-detail__title {
  margin-bottom: 0.3rem;
}
.card-detail__txt {
  margin-left: 0;
  margin-bottom: 1rem;
}
.card-detail__list {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  font-size: 0.875rem;
}
.label-group {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-bottom: 0;
}
.label-type {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 5px;
  margin-right: 3px;
  display: inline-flex;
  color: #fff;
  margin-bottom: 3px;
  background-color: #84abad;
}
.list-arrow {
  position: relative;
}
.list-arrow :hover {
  opacity: 0.8;
}
.list-arrow ::after {
  position: absolute;
  top: 50%;
  right: 4%;
  content: '';
  display: block;
  width: 30px;
  height: 30px;
  border-top: 2px solid #ada095;
  border-right: 2px solid #ada095;
  transform: rotate(45deg);
}
.blur {
  display: block;
  overflow: visible;
  position: relative;
}
.blur ::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  filter: blur(7px);
  background: inherit;
  z-index: 6;
  display: block;
  width: 100%;
  height: 100%;
}
.overlay {
  position: relative;
}
.overlay ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: block;
  width: 100%;
  height: 100%;
}
.card-txt--s {
  font-size: 0.875rem;
}
.is-wordwrap {
  word-wrap: break-word;
}
</style>
