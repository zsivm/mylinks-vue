<template>
  <div class="home">
    <div>
      <h1 class="text-4xl text-white">MyLinks</h1>
      <CreateLinkForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CreateLinkForm from '@/components/CreateLinkForm.vue'
export default {
  name: "Home",
  components: {
    CreateLinkForm
  }
}
</script>

<style scoped>
h1 {
  margin-top: 4vh;
}
</style>

