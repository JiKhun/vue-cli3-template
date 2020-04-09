<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Event from '@/libs/event'
export default {
  mounted(){
    setTimeout(() => {
      Event.trigger('test')
    }, 100);
  },
}
</script>
<style lang="less">
.about{
  color: #333
}
</style>

