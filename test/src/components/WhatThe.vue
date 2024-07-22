<template>
    <a-scene>
        <a-entity
          id="model"
          gltf-model="url(/sky.glb)"
          scale="0.5, 0.5, 0.5"
          rotation="0 -90 0" 
          position="0 0 -4"
          animation__mouseenter="property: scale; to: 2.3 2.3 2.3; dur: 300; startEvents: mouseenter"
        ></a-entity>
        <a-cylinder position="0 0 0" rotation="0 0 0" color="#FFF"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#43C877"></a-plane>
        <a-sky color="#53adbd"></a-sky>
    </a-scene>
</template>

<script setup>
import 'aframe'

//animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
</script>

<style lang="scss" scoped>

</style>