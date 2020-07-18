import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const products = [
  {
    title:'Ordinnateur',
    img: 'https://www.zdnet.fr/i/edit/ne/2019/03/portable_direction_620.jpg',
    price: 412,
    nbr: 1,

  },
  {
    title:'Coque téléphone iphone 11',
    img: 'https://cdn.shopify.com/s/files/1/0049/5514/4307/products/Product-Image-Limitless-3.0-Walnut-iPhone-11-Pers-1080-by-1080px-72dpi_1_da7351a7-358f-4746-a6f2-042b0dfa60dc_680x.jpg?v=1587549757',
    price: 28,
    nbr: 1,

  },
  {
    title:'Galaxy S10e',
    img: 'https://images.samsung.com/is/image/samsung/fr-galaxy-s10plus-g975-sm-g975fzkdxef-900x600-186822126?$PD_GALLERY_L_SHOP_JPG$',
    price: 649,
    nbr: 1,

  },
  {
    title:'Iphone 11 - 64 GO ',
    img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/9d/53/b8/12080029/1540-1/tsp20200625101138/Apple-iPhone-11-64-Go-6-1-Noir.jpg',
    price: 804,
    nbr: 1,

  },
  {
    title:'Galaxy Tab A Wifi Noir',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWuBsZh9cVJp7L90lxJgzWabRDxKjvrCgQhmI_PiF48pQB-Gfq6z2N3YME-1EcIghGdyAsiKC7NQDJYY746oG3A3bHMwObntijojrAs0ln99Th8T9YbuLxNQ&usqp=CAY',
    price: 44,
    nbr: 1,

  },
  {
    title:'Surface Go 2',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4o6Z8?ver=02e4&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true',
    price: 220,
    nbr: 1,

  },
  {
    title:'Apple - 12,9" iPad Pro Retina',
    img: 'https://www.cdiscount.com/pdt2/n/f/a/2/700x700/mthv2nfa/rw/apple-12-9-ipad-pro-retina-wifi-cellulaire.jpg',
    price: 1302,
    nbr: 1,

  },
  {
    title:'souris ordinateur logitech',
    img: 'https://i.pinimg.com/originals/23/32/73/23327381d851c95693be776b5dc0a792.png',
    price: 20,
    nbr: 1,

  },
  {
    title:'clavier ordinateur',
    img: 'https://image.darty.com/accessoires/peripherique-clavier/clavier/apple_clavier_filaire_pave_s021023h1a_1313756291927.jpg',
    price: 35,
    nbr: 1,
  },
  {
    title:'clavier gaming',
    img: 'https://www.media-rdc.com/medias/ec14503a4b453aac85d17a151810de08/p_580x580/clavier-mecanique-gamer-clavier-gaming-avec-blue-switch-led-retro-eclaire-e-blue-ekm729-ops-xl-azerty.jpg',
    price: 70,
    nbr: 1,

  },
  {
    title:'Megaport Super Méga Pack ',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61N%2BNIGhFnL._AC_SX425_.jpg',
    price: 850,
    nbr: 1,

  },
  {
    title: 'NAVIBOT SR8855',
    img: 'https://image.darty.com/petit_electromenager/autres_aspirateurs_nettoyeurs/aspirateur_robot/samsung_navibot_sr8855_s021217h2a_1272025050388.jpg',
    price: 420,
    nbr: 1,
  },
  {
    title:"SAMSUNG BATTERIE D'ORIGINE SAMSUNG GALAXY NOTE 3",
    img: 'https://image.darty.com/darty?type=image&source=/market/2018/02/04/mkp_thNY7gCFbM1DrA.jpeg&width=400&height=300&quality=70',
    price: 12,
    nbr: 1,

  },
  {
    title:'Tapis de souris Gaming',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51MZERCmowL._AC_SX425_.jpg',
    price: 13,
    nbr: 1,
  },
]

export default new Vuex.Store({

  state: {
    products,
    panniers: [],
    porteFeuille: 2000,
  },

  mutations: {
    ADD_PANNIER(state, product){
      state.panniers.push({
        title: product.title,
        img: product.img,
        price: product.price,
        nbr: product.nbr
      })

    },


    DETELE_PRODUCT(state, product){
      let index = state.panniers.indexOf(product)
      state.panniers.splice(index, 1)
    }


  },

  getters:{
    totalPrice(state){
      let total = 0
      for(let item in state.panniers){
        total = total +   (state.panniers[item].nbr * state.panniers[item].price )
      } 
      return total
    },    

    panniers(state){
     return  state.panniers
    },

    porteFeuille(state){
       return state.porteFeuille
    },

    nbrPannier(state){
      let number
      let objetkey =  Object.keys(state.panniers).length
      number = objetkey
      return number 
    }
  },

  actions:{
    add_pannier( {commit}, product){
      commit('ADD_PANNIER', product)
    }, 

    delete_product( {commit}, product ){
      commit('DETELE_PRODUCT', product)
    },

  },

  modules: {

  }
})
