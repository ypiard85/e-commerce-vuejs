<template>
    <div class="container d-flex flex-wrap">
        <ProductList v-for="(product,i) in this.$store.state.products" :key="i" :product="product" />
    </div>
</template>


<script>
    import ProductList from '../components/productList'
    export default{
        name: 'Produits',
        components:{
            ProductList
        }
    }
</script>