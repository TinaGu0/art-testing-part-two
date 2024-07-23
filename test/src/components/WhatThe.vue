<template>
    <a-scene webxr="optionalFeatures: hit-test;" 
    ar-hit-test="target:#model"
    fog="type: linear; color: #FFF">
        <a-entity
          id="model"
          gltf-model="url(/sky.glb)"
          scale="0.5, 0.5, 0.5"
          rotation="0 180 0" 
          position="9 0 -4"
          class="clickable"
          animation="property: rotation; to: 0 540 0; loop: true; dur: 15000;"
          animation__mouseenter="property: scale; to: 0.7 0.7 0.7; dur: 300; startEvents: mouseenter"
          animation__mouseleave="property: scale; to: 0.5, 0.5, 0.5; dur: 300; startEvents: mouseleave">
        </a-entity>
        <a-box position="9 -1 -4" rotation="-90 0 0" width="4" height="4" color="#FFF"></a-box>
        <a-plane position="0 -1 0" rotation="-90 0 0" width="100"height=100 color="#A4E28A"></a-plane>
        <a-sky color="#53adbd"></a-sky>
        <a-camera>
          <a-entity cursor="fuse:true; fuseTimeout:500" 
          position="0 0 -1" 
          geometry="primitive: ring; radiusInner: 0.001; radiusOuter: 0.004" 
          material="color: black; shader: flat"
          raycaster="far: 10; interval: 1000; objects: .clickable ">
        </a-entity>
        </a-camera>
    </a-scene>
</template>

<script setup>
import 'aframe'

console.log(THREE)

/* AFRAME.registerPrimitive('a-ocean', {
  defaultComponents: {
    ocean: {}, 
    rotation: {x: -90, y:0, z: 0}
    },
    mappings: {
      width: 'ocean.width',
      depth: 'ocean.depth',
      density: 'ocean.density',
      color: 'ocean.color', 
      opacity: 'ocean.opacity',
    }
})
 */
//animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
</script>

<style lang="scss" scoped>

</style>