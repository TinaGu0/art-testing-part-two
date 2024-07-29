<template>
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true"
        renderer="antialias: true; alpha: false"
        webxr="optionalFeatures: hit-test;"
        embedded
      >
        <a-entity
          material="color: red"
          geometry="primitive: box"
          scale="10 10 10"
        ></a-entity>
        <a-entity
          id="model"
          class="model"
          :gltf-model="model"
          gesture-handler="factor: 10;"
          scale="0.5 0.5 0.5"
          rotation="-90 0 0"
        ></a-entity>
        <a-camera gps-new-camera="gpsMinDistance: 5" rotation-reader></a-camera>
      </a-scene>
    </div>
  </template>

<script setup >
import 'aframe'
//import '@ar-js-org/ar.js'
import { ref } from 'vue'


const model = ref("")

model.value = "url(/sky.glb)"

//gps-new-entity-place="latitude: 40.5682389; longitude: -74.1167163"
//latitude: 40.5682389; longitude: -74.1167163

//latLonToWorld(lat, lon)
//console.log(lat, lon)

</script>

<style scoped>
a-scene {
    width: 600px;
    height: 300px;
}
</style>