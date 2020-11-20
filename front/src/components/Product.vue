<template>
   <div class="products">
       <div  v-for="product in products"
       :key="product.color"
       >
       <h1>{{product.title}}</h1>
       <img :src="product.src" alt="">
       
       </div>
       

   </div>
</template>





   <script>
export default {
    name:'app',
    components: {},
    data(){
        return{
            products: [
                {
           title: ' Veste PSG Jordan Fleece 20/21',
          color: 'green',
          description: 'Restez au chaud dans les gradins cet hiver. Également idéal à porter en ville, ce polaire est un indispensable pour tous les supporters..',
          src: 'https://store.psg.fr/content/ws/176706/b_spot_jumpers_fre.jpg',
        },
        {
          title: 'Nike Air Max',
          color: 'green',
          description: 'NIKE',
          src: 'https://images.sportsdirect.com/images/products/20312467_l.jpg',
        },
         {
          title: 'Nike Air Max',
          color: 'green',
          description: 'NIKE',
          src: 'https://images.sportsdirect.com/images/products/19700412_l.jpg',
        },
         {
          title: 'Nike Air Max',
          color: 'green',
          description: 'NIKE',
          src: 'https://images.sportsdirect.com/images/products/63820622_l.jpg',
        },
                
            ]
        }
    }
}
</script>
<style scoped>

</style>