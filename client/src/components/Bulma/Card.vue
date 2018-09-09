<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{title}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <footer class="card-footer" v-if="hasFooter">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
    computed: {
        hasFooter() {
            return !!this.$slots.footer;
        },
    },
};
</script>