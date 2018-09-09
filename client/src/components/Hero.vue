<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{title}}</h1>
                <h2 v-if="subtitle" class="subtitle">{{subtitle}}</h2>
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
    }
}
</script>