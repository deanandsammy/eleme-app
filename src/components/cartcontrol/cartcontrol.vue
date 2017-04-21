<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">-</div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">+</div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    props: {
      food: {
        type: Object
      }
    },

    created () {

    },

    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }

        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },

      decreaseCart () {
        if (!event._constructed) {
          return
        }

        if (this.food.count) {
            this.food.count--
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      width: 15px
      height: 15px
      line-height: 15px
      font-size: 20px
      color: #fff
      text-align: center
      background-color: rgb(0, 160, 220)
      border-radius: 10px
    .cart-count
      display: inline-block
      width: 15px
      padding: 1px 3px 0
      line-height: 15px
      vertical-align: top
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
</style>
