<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'Helloworld', params: { worldmsg: '你好世界' } }">Hello World</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Helloearch', params: { earthmsg: '你好地球' } }">Hello Earth</router-link>
      </li>
    </ul>
    {{getNum}}
    <hr />
  </div>
</template>
<script>
export default {
  computed: {
    getNum: function() {
      return this.$store.state.num;
    }
  }
};
</script>
