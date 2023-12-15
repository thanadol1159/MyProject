<script setup>
import { ref, onMounted,watch } from 'vue'
import { collection, getDocs , query , where} from 'firebase/firestore'
import db from '../firebase/init.js'
import { useRoute } from "vue-router"
import QueryList from '../components/QueryList.vue'
import ProductList from '../components/ProductList.vue'

const category = ref()
const products = ref([])
const route = useRoute()

async function getProducts(){
    products.value = []

    category.value = route.params.category
    /* add your code here */
    if (category.value === '') {
        const cate = await getDocs(query(collection(db, "myproducts")));
      cate.forEach((docfromSnap) =>{
        let data = docfromSnap.data();
        data.id = docfromSnap.id
        products.value.push(data)
      })
    }else if(category.value === 'Books'){
        const cate = await getDocs(query(collection(db, "myproducts"),where("category","==","Books")));
      cate.forEach((docfromSnap) =>{
        let data = docfromSnap.data();
        data.id = docfromSnap.id
        products.value.push(data)
      })
    }else if(category.value === 'Phones'){
        const cate = await getDocs(query(collection(db, "myproducts"),where("category","==","Phones")));
      cate.forEach((docfromSnap) =>{
        let data = docfromSnap.data();
        data.id = docfromSnap.id
        products.value.push(data)
      })
    }


}
watch( () => route.params.category, getProducts)
onMounted(() => {
    getProducts()
})



</script>

<template>
    <QueryList :category="category" />
    <ProductList :category="category" :products="products" />
</template>

<style scoped>
 
</style>

