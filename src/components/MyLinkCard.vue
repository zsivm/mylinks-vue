<template>
<div>
    <div class="container">
        <div class="btnContainer">
            <div v-if="!isEditMode">
                <button class="editBtn" @click="editLinkCard">Edit</button>
                <button class="removeBtn" @click="removeLinkCard">Remove</button>
            </div>
            <div v-else>
                <button class="saveBtn" @click="isEditMode = !isEditMode" >Save</button>
                <button class="cancelBtn" @click="isEditMode = !isEditMode">Cancel</button>
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
            <form action="">
                <div clas="title">
                    <input type="text">{{ myLink.title }}
                </div>
                <div class="url">
                    <input type="url">{{ myLink.url }}
                </div>
                <div class="description">
                    <input type="text">{{ myLink.description }}
                </div>
                <div class="category">
                    <input type="text">{{ myLink.category }}
                </div>
                <div class="date">
                    <input type="date">{{ formattedDate }}
                </div>
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
            isEditMode: false
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
        }
    }
}
</script>

<style>
.container {
    margin: 30px auto;
    padding: 30px 0;
    border-radius: 10px;
    box-shadow: 0 15px 30px 1px rgb(29, 29, 29);
    background-color: #daa471;
}

.btnContainer {
    display: flex;
    justify-content: flex-end;
}

.removeBtn {
    margin-right: 20px;
}

</style>