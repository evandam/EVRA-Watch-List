<template>
    <section class="section">
        <div class="container">
            <button class="button is-primary" v-on:click="addMovie">Add a Movie</button>
        </div>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-quarter-desktop is-half-tablet"
                        v-for="movie in movies" :key="movie.id">
                    <movie :title="movie.title" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Movie from './Movie.vue';

export default {
    components: {
        Movie,
    },
    data: () => {
        const movies = [
            {id: 1, title: "Test"},
            {id: 2, title: "Foo"},
            {id: 3, title: "Bar"},
        ];

        return {
            movies: movies,
        };
    }
};
</script>

<style scoped>
    .container {
        padding-bottom: 20px;
    }
</style>