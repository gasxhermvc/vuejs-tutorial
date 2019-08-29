<template>
  <fragment>
    <div class="box">
      <div class="title">Container</div>
      <slot name="header" />
      <hr />
      <div class="content">
        <slot name="content" />
      </div>
      <hr />
      <slot name="footer"></slot>
    </div>
  </fragment>
</template>
<script>
export default {};
</script>