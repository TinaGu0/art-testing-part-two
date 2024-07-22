<template>
<div>
    <div class="vp">
    <a-scene 
    embedded 
    arjs='sourceType: webcam;'
    renderer="logarithmicDepthBuffer: true;"
    vr-mode-ui="enabled: false"
    id="scene"
    gesture-detector 
    xrextras-gesture-detector 
    xrweb
    landing-pages
    xrextras-runtime-error
    xrextras-tap-recenter>
      <a-marker preset='hiro'>
        <a-entity
          id="model"
          class="model"
          gltf-model="url(/sky.glb)"
          xrextras-hold-drag 
          xrextras-one-finger-rotate 
          gesture-handler="factor: 10;"
          xrextras-pinch-scale 
          scale="0.5, 0.5, 0.5"
          rotation="-90 0 0" 
          animation="property: rotation; to: 0 0 0; loop: true; dur: 10000"
        ></a-entity>
      </a-marker>
      <a-camera
      id="camera"
      raycaster="objects: .model">
    <a-camera></a-camera>
    </a-camera>
      <a-plane
        id="ground" 
        rotation="-90 0 0" 
        width="1000" 
        length="1000"
        height="1000" 
        material="shader: shadow" 
        shadow>
      </a-plane>
    </a-scene>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.vp {
    position: relative;
}
</style>