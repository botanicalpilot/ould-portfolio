<template>
  <div class="home">
    <div class="introText">
      <h1>Hello, my name is Stephen</h1>
      <h2>I'm a programmer and a developer working as as contractor at Goodbeast. I love building beautiful websites with Vue and headless content managment systems. Scroll below to see some examples of my work or get in touch.</h2>
    </div>
    <LayeredBackground />
    <Works/>
  </div>
</template>

<script>
// @ is an alias to /src
import Works from '@/components/Works.vue';
import LayeredBackground from '@/components/LayeredBackground.vue';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
export default {
  name: 'Home',
  components: {
      Works,
      LayeredBackground
  },
  mounted(){
		gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
  scrollTrigger: {
    trigger: ".introText",
    start: "top top",
    end: "bottom center",
    scrub: true,
    pin: true
  }
})
         },
}
</script>
<style scoped>
.home{
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 12%, rgba(2,11,38,1) 25%, rgba(2,11,38,1) 59%, rgba(152,121,217,1) 87%);
}

</style>
