<template>
  <div class="primarySurface">
     <login @routing ="routing"></login>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods:{
   /**
     * 登录页面跳转
     * @author wx
     * @creation  2019.4.24
     */
    routing:function() {
      
    }
  }
};
</script>
<style lang="scss">
  .primarySurface {
       background: url('../../plugins/img/back.png')no-repeat;
       overflow: hidden;
       height: 100%;
       background-size:cover;
   }
</style>
