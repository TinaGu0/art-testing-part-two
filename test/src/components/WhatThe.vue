<template>
  <a-scene
  embedded
  vr-mode-ui="enabled: false"
    arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true"
    renderer="antialias: true; alpha: false"
    webxr="optionalFeatures: hit-test;">
    <a-box 
    scale="1 1 1"
    color="#FFF"></a-box>
  </a-scene>
</template>

<script setup>
import 'aframe'
import '@ar-js-org/ar.js'

</script>

<style scoped>

</style>