<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  categories: {
    type: String,
    required: true,
  }
});
</script>

<template>
    <div class="menu">
        <RouterLink class="item" to="/products">
            All
        </RouterLink>
        <RouterLink class="item" v-for="category in categories" :to="`/products/${category.id}`">
            {{category.id}}
        </RouterLink>
    </div>
</template>

<style scoped>
    .menu {
        display: flex ;
    }
    .item {
        flex: 1 ;
        height: 80px ;
        border: 1px solid black ;
        border-radius: 25px ;
        text-align: center ;
        font-size: 3em ;
        margin: 5px ;
    }
</style>