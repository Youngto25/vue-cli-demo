<template>
  <div>
    <h1>hello earth</h1>
    <h2>这是组件earch</h2>
    {{ $route.params.earthmsg }}
    获得全局属性：{{aCount}}
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    aCount:function(){
      return this.$store.state.num
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
