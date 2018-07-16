<template>
    <div id="app">
        <hero title="EVRA" subtitle="Our to-do list!" class="is-primary" />
        <div class="container">
            <MovieList />
        </div>
    </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Hero from './components/Bulma/Hero.vue';
import MovieList from './components/MovieList.vue';

export default {
    name: 'app',
    components: {
        Hero,
        MovieList,
  }
};
</script>

<style>
</style>
