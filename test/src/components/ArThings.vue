<template>
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
        renderer="antialias: true; alpha: true"
      >
        <a-entity
          material="color: red"
          geometry="primitive: box"
          gps-new-entity-place="latitude: 40.5682389; longitude: -74.1167163"
          scale="10 10 10"
        ></a-entity>
        <a-entity
          id="model"
          class="model"
          :gltf-model="model"
          gesture-handler="factor: 10;"
          scale="0.5 0.5 0.5"
          rotation="-90 0 0"
          animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
          gps-new-entity-place="latitude: 40.5682389; longitude: -74.1167163"
        ></a-entity>
        <a-camera gps-new-camera="gpsMinDistance: 5" rotation-reader></a-camera>
      </a-scene>
    </div>
  </template>

<script setup >
import 'aframe'
import '@ar-js-org/ar.js'
import { ref } from 'vue'

const model = ref("")

model.value = "url(/sky.glb)"

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