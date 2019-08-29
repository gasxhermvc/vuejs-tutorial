<template>
    <fragment>
        <div class="box">
            <div class="title">
                Three : User {{ user }}
            </div>
        </div>
    </fragment>
</template>
<script>
export default {
    props: ['user']
}
</script>