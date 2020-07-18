<template>
    <div>
      <v-app-bar
        color="red accent-4"
        dark
      >  
        <v-toolbar-title>e-commerce Yoann shop</v-toolbar-title>
        <v-toolbar-title class="ml-5" ><i class="fa fa-eur" aria-hidden="true"></i>  {{ porteFeuille }} </v-toolbar-title>

        <v-spacer></v-spacer>
  
        <v-btn to="/" icon>
          <v-icon>mdi-basket</v-icon>
        </v-btn>
  
        <v-btn to="/pannier" icon>
          <v-icon class="position-relative" >mdi-cart</v-icon>
        </v-btn>
        <p v-if="nbrPannier > 0" class="pannierCount"> {{ nbrPannier }} </p>
      </v-app-bar> 
      <router-view></router-view>
    </div>
  </template>

  <script>
    import { mapGetters } from 'vuex'

      export default{

        computed:{
            ...mapGetters({
              nbrPannier: 'nbrPannier',
              porteFeuille: 'porteFeuille'
            }),
        },
      }
</script>

<style scoped>
  .pannierCount{
    color: aliceblue;
    background-color: rgb(0, 128, 0);
    padding: 5px 10px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    transform: scale(1);
    animation: countPannier 0.4s;
    animation-fill-mode: forwards;
    transition: 0.4s;
  }

  @keyframes countPannier{
    from{
      transform: scale(1.5);
    }
    to{
      transform: scale(1);
    }
  }
</style>