<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0">-</div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">+</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },

    created () {
      console.log(this.food)
    },

    methods: {
      addCart () {

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      width: 20px
      height: 20px
      line-height: 20px
      font-size: 20px
      color: #fff
      text-align: center
      background-color: rgb(0, 160, 220)
      border-radius: 10px
    .cart-count
      display: inline-block
</style>
