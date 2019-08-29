<template>
  <fragment>
    <div class="title">Form</div>
    <hr />
    <pre>{{ errors }}</pre>
    <div class="columns">
      <div class="column is-half">
        <div class="field">
          <input
            v-validate="'required|min:3'"
            v-model="firstName"
            name="firstName"
            type="text"
            :class="inputValidate(errors.has('firstName'))"
            style="width: 30em;"
            placeholder="Name"
          />
          <p v-if="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</p>
        </div>
        <div class="field">
          <input
            v-validate="'required|min:3'"
            v-model="lastName"
            name="lastName"
            type="text"
            :class="inputValidate(errors.has('lastName'))"
            style="width: 30em;"
            placeholder="Surname"
          />
          <p v-if="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</p>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
import "animate.css/animate.min.css";
import "@/vee-validate";
export default {
  methods: {
    inputValidate(InValid) {
      return InValid ? "input is-danger animated bounce" : "input is-success";
    }
  },
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  }
};
</script>