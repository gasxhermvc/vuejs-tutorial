<template>
  <fragment>
    <div class="box">
      <div class="title">Two</div>
      {{ counter }}
      <three v-for="(user,idx) in users" :key="idx" :user="user" />
    </div>
  </fragment>
</template>

<script>
import Three from "@/components/Three";
export default {
  components: {
    three: Three
  },
  computed: {
    users() {
      return ["A", "B", "C"];
    }
  },
  props: ["counter"]
};
</script>