<script setup>
import { ref} from 'vue'
import { useRouter} from 'vue-router'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import db from '../firebase/init.js'

const router = useRouter()

const title = ref('')
const category = ref('Books')
const price = ref()
const author = ref('')
const pages = ref()
const brand = ref('')
const memory = ref()
const keywords = ref('')
const colors = ref('')

async function addProduct(){
    /* add your code here */
    
    const docRef = await addDoc(collection, (db,"myproducts"),{
        Title: title.value,
        Category :category.value,
        Price : price.value,
        Author : author.value,
        Page : pages.value,
        Brand : brand.value,
        Memory : memory.value,
        Keywords : keywords.value.split(','),
        Colors : colors.value
    })
    /* redirect back to home after adding new product*/
    router.push('/products')
}

</script>

<template>
    <form class="form" @submit.prevent="addProduct">
        <div class="fields">
            <label for="title">Title</label>
            <input id="title" type="text" v-model="title" required>
        </div>
        <div class="fields">
            <label for="category">Category</label>
            <select id="category" v-model="category" required>
              <option>Books</option>
              <option>Phones</option>
            </select>
        </div>
        <div class="fields">
            <label for="price">Price(USD)</label>
            <input id="price" type="number" v-model="price" required>
        </div>
        <template v-if="category=='Books'">
            <div class="fields">
                <label for="author">Author</label>
                <input id="author" type="text" v-model="author" required>
            </div>
            <div class="fields">
                <label for="pages">#Pages</label>
                <input id="pages" type="number" v-model="pages" required>
            </div>
            <div class="fields">
                <label for="keywords">Keywords</label>
                <input id="keywords" type="text" v-model="keywords" placeholder="Enter words seperated by comma(,)" required >
            </div>
        </template>
        <template v-if="category=='Phones'">
            <div class="fields">
                <label for="brand">Brand</label>
                <input id="brand" type="text" v-model="brand" required>
            </div>
            <div class="fields">
                <label for="memory">Memory(GB)</label>
                <input id="memory" type="number" v-model="memory" required>
            </div>
            <div class="fields">
                <label for="keywords">Colors</label>
                <input id="keywords" type="text" v-model="keywords" placeholder="Enter words seperated by comma(,)" required >
            </div>
        </template>
        <button class="button" type="submit">Add</button>              
    </form>
</template>

<style scoped>
    .form {
        display: flex ;
        flex-direction: column ;
    }
    .fields {
        display: flex ;
    }
    .button {
        color: white ;
        background-color: rgb(0,180,0) ;
        margin: 5px ;
        padding: 10px ;
        border-radius: 5px ;
    }
    label {
        flex: 1 ;
        margin: 5px ;
        padding: 5px ;
        font-weight: bold ;
    }
    input,select,option {
        flex: 3 ;
        margin: 5px ;
        padding: 5px ;
        border: 1px solid gray ;
        border-radius: 5px ;
    }
</style>