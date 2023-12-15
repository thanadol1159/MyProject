<script setup>

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  }
});
</script>

<template>
    <table>
        <tr>
            <th>No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price(USD)</th>
            <template v-if="props.category=='Books'">
            <td>Author</td>
            <td>#Pages</td>
            </template>
            <template v-if="props.category=='Phones'">
            <td>Brand</td>
            <td>Memory(GB)</td>
            </template>
        </tr>
        <tr v-for="(product, index) in products">
            <td>{{index+1}}</td>
            <td>
                {{product.title}}<br>
                <span class="details" v-if="props.category=='Books'">Keywords: {{product.keywords.join()}}</span>
                <span class="details" v-if="props.category=='Phones'">Colors: {{product.colors.join()}}</span>
            </td>
            <td>{{product.category}}</td>
            <td>{{product.price}}</td>
            <template v-if="props.category=='Books'">
            <td>{{product.author}}</td>
            <td>{{product.pages}}</td>
            </template>
            <template v-if="props.category=='Phones'">
            <td>{{product.brand}}</td>
            <td>{{product.memory}}</td>
            </template>
        </tr>
    </table>
</template>

<style scoped>
    table {
        width: 100% ;
    }
    tr{
        margin: 5px ;
    }
    th,td {
        border-bottom: 1px solid gray ;
        padding: 5px ;
    }
    .details {
        font-size: smaller ;
        color: blue ;
    }
</style>