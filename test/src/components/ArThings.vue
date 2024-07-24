<template>
    <div>
        <a-scene
        embedded
        arjs="sourceType: webcam;"
        renderer="logarithmicDepthBuffer: true;"
        vr-mode-ui="enabled: false"
        id="scene"
        gesture-detector>
            <a-marker preset='hiro'>
                <a-entity
                id="model"
                class="model"
                gltf-model="{{ model }}"
                gesture-handler="factor: 10;"
                scale="0.5, 0.5, 0.5"
                rotation="-90 0 0" 
                animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
                ></a-entity>
            </a-marker>
            <a-camera></a-camera>
        </a-scene>
    </div>
</template>

<script setup >
import 'aframe'
import '@ar-js-org/ar.js'
import { ref } from 'vue'

const model = ref("")

model.value = "url(/sky.glb)"

</script>

<style scoped>
a-scene {
    width: 600px;
    height: 300px;
}
</style>