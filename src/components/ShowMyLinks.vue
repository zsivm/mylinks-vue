<template>
    <div class="container">
        <ul class="list">
            <li v-for="myLink in myLinks" :key="myLink._id">
                <MyLinkCard :myLink="myLink" />  
            </li>
        </ul>
    </div>
</template>

<script>
import MyLinkCard from '@/components/MyLinkCard';
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
    },
    methods: {
        async fetchMyLinks() {
            try {
                const get = await fetch("http://localhost:3000/myLinks", 
                { 
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });

                const data = await get.json();
                this.myLinks = data;
                console.log(data);
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
    width: 50%;
    height: auto;
    background-color:cadetblue;
}

ul {
    width: 70%;
    margin: auto;
}

</style>