<template>
  <div>
    App.vue
    <list />
    <router-view></router-view>
    <world @clicked="handle"></world>
    子组件被点击后的结果：{{ message }}
    <button @click="getMsg">get请求</button>
    <ol>
      <li v-for="(item, index) in getData" :key="index">{{ item.title }}</li>
    </ol>
  </div>
</template>

<script>
import List from "./components/List";
import World from "./components/HelloWorld";
import axios from "axios";
import Vue from "vue";
Vue.prototype.$http = axios;
export default {
  data() {
    return {
      getData: [],
      message: ''
    };
  },
  components: {
    list: List,
    world: World
  },
  methods: {
    getMsg() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 10
          }
        })
        .then(res => {
          this.getData = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handle(value){
      this.message = value
    }
  }
};
</script>
<style scoped></style>
