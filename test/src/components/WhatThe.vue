<template>
  <div class="scene">
    <a-scene
    vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true"
      renderer="antialias: true; alpha: false"
      webxr="optionalFeatures: hit-test;"
      embedded>
    <a-box 
      sposition="1 0 0"
      scale="1 1 1"
      color="#FFF">
    </a-box>
    <a-camera></a-camera>
    </a-scene>
  </div>
</template>

<script setup>
import 'aframe'
import '@ar-js-org/ar.js'
import '@ar-js-org/artoolkit5-js'
import '@ar-js-org/ar.js-threejs'
import 'three'

</script>

<style scoped>
.scene {
  margin-top: 10%;
  width: 30%;
}
</style>