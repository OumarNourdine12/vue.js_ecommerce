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
          title: 'Nike Mercurial',
          color: 'green',
          description: 'Nike Mercurial Superfly 7 Academy MG intègre une plaque polyvalente multi-surfaces qui offre une excellente adhérence sur surfaces naturelles et synthétiques.',
          src: 'https://images.sportsdirect.com/images/products/19101501_l.jpg',
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