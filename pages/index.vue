<template>
  <main>
    <div class="hero-wrap">
      <section class="hero kv-top">
        <div class="hero-body">
          <div class="container">
            <h1 class="title kv-title">
              Qutti<span class="letter-sp--narrow">96</span>
              <br />
              Portfolio Site
            </h1>
          </div>
        </div>
      </section>
    </div>
    <section class="section">
      <div class="container">
        <h2 class="title">
          About qutti<span class="letter-sp--narrow">96</span>
        </h2>
        <div class="content">
          <article class="media">
            <figure class="media-left about__media">
              <p class="image is-128x128">
                <img
                  src="images/top/bio_illust_square_2020.jpg"
                  class="is-rounded"
                  alt=""
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>qutti96</strong>
                </p>
                <p>Markup Engineer, Web Director, Web Designer</p>
                <a
                  href="https://github.com/qutti96"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="profile__anchor"
                >
                  <span class="icon profile__icon">
                    <ion-icon name="logo-github" size="large"></ion-icon>
                  </span>
                  <span>github</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="title">Works</h2>
        <div class="content">
          <p>
            2007年から、官公庁・メーカー等の会社でのコーディング・デザイン業務を経験。<br />
            2013年からはWEB制作会社での運用・コーディング・一部デザイン業務・制作進行を経験しました。
          </p>
          <p>携わったサイトの一部をご紹介します。</p>
          <div class="btn__wrap--center">
            <a href="/works/" class="button btn--def">view More</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="title">Contact</h2>
        <div class="content">
          <p>
            サイトの制作依頼やご相談を承ります。お問いあわせフォームにてお気軽にお問いあわせください。
          </p>
          <div class="btn__wrap--center">
            <a href="/contact/" class="button btn--def">view More</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.profile__anchor {
  display: block;
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}
.profile__icon {
  padding-right: 0.5em;
  width: 3em;
  height: 3em;
}
.btn--def {
  border-radius: 0;
  border: none;
  color: #3b3938;
  background-color: #faf4f0;
  font-family: 'Pinyon Script', cursive;
  font-size: 1.4em;
  line-height: 1;
  padding: 0.2em 2em;
  position: relative;
}
.btn--def::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  width: 25px;
  height: 1px;
  background: #ada095;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: 0.2s;
}
.btn--def::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  width: 12px;
  height: 12px;
  border: 1px solid;
  border-color: transparent transparent #ada095 #ada095;
  transform: rotate(-135deg);
  margin-top: -5px;
  transition: 0.2s;
}
.btn--def:hover::before {
  right: 10px;
  transform: scale(1, 1);
}
.btn--def:hover::after {
  right: 10px;
}
.btn__wrap--center {
  width: 100%;
  padding-top: 1em;
  text-align: center;
}

.hero-wrap {
  position: relative;

  /* background-color: #ada095; */
}
.hero-wrap::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -3%;
  right: 0;
  width: 100%;
  height: 22em;
  background-color: #e0dbd7;
  z-index: -1;
}

.kv-top {
  background: url(/images/top/kv_top.jpg) 0 0 no-repeat;
  height: 260px;
  position: relative;
  background-size: cover;
}

.kv-title {
  position: absolute;
  top: 165px;
  right: 16px;
  display: block;
  font-size: 3em;
  font-family: 'Pinyon Script', cursive;
  background-color: #fff;
  padding: 0.6em 0.7em 0.6em 0.8em;
}
.kv-title::after {
  content: none;
}

@media only screen and (max-width: 768px) {
  .kv-top {
    height: 180px;
  }
  .kv-title {
    top: 85px;
    right: 5%;
    font-size: 2.6em;
    padding: 0.4em 0.6em 0.4em 0.6em;
  }
}

.letter-sp--narrow {
  letter-spacing: -2px;
}

.about__media {
  margin-left: 0;
}
</style>
