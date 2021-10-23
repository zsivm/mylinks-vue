<template>
<div>
    <div class="container">
        <div class="btnContainer">
            <div v-if="!isEditMode">
                <button class="editBtn" @click="editLinkCard">Edit</button>
                <button class="removeBtn" @click="removeLinkCard">Remove</button>
            </div>
            <div v-else>
                <button class="saveBtn" @click="onSaveClicked">Save</button>
                <button class="cancelBtn" @click="onCancleClicked">Cancel</button>
            </div>
        </div>
        <div v-if="!isEditMode" class="readFields">
            <div clas="title">
                <h3 class="text-xl">{{ myLink.title }}</h3>
            </div>
            <div class="url">
                <a target="_blank" :href=myLink.url>{{ myLink.url }}</a>
            </div>
            <div class="description">
                <p>{{ myLink.description }}</p>
            </div>
            <div class="category">
                <p>{{ myLink.category }}</p>
            </div>
            <div class="date">
                <p>{{ formattedDate }}</p>
            </div>
        </div>
        <div v-else class="editFields">
            <form @submit.prevent>
                <label for="editTitle">Title</label>
                <input v-model="actualLink.title" id="editTitle" type="text">
            
                <label for="editUrl">Url</label>
                <input v-model="actualLink.url" id="editUrl" type="url">

                <label for="editDescription">Description</label>       
                <textarea v-model="actualLink.description" id="editDescription" maxlength = "100" rows="2"></textarea>

                <label for="editCategory">Category</label>
                <select v-model="actualLink.category" id="editCategory">
                    <option value="" disabled selected hidden>Select a category</option>
                    <option value="Tech">Tech</option>
                    <option value="Memes">Memes</option>
                    <option value="Education">Education</option>
                    <option value="Fun">Fun</option>
                    <option value="Read Later">Read Later</option>
                    <option value="Watch Later">Watch Later</option>
                    <option value="Other">Other</option>
                </select>
                <label for="editDate">Added at</label>
                <input  v-model="formattedDate" id="editDate" type="text" readonly>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import RequestHandler from '@/util/RequestHandler';
export default {
    name: "MyLinkCard",
    emits: ["fetch-links"],
    props: [ "myLink" ],
    data() {
        return {
            isEditMode: false,
            actualLink: {...this.myLink}
        }
    },
    computed: {
        formattedDate() {
            let dateParts = this.myLink.date.split("T");
            console.log("debbug");
            return dateParts[0] + " " + dateParts[1].substring(0, 5);
        }
    },
    methods: {
        async removeLinkCard() {
            await new RequestHandler().removeLinkCard(this.myLink._id);
            this.$emit("fetch-links");
        },
        editLinkCard() {
            this.isEditMode = true;
        },
        onCancleClicked() {
            this.toggleEditMode();
            this.actualLink = {...this.myLink};
        },
        onSaveClicked() {
            this.sendCreateMyLink();
            this.toggleEditMode();
        },
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },
        async sendCreateMyLink() {

            let oPayload = {
                title: this.actualLink.title,
                url: this.actualLink.url,
                description: this.actualLink.description,
                category: this.actualLink.category
            };

            try {
                await new RequestHandler().sendEditMyLink(oPayload, this.actualLink._id);
                this.eventBus.emit("fetch-links");

            } catch (e) {
                console.log(e);
            }
        },
    }
}
</script>

<style scoped>

.container {
    margin: 30px auto;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 0 15px 30px 1px rgb(29, 29, 29);
    background-color: #daa471;
}

.btnContainer {
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
}

.removeBtn {
    margin-right: 20px;
}

button {
  margin: 5px;
  padding: 6px;
  background-color: #7175da;
  display: inline-block;
  color: white;
  border-radius: 4px;
  box-sizing: border-box;
}

input, select {
  width: 60%;
  height: 40px;
  margin-top: 10px;
  padding: 6px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  margin-top: 10px;
  width: 60%;
  height: 60px;
  border-radius: 4px;
  padding: 6px;
  resize: none;
  box-sizing: border-box;
}

label {
  color: white;
  padding: 6px 0px;
  text-align: start;
  width: 30%;
  border-radius: 4px;
  display: inline-block;
  box-sizing: border-box;
}

</style>