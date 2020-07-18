<template>
    <div class="container mt-4">
        <h2>Pannier</h2>
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">nom produit</th>
              <th scope="col">Prix</th>
              <th scope="col">Quantité</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pannier, i) in panniers" :key="i" >
                    <th scope="row"> <img :src="pannier.img" /></th>
                    <td>{{pannier.title}}</td>
                    <td >{{pannier.price * pannier.nbr }} €</td>
                    <td > {{ pannier.nbr }} <button class="btn-quantity" @click="plusQuantity(pannier)" >+</button><button class="btn-quantity" @click="moinsQuantity(pannier)" >-</button> </td>
                    <td ><button class="btn btn-danger btn-sm" @click="deleteProduct">Retirer du pannier</button></td>
                    
            </tr>
          </tbody>
          <tfoot>
              <tr v-if="panniers.length != 0">
                  <td> Total : </td>
                  <td> </td>
                  <td> {{ totalPrice }} € </td>
                  <td> </td>
                  <td><button @click="openPayer" class="btn btn-info">Payer</button> </td>
                  <td></td>
              </tr>
          </tfoot>
        </table>
        <transition name="bounce">
        <div v-if="modalPayer" style="background-color: rgba(0, 0, 0, 0.466); height: 100vh; top: 0; bottom: 0; right: 0; left: 0; max-width: 100%;" class="position-absolute" >
            <span @click="closePayer" class="closeModal" style="position: absolute; top: 20px; right: 20px;">X</span>
            <div class="card col-4 col-md-4 container d-flex justify-content-center" style="margin-top: 200px;" >
                <h4 align="center">Renseigner votre carte bancaire</h4>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <input type="text" class="form-control" maxlength="12" placeholder="numéro de carte"  v-model="numcart" required>
                    </div>                    
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" maxlength="3" placeholder="Code visuel"  v-model="codevisuel" required>
                    </div>
                    <div class="form-group col-md-6">                        
                        <input type="date" class="form-control" id="inputAddress" v-model="dateExpiration" required>
                      </div>
                    <div class="form-group col-md-12">                        
                        <input type="text" class="form-control" id="inputAddress" placeholder="Nom du propriétaire" v-model="nameAcheteur" required>
                      </div>
                    <div class="form-group col-md-1">                        
                        <input type="checkbox" class="form-control" name="antibot"  v-model="botValide" required>
                      </div>
                    <div class="form-group col-md-11">                        
                        <p class="mt-1">Je ne suis pas un robot</p>
                      </div>                      
                  </div>
                  <h4 align="center">Motant à payer : {{ totalPrice }} €</h4>         
                  <img v-if="loading" src="./loadingLogo.gif" style="margin-left: 40%;" />
                  <p> {{messageerreur}} </p>
                  <div v-if="valider" class="alert alert-success" role="alert">
                    Payement accepter
                  </div>
                  <button v-if="!valider" class="btn btn-primary mt-2" @click="payervalidation" >regler</button>
                  <router-link to="/" ><button v-if="valider" class="btn btn-primary mt-2 col-md-12" >Retour à l'achat</button></router-link> 
            </div>
        </div>
        </transition>
    </div>

    </template>

<script>

import {mapGetters} from 'vuex'

    export default{
        name: 'Pannier', 
        data(){
            return{
                modalPayer: false,
                loading: false,
                messageerreur: " ",
                numcart: "",
                codevisuel: "",
                dateExpiration: "",
                nameAcheteur: "",
                botValide: false, 
                valider: false
            }
        },

        computed:{
            ...mapGetters({
                totalPrice: 'totalPrice',
                panniers: 'panniers',
                porteFeuille: 'porteFeuille'
            }),
        },

        methods:{

            plusQuantity(pannier){
                pannier.nbr = pannier.nbr +1
            },

            moinsQuantity(pannier){
                pannier.nbr = pannier.nbr - 1
                if(pannier.nbr <= 0 ){
                    this.deleteProduct(this.product)
                }
            },

            deleteProduct(){
                this.$store.dispatch('delete_product', this.product)
            },

            openPayer(){
                this.modalPayer = true
            },

            closePayer(){
                this.modalPayer = false
            },

            payervalidation(){
                if(this.numcart !== '' && this.codevisuel !== '' && this.dateExpiration !== '' && this.nameAcheteur !== '' && this.botValide === true ){
                    this.loading = true
                    this.messageerreur = ''                    
                    setInterval( () =>{
                        this.loading = false    
                        this.valider = true
                        this.$store.state.panniers = []
                    }, 5000)                    
                    this.$store.state.porteFeuille = this.$store.state.porteFeuille -  this.totalPrice

                }else{
                    this.messageerreur = 'Veuillez renseigner tous les champs'
                }
            }


        }

    }
</script>

<style scoped>
    img{
        width: 100px;
    }

    td{
        vertical-align: middle;
    }

    .btn-quantity{
        background-color: rosybrown;
        padding: 5px 10px;
        color: seashell;
        font-weight: bold;
        border-radius: 20px;
        margin: 5px;
    }

    .closeModal{
        font-size: 34px;
        cursor: pointer;
        transform: rotate3d(1, 1, 1, 0deg) scale(1);
        transition: 0.4s;
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 10px;
    }

    .closeModal:hover{
        transform: rotate3d(5, -1, -1, 45deg) scale(1.5);        
        transition: 0.4s;
    }

    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>