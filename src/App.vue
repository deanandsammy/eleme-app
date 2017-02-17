<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
import header from './components/header/v-header.vue';

export default {
    components: {
        'v-header': header
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    .tab
      display: flex
      width: 100%
</style>
