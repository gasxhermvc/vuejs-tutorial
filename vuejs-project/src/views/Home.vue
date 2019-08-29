<template>
    <fragment>
        <h1 class="title">Home</h1>
        <p class="red">Red</p>
        <p class="blue">Blue</p>
    </fragment>
</template>

<script lang="ts">
import { multiply } from '@/calculator.ts';
console.log(multiply(10,20));
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
@import 'main.scss';
$colorName: red;

.red {
    color: $colorName;
}

.blue {
    color: $anotherColor;
}
</style>