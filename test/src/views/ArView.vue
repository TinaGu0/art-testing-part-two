<template>
    <div>
        <RouterLink to="/home">Exit AR</RouterLink>
    </div>
    <div>
        <ArThings class="ar"/>
    </div>
</template>

<script setup>
import ArThings from '../components/ArThings.vue'

</script>

<style scoped>
.ar {
    z-index: 1;
}

</style>