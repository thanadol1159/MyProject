<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  category: {
    type: String,
    required: true,
  }
});
</script>

<template>
    <div class="menu">
        <RouterLink class="new" to="/products/add">Add Product</RouterLink>
        <template v-if="props.category==''">
           <RouterLink class="item" to="/query/1">Sort by price</RouterLink>
           <!--  RouteLink for querying All  -->
           <RouterLink class="item" to="/query/2">Sort by title (desc) </RouterLink>

        </template>

        <template v-if="props.category=='Books'">
            <!--  RouteLink for querying Books  -->
            <RouterLink class="item" to="/query/3">Fiction</RouterLink>
            <RouterLink class="item" to="/query/4">Word “Life” </RouterLink>
            <RouterLink class="item" to="/query/5">#pages between 300 and 400 (Sort by pages) </RouterLink>
            <RouterLink class="item" to="/query/6">(Bestseller or Award) and price &lt; 20USD </RouterLink>
        </template>
        
        <template v-if="props.category=='Phones'">
            <RouterLink class="item" to="/query/7">Samsung</RouterLink>
            <RouterLink class="item" to="/query/8">Apple  price &lt; 600USD </RouterLink>
            <RouterLink class="item" to="/query/9">Silver or Red</RouterLink>
            <RouterLink class="item" to="/query/10">Apple max price </RouterLink>
            <!-- RouteLink for querying Phones  -->
        </template>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none ;
    }
    .menu {
        display: flex ;
        flex-wrap: wrap ;
    }
    .item, .new {
        background-color: #ffd580 ;
        border: 1px solid black ;
        border-radius: 25px ;
        text-align: center ;
        font-size: smaller ;
        margin: 2px ;
        padding: 5px ;
    }
    .new {
        background-color: rgb(0,180,0) ;
        color: white ;
    }
</style>