<template>
    <div class="ml-3">
        <div class="card border-dark mb-3 position-relative" style="max-width: 18rem;">
            <div class="card-header"> {{ product.title }} </div>
            <div class="card-body text-dark">
                <img class="card-img-top" :src="product.img" style="width: 150px; height: 150px;"/>
              <h4 class="card-text"> {{ product.price }} €</h4>
              <i @click="pannierAdd" class="btnCard fas fa-plus" ></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default{ 
        name: 'Produitlist',
        props: ['product'],

        data(){
            return{
                like: []
            }
        },

        methods:{
            pannierAdd(){
                this.$store.dispatch('add_pannier', this.product)
                console.log('Add pannier')
            }
        },
    }
</script>


<style scoped>
    .btnCard{
        transform: scale(1);
        transition: 0.4s;
        background-color: green; 
        padding: 5px; 
        position: absolute; 
        bottom: 10px; 
        right: 10px; 
        border-radius: 50%; 
        color: aliceblue; 
        cursor: pointer;
    }

    .btnCard:hover{
        transform: scale(1.5);
        transition: 0.4s;
    }

</style>
