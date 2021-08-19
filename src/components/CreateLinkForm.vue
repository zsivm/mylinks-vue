<template>
  <div class="form-container w-1/4 m-auto">
    <h2 class="white text-2xl">Create MyLink</h2>
    <form @submit.prevent class="rounded-sm">
      <label for="title">Title</label>
      <input v-model="title" type="text" id="title" name="title" placeholder="Title...">
        
      <label for="url">Url</label>
      <input v-model="url" type="text" id="url" name="url" placeholder="Url...">

      <label for="description">Description</label>
      <textarea v-model="description" class="w-full" id="description" name="description" maxlength = "100" rows="2" placeholder="Description..."></textarea>

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
      let payload = {
        "title": this.title,
        "url": this.url,
        "description": this.description,
        "category": this.category
      };

      this.sendCreateMyLink(payload);
    },
    async sendCreateMyLink(payload) {
      try {
        const post = await fetch("http://localhost:3000/myLinks", 
        { method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(payload)
        });

        const data = await post.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 6px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  color: white;
  padding: 6px;
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
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.white {
  color: white;
}

.description {
  height: 40px;
}

.form-container {
  border-radius: 5px;
  background-color: #daa471;
  padding: 20px;
  margin-top: 8vh;
  box-shadow: 0 15px 30px 1px rgb(29, 29, 29);
}
</style>
