<template>
    <card :title="title">
        <p>Something about the movie?</p>
    </card>
</template>

<script>
import Card from './Bulma/Card.vue';

export default {
    components: {
        Card,
    },
    props: {
        title: String,
    }
};
</script>

<style scoped>

</style>