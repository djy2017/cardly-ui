<template>
  <view
    :class="customClass"
    class="intro rounded-15px bg-white px-16px pt-18px pb-24px mx-16px"
  >
    <view
      class="w-full name text-24px text-[#1a1a1a] leading-36px mb-16px flex-column text-center"
    >
      <text class="font-700">{{ name }}</text>
      <text class="en-name text-[#BC2B27] text-12px leading-[18px]">{{
        enName
      }}</text>
    </view>

    <view
      v-for="(i, index) in positionList"
      class="position-item w-full flex-row flex-wrap justify-center mb-5px text-center text-13px"
      :class="{
        gray: index !== 0,
      }"
    >
      <text>{{ i.company }}&nbsp;&nbsp;{{ i.position }}</text>
    </view>

    <view class="w-full bg-[#BC2B27] h-1px mt-20px mb-22px"></view>

    <view class="contact flex-row itemx-center justify-center gap-x-16px">
      <view
        class="w-72px h-26px rounded-26px text-center leading-26px text-white bg-[#BC2B27] text-12px flex-row items-center gap-x-4px justify-center"
      >
        <image class="w-12px h-12px" src="@/static/icon/icon-phone.png"></image>
        <text>电话</text>
      </view>
      <view
        class="w-72px h-26px rounded-26px text-center leading-26px text-white bg-[#BC2B27] text-12px flex-row items-center gap-x-4px justify-center"
      >
        <image class="w-12px h-12px" src="@/static/icon/icon-email.png"></image>
        <text>邮箱</text>
      </view>
      <view
        class="w-72px h-26px rounded-26px text-center leading-26px text-white bg-[#BC2B27] text-12px flex-row items-center gap-x-4px justify-center"
      >
        <image
          class="w-12px h-12px"
          src="@/static/icon/icon-wechat.png"
        ></image>
        <text>微信</text>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
      default: '姓名',
    },
    enName: {
      type: String,
      default: 'Name',
    },
    positionList: {
      type: Array,
      default: () => [],
    },
    customClass: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
  })
</script>
<style scoped lang="scss">
  .intro {
    .position-item {
      &.gray {
        color: rgba(#1a1a1a, 0.5);
      }
    }
  }
</style>
