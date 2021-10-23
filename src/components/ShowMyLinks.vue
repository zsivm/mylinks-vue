<template>
    <div v-if="myLinks.length" class="container">
        <ul class="list">
            <li v-for="myLink in myLinks" :key="myLink._id">
                <MyLinkCard @fetch-links="fetchMyLinks" :myLink="myLink" />  
            </li>
        </ul>
    </div>
</template>

<script>
import MyLinkCard from '@/components/MyLinkCard';
import RequestHandler from '@/util/RequestHandler';
export default {
    name: "ShowMyLinks",
    components: {
        MyLinkCard
    },
    data() {
        return {
            myLinks: []
        }
    },
    mounted() {
        this.fetchMyLinks();
        this.eventBus.on('fetch-links', () => {
            this.fetchMyLinks();
        });
    },
    methods: {
        async fetchMyLinks() {
            this.myLinks = await new RequestHandler().fetchLinks();
        },
    }
}
</script>
<style scoped>
.container {
    margin: 30px auto;
    width: 50%;
    height: auto;
}

ul {
    width: 70%;
    margin: auto;
}

</style>