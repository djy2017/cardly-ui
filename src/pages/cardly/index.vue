<template>
  <view class="page">
    <CustomHeader
      :hasBack="true"
      :statusBarBg="'transparent'"
      :whiteBackIcon="false"
    >
      <view class="w-full t-center"> 我的名片 </view>
    </CustomHeader>

    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="content text-20px color-red">我的名片</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import CustomHeader from '@/components/CustomHeader/index.vue'

  const title = ref('Hello')
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    min-height: 100vh;
  }
</style>
