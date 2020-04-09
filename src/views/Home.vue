<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" @click="logins()"/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from './About'
import { login } from '_a/user'
import Event from '@/libs/event'
export default {
  name: "home",
  components: {
    About
  },
  mounted(){
    Event.listen('test',()=>{
      console.log(1)
    })
  },
  methods:{
    logins(){
      login({phone:'123456'})
    }
  }
};
</script>
