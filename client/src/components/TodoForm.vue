<template>
    <form @submit.prevent="handleSubmit">
        <div class="field is-grouped">
            <div class="control">
                <input v-model="item.title" class="input" type="text" placeholder="Title">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="item.category">
                        <option
                            v-for="category in categories"
                            :key="category">
                            {{category}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <textarea v-model="item.details" class="textarea" placeholder="Details" rows="2"></textarea>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary" type="submit">Add Item</button>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        const categories = ['Movie', 'Travel', 'Misc.'];
        return {
            item: {
                title: "",
                category: categories[0],
                details: "",
            },
            categories: categories,
        };
    },
    methods: {
        handleSubmit() {
            fetch('http://localhost:3000/api/todo', {method: 'POST', body: this.item})
            .then(res => {
                console.log('Added item successfully!', res.data);
            });
        }
    }
};
</script>