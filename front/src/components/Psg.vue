<template>
  <div>
    
   
    <b-Carousel
      id="Carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1 px 2px #333"
    >
      <b-Carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluide w-100"
            style="height: 80vh !important"
            src="https://www.familinparis.fr/wp-content/uploads/Visites-Insolites/parc-des-princes/visite-audio-guide-parc-des-princes.jpg"
            alt="image slot"
          >
        </template>
      </b-Carousel-slide>
      <b-Carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            style="height: 80vh !important"
            src="https://www.lequipe.fr/_medias/img-photo-jpg/le-parc-des-princes-a-reau-l-equipe/1500000001262581/0:0,1998:1332-624-416-75/db9b8.jpg"
            alt="image slot"
          >
        </template>
      </b-Carousel-slide>
      <b-Carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            style="height: 80vh !important"
            src="https://img.20mn.fr/aYqG_sftQ_qnLAMTCAcVBQ/830x532_parc-princes-nouvelles-destination-mode-lors-visite-paris.jpg"
            alt="image slot"
          >
        </template>
      </b-Carousel-slide>
    </b-Carousel>
 <HelloWorld/>
    
  </div>
</template>


<script>
import HelloWorld from './HelloWorld';

export default {
  components: {
    HelloWorld
  },
    data(){
        return{
            slide: 0,

            sliding: null
        }
    },
    methods:{

    }
}
</script>


<style lang="less" scoped>

</style>