<template>
  <div class="home">
    <div>
      <h1 class="text-4xl text-white">MyLinks</h1>
      <CreateLinkForm/>
      <ShowMyLinks/> 
    </div>
  </div>
</template>

<script>
import CreateLinkForm from '@/components/CreateLinkForm.vue'
import ShowMyLinks from '@/components/ShowMyLinks.vue'
export default {
  name: "Home",
  components: {
    CreateLinkForm,
    ShowMyLinks
  }
}
</script>

<style scoped>
h1 {
  margin-top: 4vh;
}
</style>

