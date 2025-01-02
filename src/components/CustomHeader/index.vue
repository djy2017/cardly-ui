<template>
  <view class="custom-header">
    <view class="head-wrapper">
      <view
        :style="{
          height: `${state.system.statusBarHeight}px`,
          background: statusBarBg,
        }"
      />
      <view class="content flex items-center" :style="{ marginLeft: '24rpx' }">
        <view
          class="icon-back flex items-center"
          v-if="hasBack"
          @click="backFn"
        >
          <image
            v-if="!whiteBackIcon"
            class="img"
            src="@/static/icon/icon_back.png"
          />
          <image v-else class="img" src="@/static/icon/icon_back_white.png" />
        </view>
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { onReady } from '@dcloudio/uni-app'
  import { ref, reactive } from 'vue'
  const state = reactive({
    system: {} as any,
  })

  defineProps({
    hasBack: { type: Boolean, default: true },
    statusBarBg: { type: String, default: 'transparent' },
    whiteBackIcon: { type: Boolean, default: false },
  })

  const getSystemInfo = () => {
    const system = uni.getStorageSync('system') || uni.getSystemInfoSync()

    // const menu = uni.getMenuButtonBoundingClientRect()
    state.system = system
    // state.menu = menu
  }

  const backFn = () => {
    uni.navigateBack()
  }

  onReady(() => {
    getSystemInfo()
  })
</script>

<style scoped lang="scss">
  .head-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
  }

  .content {
    height: 44px;
    .icon-back {
      height: 44px;
      z-index: 99;
      position: relative;
      .img {
        width: 36rpx;
        height: 36rpx;
      }
    }
  }
</style>
