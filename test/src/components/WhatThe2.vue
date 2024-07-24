<template>
    <div class="viewport">
    <a-scene webxr="optionalFeatures: hit-test;" 
    ar-hit-test="target:#model"
    fog="type: linear; color: #FFF" id="scene"
    embedded>
        <a-entity
          id="model"
          gltf-model="url(/sky.glb)"
          scale="0.5, 0.5, 0.5"
          rotation="0 180 0" 
          position="9 0 -4"
          class="clickable"
          animation="property: rotation; to: 0 540 0; loop: true; dur: 15000;"
          animation__mouseenter="property: scale; to: 0.6 0.6 0.6; dur: 300; startEvents: mouseenter"
          animation__mouseleave="property: scale; to: 0.5, 0.5, 0.5; dur: 300; startEvents: mouseleave">
        </a-entity>
        <a-box position="9 -1 -4" rotation="-90 0 0" width="4" height="4" color="#FFF"></a-box>
        <a-plane position="0 -1 0" rotation="-90 0 0" width="100"height=100 color="#A4E28A"></a-plane>
        <a-sky color="#53adbd"></a-sky>
        <a-entity 
            text="value: View in AR?;"
            position="7.5 0.1 -0.9"
            rotation="-45 270 0"
            scale="8 8 8"
            :visible= visibility>
        </a-entity>
        <a-text
            value="Yes"
            position="7 -0.4 -5.2"
            rotation="-45 270 0"
            scale="2 2 2"
            :visible= visibility
            geometry="primitive:plane;"
            class="clickable"
            @click="redirect()">
        </a-text>
        <a-text
            value="No"
            position="7 -0.4 -3.6"
            rotation="-45 270 0"
            scale="2 2 2"
            :visible= visibility
            class="clickable"
            @click="a()"
            geometry="primitive:plane;"
            >
        </a-text>
        <a-box position="7 -0.7 -4" 
            scale="0.5 0.5 0.5"
            color="#C04040"
            class="clickable"
            id="skyModel"
            @click="a()"
            animation__mouseenter="property: scale; to: 0.6 0.6 0.6; startEvents: mouseenter; dur: 200"
            animation__mouseleave="property: scale; to: 0.5 0.5 0.5; startEvents: mouseleave">
        </a-box>
        <a-camera>
          <a-entity cursor="fuse:true; fuseTimeout:500" 
          position="0 0 -1" 
          geometry="primitive: ring; radiusInner: 0.001; radiusOuter: 0.004" 
          material="color: black; shader: flat"
          raycaster="far: 5; interval: 1000; objects: .clickable ">
        </a-entity>
        </a-camera>
    </a-scene>
</div>
</template>

<script setup>
import 'aframe'
import { ref } from 'vue'

const visibility = ref(false)

function a() {
    if(visibility.value == true) {
        visibility.value = false
    } else {
        visibility.value = true
    }
};

function redirect() {
    console.log("what")
}

</script>

<style scoped>
.viewport {
    margin-top: 30vw;
    width: 100%;
    height: 60%;
    align-items: center;
}

a-scene {
    height: 300px;
    width: 600px;
}

</style>