<template>
  <div class="form-container w-1/4 m-auto">
    <h2 class="white text-2xl">Create MyLink</h2>
    <form @submit.prevent class="rounded-sm">
      <label for="title">Title</label>
      <input v-model="title" autocomplete="off" type="text" id="title" name="title">
        
      <label for="url">Url</label>
      <input v-model="url" autocomplete="off" type="text" id="url" name="url">

      <label for="description">Description</label>
      <textarea v-model="description" class="w-full" id="description" name="description" maxlength = "100" rows="2"></textarea>

      <label for="category">Category</label>
      <select v-model="category" id="category" name="category">
        <option value="" disabled selected hidden>Select a category</option>
        <option value="tech">Tech</option>
        <option value="memes">Memes</option>
        <option value="education">Education</option>
        <option value="fun">Fun</option>
        <option value="readlater">Read Later</option>
        <option value="watchlater">Watch Later</option>
        <option value="other">Other</option>
      </select>

      <button class="white" @click="createMyLink">Save</button>
    </form>
  </div>
</template>

<script>
import RequestHandler from '@/util/RequestHandler';
export default {
  name: "CreateLinkForm",
  data() {
    return {
      title: "",
      url: "",
      description: "",
      category: "other"
    }
  },
  methods: {
    createMyLink() {
      let oPayload = {
        "title": this.title,
        "url": this.url,
        "description": this.description,
        "category": this.category
      };
      this.sendCreateMyLink(oPayload);
    },
    async sendCreateMyLink(oPayload) {
      try {
        await new RequestHandler().sendCreateMyLink(oPayload);
        this.resetForm();
        this.eventBus.emit("fetch-links");
      } catch (e) {
        console.log(e);
      }
    },
    resetForm() {
      this.title = "";
      this.url = "";
      this.description = "";
      this.category = "";
    }
  }
}
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  height: 40px;
  padding: 6px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label {
  color: white;
  padding: 6px 0;
  text-align: start;
  width: 100%;
  border-radius: 4px;
  display: inline-block;
  box-sizing: border-box;
}
textarea {
  border-radius: 4px;
  padding: 6px;
  resize: none;
  box-sizing: border-box;
}
button {
  width: 100%;
  margin-top: 16px;
  padding: 6px;
  background-color: #7175da;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
}
button:hover {
  background-color: #6064ca;
}
.white {
  color: white;
}
.description {
  height: 40px;
}
.form-container {
  border-radius: 20px;
  background-color: rgb(47 48 51);
  padding: 30px;
  margin-top: 8vh;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
}
</style>