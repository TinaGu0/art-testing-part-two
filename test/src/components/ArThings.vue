<template>
    <div>
<!--         <a-scene
        embedded
        arjs="sourceType: webcam;"
        renderer="logarithmicDepthBuffer: true;"
        vr-mode-ui="enabled: false"
        id="scene"
        gesture-detector>
            <a-entity
            id="model"
            class="model"
            gltf-model="{{ model }}"
            gesture-handler="factor: 10;"
            scale="0.5, 0.5, 0.5"
            rotation="-90 0 0" 
            animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
            gps-new-entity-place="latitude: your-latitude; longitude: your-longitude"
            >
            </a-entity>
            <a-camera gps-new-camera></a-camera>
        </a-scene> -->
        <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false;'
        renderer='antialias: true; alpha: true'>
            <a-camera gps-new-camera rotation-reader></a-camera>
            <a-box gps-new-entity-place='latitude: 40.5682389; longitude: -74.1167163' color='red' scale='20 20 20'></a-box>
        </a-scene>
    </div>
</template>

<script setup >
import 'aframe'
import '@ar-js-org/ar.js'
import { ref } from 'vue'

const model = ref("")

model.value = "url(/sky.glb)"

//latLonToWorld(lat, lon)
//console.log(lat, lon)

</script>

<style scoped>
a-scene {
    width: 600px;
    height: 300px;
}
</style>