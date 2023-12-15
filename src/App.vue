<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { query, collection, getDocs, onSnapshot } from 'firebase/firestore'
import db from './firebase/init.js'
import CategoryList from './components/CategoryList.vue'

const categories = ref([])
async function getCategories(){
    /* add your code here */
    const cate = await getDocs(query(collection(db, "mycategories")));
      cate.forEach((docfromSnap) =>{
        let data = docfromSnap.data();
        data.id = docfromSnap.id
        categories.value.push(data)
      })


}

onMounted(() => {
    getCategories()
})
</script>

<template>
  <CategoryList :categories="categories"/>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
