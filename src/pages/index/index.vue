<template>
  <view class="content">
    <view class="text-area">
      <text class="title mt-20px hidden">{{ title }}</text>
    </view>
    <button style="opacity: 0" @click="goMyCard">我的名片</button>
  </view>
</template>

<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app'
  import { ref } from 'vue'
  const title = ref('桃李未来')

  // 进入首页后自动重定向到我的名片页

  onLoad(() => {
    uni.redirectTo({
      url: '/pages/cardly/index',
    })
  })
  const goMyCard = () => {
    uni.navigateTo({
      url: '/pages/cardly/index',
    })
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
