// HomeView.vue content placeholder
<template>
    <h1>Home View</h1>
    <PostCard :post="PostData" />
</template>

<script>
import PostCard from '../components/PostCard.vue';

export default{
    name: 'HomeView',
    components :{
        PostCard //Registra el componente PostCard
},
    data() {
        return {
            PostData: {
                title: 'Sample Post',
                content: 'This is a sample post content.',
}
        }
    }
}

</script>