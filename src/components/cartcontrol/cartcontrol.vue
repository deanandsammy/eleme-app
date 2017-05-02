<template>
  <div class="cartcontrol">
    <transition name="my-transition">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">-</div>
    </transition>
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

    },

    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }

        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
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
    .my-transition-enter-active, .my-transition-leave-active
      transition: all 350ms linear
    .my-transition-enter, .my-transition-leave-active
      opacity: 0
      transform: translate3D(25px, 0, 0)
    .cart-decrease, .cart-add
      display: inline-block
      width: 20px
      height: 20px
      line-height: 20px
      font-size: 20px
      color: #fff
      text-align: center
      vertical-align: middle
      background-color: rgb(0, 160, 220)
      border-radius: 10px
    .cart-count
      display: inline-block
      width: 15px
      padding: 1px 3px 0
      line-height: 15px
      vertical-align: middle
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
</style>
