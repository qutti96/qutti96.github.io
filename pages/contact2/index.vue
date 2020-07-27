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
            <label for="contents" class="label">お問いあわせ内容</label>
            <div class="control">
              <textarea
                id="contents"
                v-model="ContactForm.contents"
                name="contents"
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
            <p class="help is-success is-size-6">{{ snackBar.message }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { functions } from '@/plugins/firebase'
export default {
  data() {
    return {
      ContactForm: {
        name: null,
        email: null,
        contents: null,
      },
      Validation: {
        NameResult: '',
        EmailResult: '',
        InquiryResult: '',
      },
      snackBar: {
        message: '',
      },
    }
  },
  methods: {
    checkForm() {
      let nameFlag = false
      let emailFlag = false
      let contentsFlag = false
      if (!this.ContactForm.name) {
        this.Validation.NameResult = 'お名前は入力必須項目です。'
      } else {
        nameFlag = true // eslint-disable-line no-unused-vars
        this.Validation.NameResult = ''
      }

      if (!this.ContactForm.email) {
        this.Validation.EmailResult = 'メールアドレスは入力必須項目です。'
      } else if (!this.validEmail(this.ContactForm.email)) {
        this.Validation.EmailResult =
          'メールアドレスを正しい形式でご入力ください。'
      } else {
        emailFlag = true // eslint-disable-line no-unused-vars
        this.Validation.EmailResult = ''
      }

      if (!this.ContactForm.contents) {
        this.Validation.InquiryResult = 'お問い合わせ内容は入力必須項目です。'
      } else {
        contentsFlag = true // eslint-disable-line no-unused-vars
        this.Validation.InquiryResult = ''
      }

      if (nameFlag && emailFlag && contentsFlag) {
        this.Validation.NameResult = ''
        this.Validation.EmailResult = ''
        this.Validation.InquiryResult = ''
        this.sendMail()
      }
      event.preventDefault()
    },
    validEmail: (inputdata) => {
      const re = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(inputdata)
    },
    formReset() {
      this.ContactForm.name = ''
      this.ContactForm.email = ''
      this.ContactForm.contents = ''
    },
    sendMail() {
      const mailer = functions.httpsCallable('sendMail')
      mailer(this.ContactForm)
        .then(() => {
          this.snackBar.message =
            this.ContactForm.name +
            ' / ' +
            this.ContactForm.email +
            ' / ' +
            this.ContactForm.contents +
            '\n' +
            '以上の内容で送信しました。'
          this.formReset()
        })
        .catch((err) => {
          this.snackBar.message = '送信に失敗しました。'
          console.log(err)
        })
      // .finally(() => {
      // })
    },
    // showSnackBar(color, message) {
    //   this.snackBar.message = message
    //   this.snackBar.color = color
    //   this.snackBar.show = true
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
