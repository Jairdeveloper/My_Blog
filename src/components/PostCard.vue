// PostCard.vue content placeholder
<template>
    <div id="PostCard">
        <h1>Hola mundo</h1>

    </div>
</template>
<script>
export default {
    name: 'PostCard',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
/*     mounted() {
        // This lifecycle hook can be used for initial setup if needed
        const el = document.getElementById('PostCard');

        el.innerHTML = `<h1>Hola mundo</h1>`

        document.body.appendChild(el);


    }, */
    data() {
        return {
            // Local state can be added here if needed
        };
    },
    methods: {
        // Methods for handling post actions can be added here
    }
};
</script>