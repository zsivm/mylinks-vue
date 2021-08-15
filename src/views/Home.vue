<template>
  <div class="home">
    HELLO WORLD
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  mounted(){
    this.getMyLinks();
  },
  methods: {
    getMyLinks() {
      fetch("http://localhost:3000/myLinks", {
        "method": "GET"
      }).then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
      })
    }
  }
}
</script>
