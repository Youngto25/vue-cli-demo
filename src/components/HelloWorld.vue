<template>
  <div>
    <h1>hello world</h1>
    <h2>这是组件world</h2>
    {{ $route.params.worldmsg }}
    <br>
    <button @click="doSomething">向父组件传递数据</button>
    <br>
    得到全局属性:{{ aData }}
    <hr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: '我是组件world中的数据'
    }
  },
  methods: {
    doSomething(){
      console.log('click')
      this.$emit('clicked',this.message)
    }
  },
  computed: {
    aData:function(){
      return this.$store.state.num
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
