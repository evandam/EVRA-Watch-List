<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <h2 class="title">{{title}}</h2>
                    <p>{{details}}</p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    props: {
        title: String,
        details: String,
    },
};
</script>