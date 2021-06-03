https://www.npmjs.com/package/vue-simple-password-meter  - компонент який показує шкалу безпечності пароля


./UpdatePasswordForm.vue
<template>
  <jet-form-section @submitted="updatePassword">
    <template #title> Update Password </template>

    <template #description>
      Ensure your account is using a long, random password to stay secure.
    </template>

    <template #form>
      <div class="col-span-6 sm:col-span-4">
        <b-form-group
          id="input-group-currentPassword"
          label="Current Password"
          label-for="currentPassword"
          :invalid-feedback="form.errors.current_password"
          :state="currentPasswordState"
        >
          <b-form-input
            id="currentPassword"
            type="password"
            v-model="form.current_password"
            :state="currentPasswordState"
            ref="current_password"
            trim
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="col-span-6 sm:col-span-4">
        <b-form-group
          id="input-group-password"
          label="New Password"
          label-for="password"
          :invalid-feedback="form.errors.password"
          :state="passwordState"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="form.password"
            :state="passwordState"
            ref="password"
            trim
          ></b-form-input>
        </b-form-group>
        <password-meter :password="form.password" @score="onScore" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <b-form-group
          id="input-group-password_confirmation"
          label="Confirm Password"
          label-for="password_confirmation"
          :invalid-feedback="form.errors.password_confirmation"
          :state="passwordConfirmationState"
        >
          <b-form-input
            id="password_confirmation"
            type="password"
            v-model="form.password_confirmation"
            :state="passwordConfirmationState"
            trim
          ></b-form-input>
        </b-form-group>
      </div>
    </template>

    <template #actions>
      <jet-action-message :on="form.recentlySuccessful" variant="success" class="my-3">
        Saved.
      </jet-action-message>

      <jet-button variant="primary" :disabled="form.processing">
        Save
      </jet-button>
    </template>
  </jet-form-section>
</template>

<script>
import JetActionMessage from "@/Jetstream/ActionMessage";
import JetButton from "@/Jetstream/Button";
import JetFormSection from "@/Jetstream/FormSection";
import passwordMeter from "vue-simple-password-meter";
import { passwordRegEx } from "@/Shared/constants";

export default {
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    passwordMeter,
  },

  data() {
    return {
      form: this.$inertia.form({
        current_password: "",
        password: "",
        password_confirmation: "",
      }),
      lastCurrentPassword: null,
      lastPassword: null,
      lastPasswordConfirmation: null,
      score: null,
      dismissSecs: 3,
      dismissCountDown: 0,
    };
  },

  methods: {
    updatePassword() {
      // if (this.score < 2) {
      //   this.form.errors = { password: "Please choose secure password" };
      //   this.form.hasErrors = true;
      //   return false;
      // }

      this.lastCurrentPassword = this.form.current_password;
      this.lastPassword = this.form.password;
      this.lastPasswordConfirmation = this.form.password_confirmation;

      this.form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset("password", "password_confirmation");
            this.$refs.password.focus();
          }

          if (this.form.errors.current_password) {
            this.form.reset("current_password");
            this.$refs.current_password.focus();
          }
        },
      });
    },
    onScore({ score, strength }) {
      // console.log(score); // from 0 to 4
      this.score = score;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
  computed: {
    currentPasswordState() {
      if (this.form.errors.current_password) {
        if (
          this.lastCurrentPassword !== this.form.current_password &&
          passwordRegEx.test(this.form.current_password)
        ) {
          return true;
        }
        return false;
      }
      if (!this.form.current_password) {
        return null;
      }
      if (passwordRegEx.test(this.form.current_password)) {
        return true;
      }
    },
    passwordState() {
      if (this.form.errors.password) {
        if (this.lastPassword !== this.form.password && passwordRegEx.test(this.form.password)) {
          return true;
        }
        return false;
      }
      if (!this.form.password) {
        return null;
      }
      if (passwordRegEx.test(this.form.password)) {
        return true;
      }
    },
    passwordConfirmationState() {
      if (this.form.errors.password_confirmation) {
        if (
          this.lastPasswordConfirmation !== this.form.password_confirmation &&
          this.form.password_confirmation === this.form.password &&
          passwordRegEx.test(this.form.password_confirmation)
        ) {
          return true;
        }
        return false;
      }
      if (!this.form.password_confirmation) {
        return null;
      }
      if (passwordRegEx.test(this.form.password_confirmation) && this.form.password_confirmation === this.form.password) {
        return true;
      }
    },
  },
};
</script>
