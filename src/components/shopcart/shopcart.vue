<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart">C</i>
          </div>
        </div>
        <div class="price">12</div>
        <div class="desc"></div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      font-size: 0
      background-color: #141d27
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          width: 56px
          height: 56px
          margin: 0 12px
          padding: 6px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background-color: #141d27
          .logo
            width: 100%
            height: 100%
            text-align: center
            background-color: #2b343c
            border-radius: 50%
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          padding-right: 12px
          line-height: 24px
          font-size: 16px
          font-weight: 700
          border-right: 1px solid rgba(255,255,255,.1)
          box-sizing: border-box
          /*display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          border-right: 1px solid #rgba(255, 255, 255, .1)
          box-sizing: border-box
          font-size: 16px
          font-weight: 700*/
        .desc
          display: inline-block
      .content-right
        flex: 0 0 105px
        width: 105px
</style>
