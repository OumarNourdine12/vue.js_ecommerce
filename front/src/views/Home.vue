<template>
<div>
    <!-- <Product/> -->
 
    <Navbar/>
    <Psg/>

</div>
    
</template>










<script>
// import Product from '../components/Product'

import Navbar from '../components/Navbar'
import Psg from '../components/Psg'
export default {
    name: "Home",
    components: {
        // Product,
    
        Navbar,
        Psg
    }
}
</script>