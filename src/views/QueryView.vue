<script setup>
import { ref, onMounted, watch } from 'vue'
import { collection, getDocs, limitToLast, orderBy, query ,where ,limit ,or} from 'firebase/firestore'
import db from '../firebase/init.js'
import { useRoute } from "vue-router"
import QueryList from '../components/QueryList.vue'
import ProductList from '../components/ProductList.vue'

const category = ref('')
const products = ref([])
const heading = ref('')
const route = useRoute()

async function getQuery() {
    const qryId = route.params.qryId
    products.value = []
    let qry = null
    let prodRef = null

    if (qryId == 1) {
        heading.value = 'Order by price'
        category.value = ''   /* All categories */
        /** add your query here */
        const col = collection(db, "myproducts")
        qry = query(col, orderBy("price"))
    }
    else if (qryId == 2) {
        heading.value = 'Sort by title (desc)'
        category.value = ''   /* All categories */
        const col = collection(db, "myproducts")
        qry  = query(col, orderBy("title","desc"))
    }
    else if (qryId == 3) {
        heading.value = 'Fiction'
        category.value = 'Books'
        const col = collection(db, "myproducts")
        qry = query(col,where("keywords",'array-contains' ,"Fiction") )
    }
    else if (qryId == 4) {
        heading.value = 'Word “Life”'
        category.value = 'Books'
        const col = collection(db, "myproducts")
        qry = query(col,or(where("keywords",'array-contains' ,"Life").where("title","==","Life")))
    }
    else if (qryId == 5) {
        heading.value = '#pages between 300 and 400 (Sort by pages)'
        category.value = 'Books'
        const col = collection(db, "myproducts")
        qry = query(col,where("pages",">=",300),where("pages","<=",400),orderBy("pages","desc"))
    }
    else if (qryId == 6) {
        heading.value = '(Bestseller or Award) and price > 20USD'
        category.value = 'Books'
        const col = collection(db, "myproducts")
        qry = query(col,where("keywords",'array-contains' ,"Bestseller"),where("price","<=",20))
    }
    else if (qryId == 7) {
        heading.value = 'Samsung'
        category.value = 'Phones'
        const col = collection(db, "myproducts")
        qry = query(col,where("brand",'==' ,"Samsung"))
    }
    else if (qryId == 8) {
        heading.value = 'Apple  price > 600USD'
        category.value = 'Phones'
        const col = collection(db, "myproducts")
        qry = query(col,where("brand",'==' ,"Apple"),where("price","<=",600))
    }
    else if (qryId == 9) {
        heading.value = 'Silver or Red'
        category.value = 'Phones'
        const col = collection(db, "myproducts")
        qry = query(col,where("colors",'array-contains-any' ,['Red','Silver'] ))
    }
    else if (qryId == 10) {
        heading.value = 'Apple max price '
        category.value = 'Phones'
        const col = collection(db, "myproducts")
        qry = query(col,where("brand",'==' ,"Apple"),orderBy("price","desc"),limit(1))
    }

    const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        products.value.push(data);
    });
}

onMounted(() => {
    getQuery()
})

watch(() => route.params.qryId, getQuery)

</script>

<template>
    <QueryList :category="category" />
    <h1>{{ heading }}</h1>
    <ProductList :category="category" :products="products" />
</template>

<style scoped>
h1 {
    text-align: center;
    color: blue;
}
</style>