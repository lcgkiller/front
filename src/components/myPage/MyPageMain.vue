<template>
  <main class="contents">
    <div class="grid">
      <member-info></member-info>
      <product></product>
    </div>
  </main>
</template>

<script>
import MemberInfo from './memberInfo/MemberInfo.vue'
import Product from './product/Product.vue'
import Modal from '../Modal.vue'

export default {
  components: {
    MemberInfo,
    Product,
    Modal
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../../scss/modules/base';
@import '../../scss/modules/mixin';
.mypage-user-info{
  height: $leading * 10;
  margin-bottom: $leading * 2;
  .user-profile{
    width: $leading * 9;
    line-height: $leading-scale * 9;
    display: block;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: pink;
    margin: 0 auto;
    margin-top: $leading /2;
  }
  .user-info-box{
    padding-top: $leading;
    .user-id{
      font-size: 2.6rem;
      height: $leading * 2;
      margin-right: 20px;
      box-sizing: border-box;
    }
    .count-box{
      clear: both;
      padding-top: $leading;
      >span{
        margin-right: 10px;
      }
      span{
        display: inline-block;
        min-width: 45px;
      }
    }
    .user-msg{
      padding-top: $leading;
    }
  }    
}
.add-goods-box{
  color: #999;
  padding-top: $leading * 3;
  i{
    height: $leading * 3;
  }
  p{
    height: $leading;
  }
}
</style>