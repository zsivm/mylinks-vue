<template>
<div>
    <div class="container">
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
</div>

</template>

<script>
export default {
    name: "MyLinkCard",
    props: [ "myLink" ],
    computed: {
        formattedDate() {
            let dateParts = this.myLink.date.split("T");
            console.log("debbug");
            return dateParts[0] + " " + dateParts[1].substring(0, 5);
        }
    },
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

</style>