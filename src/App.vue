<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.ShowFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
/*import {reqFootTypes} from './api/index'*/
export default {
/*    async mounted(){
      const result = await reqFootTypes();
      console.log(result);
    },*/
//一种获取的方法
 /*   mounted(){
      this.$store.dispatch('getAddress')
    },*/
 //另一种获取的方法
    mounted(){
      this.getAddress()
    },
    methods:{
      ...mapActions(['getAddress'])
    },
    components:{
      FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
