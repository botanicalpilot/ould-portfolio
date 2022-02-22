<template>
  <div class="home">
    <h1>Hello, my name is Stephen</h1>
    <h2>I'm a programmer and a developer working as as contractor at Goodbeast. I love building beautiful websites with Vue and headless content managment systems. Scroll below to see some examples of my work or get in touch.</h2>
    <LayeredBackground />
    <div class="backgroundOpacity"></div>
    <Works/>
  </div>
</template>

<script>
// @ is an alias to /src
import Works from '@/components/Works.vue'
import LayeredBackground from '@/components/LayeredBackground.vue'
export default {
  name: 'Home',
  components: {
      Works,
      LayeredBackground
  }
}
</script>
<style scoped>
.backgroundOpacity{
  position: absolute;
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,11,38,1) 50%);
height: 53vh;
width: 100%;
margin-bottom: 57%;
top: 25;
top: 132%;
}
</style>
