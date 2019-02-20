<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" @click="logins()"/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { login } from '_a/user'
export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods:{
    logins(){
      login({phone:'123456'})
    }
  }
};
</script>
