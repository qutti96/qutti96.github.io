<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Contact</h1>
      <div class="content">
        <p>サイトの制作依頼やご相談など、お気軽にお問いあわせください。</p>
        <form
          id="contactForm"
          action=""
          method="post"
          novalidate="true"
          @submit.prevent
        >
          <div class="field">
            <label for="name" class="label">お名前</label>
            <div class="control has-icons-left has-icons-right">
              <input
                id="name"
                v-model="ContactForm.name"
                name="name"
                class="input"
                type="text"
                placeholder="お名前を入力してください"
                value=""
              />
              <span class="icon is-small is-left">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger">{{ Validation.NameResult }}</p>
          </div>
          <div class="field">
            <label for="email" class="label">Emailアドレス</label>
            <div class="control has-icons-left has-icons-right">
              <input
                id="email"
                v-model="ContactForm.email"
                name="email"
                class="input"
                type="email"
                placeholder="Emailアドレスをご入力ください"
                value=""
              />
              <span class="icon is-small is-left">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger">
              {{ Validation.EmailResult }}
            </p>
          </div>
          <div class="field">
            <label for="inquiry" class="label">お問いあわせ内容</label>
            <div class="control">
              <textarea
                id="inquiry"
                v-model="ContactForm.inquiry"
                name="inquiry"
                class="textarea"
                placeholder="お問いあわせ内容をご記入ください"
              >
              </textarea>
            </div>
            <p class="help is-danger">{{ Validation.InquiryResult }}</p>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <input
                type="submit"
                value="送信"
                class="button is-link"
                @click="checkForm"
              />
            </div>
            <!-- <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// import { functions } from '@/plugins/firebase'

export default {
  data() {
    return {
      ContactForm: {
        name: null,
        email: null,
        inquiry: null,
      },
      Validation: {
        NameResult: '',
        EmailResult: '',
        InquiryResult: '',
      },
    }
  },
  methods: {
    checkForm: (e) => {
      let nameFlag = false
      let emailFlag = false
      let inquiryFlag = false
      if (!this.ContactForm.name) {
        this.Validation.NameResult = 'お名前は入力必須項目です。'
      } else {
        nameFlag = true // eslint-disable-line no-unused-vars
      }

      if (!this.ContactForm.email) {
        this.Validation.EmailResult = 'メールアドレスは入力必須項目です。'
      } else if (!this.validEmail(this.ContactForm.email)) {
        this.Validation.EmailResult =
          'メールアドレスを正しい形式でご入力ください。'
      } else {
        emailFlag = true // eslint-disable-line no-unused-vars
      }

      if (!this.ContactForm.inquiry) {
        this.Validation.InquiryResult = 'お問い合わせ内容は入力必須項目です。'
      } else {
        inquiryFlag = true // eslint-disable-line no-unused-vars
      }

      if (nameFlag && emailFlag && inquiryFlag) {
        this.Validation.NameResult = ''
        this.Validation.EmailResult = ''
        this.Validation.InquiryResult = ''
        alert(this.ContactForm.email + 'で送信しました')
      }
      event.preventDefault()
    },
    validEmail: (inputdata) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(inputdata)
    },

    // sendMail() {
    //   if (this.$refs.form.validate()) {
    //     this.contactForm.loading = true
    //     const mailer = functions.httpsCallable('sendMail')
    //     mailer(this.contactForm)
    //       .then(() => {
    //         this.formReset()
    //         this.showSnackBar(
    //           'success',
    //           'お問い合わせありがとうございます。送信完了しました'
    //         )
    //       })
    //       .catch((err) => {
    //         this.showSnackBar(
    //           'error',
    //           '送信に失敗しました。時間をおいて再度お試しください'
    //         )
    //         console.log(err)
    //       })
    //       .finally(() => {
    //         this.contactForm.loading = false
    //       })
    //   }
    // },
    // showSnackBar(color, message) {
    //   this.snackBar.message = message
    //   this.snackBar.color = color
    //   this.snackBar.show = true
    // },
    // formReset() {
    //   this.$refs.form.reset()
    // },
  },
}
</script>

<style scoped>
/* .section,
.v-card {
  background-color: #faf4f0;
}

.v-sheet.v-card {
  box-shadow: none;
}

.v-input input {
  background-color: transparent;
}

.v-btn {
  color: #fff;
  background-color: #84abad;
  border-radius: 0;
} */
.theme--light.v-application {
  background-color: transparent;
}
.snack__main .success {
  background-color: #ad9d84 !important;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  color: #fff;
  background-color: #84abad;
  border-radius: 0;
}

.v-messages__message {
  color: #d24d4d;
}

.title {
  font-family: 'Pinyon Script', cursive;
}
</style>
