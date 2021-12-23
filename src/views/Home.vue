<template>
  <div class="home">
    <h1>Hello, my name is Stephen</h1>
    <h2>I'm a programmer and a developer working as as contractor at Goodbeast. I love building beautiful websites with Vue and headless content managment systems. Scroll below to see some examples of my work or get in touch.</h2>
    <Works/>
  </div>
</template>

<script>
// @ is an alias to /src
import Works from '@/components/Works.vue'

export default {
  name: 'Home',
  components: {
      Works
  }
}
</script>
