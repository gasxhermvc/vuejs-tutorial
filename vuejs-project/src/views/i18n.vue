<template>
  <fragment>
    <div class="title">I18N</div>
    <hr />
    <button
      v-on:click="$i18n.locale = nextLocale"
      class="button"
    >Switch to {{ '>>' }} {{ nextLocale }}</button>
    <!-- default -->
    <p>{{ $t('foo.msg') }}</p>
    <!-- object -->
    <p>{{ $t('foo.msg1', { name: 'John',surname: 'Doe' }) }}</p>
    <!-- array -->
    <p>{{ $t('foo.msg2', [ 'John','Doe']) }}</p>
    <!-- unescape + array -->
    <p v-html="$t('foo.msg3', [ 'John','Doe'])"></p>

    <!-- ในกรณีมีหลายคำ จะเลือก ตำแหน่งคำออกมาก ถ้าใส่ตำแหน่งเกินจะเลือกคำสุดท้าย-->
    <p>0 {{ $tc('foo.apple', 0) }}</p>
    <p>1 {{ $tc('foo.apple', 1) }}</p>
    <p>3 {{ $tc('foo.apple', 3) }}</p>
  </fragment>
</template>
<script>
export default {
  mounted() {
    console.log(this.$i18n);
    const localeRouter = this.$route.query.locale;

    this.$i18n.locale = localeRouter;
  },
  computed: {
    nextLocale() {
      const localeRouter = this.$route.query.locale;

      return this.$i18n.locale === "th" ? "en" : "th";
    }
  }
};
</script>