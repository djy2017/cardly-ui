<template>
  <view
    :class="customClass"
    class="intro rounded-15px bg-white px-16px pt-18px pb-24px mx-16px"
  >
    <view
      class="w-full text-18px text-[#B32C28] leading-26px mb-16px flex-column text-left"
    >
      <text class="font-700">集团介绍</text>
    </view>

    <view
      @click="go(i.path)"
      v-for="(i, index) in introList"
      :key="'into-' + (index + 1)"
      :class="index === 0 ? 'mb-24px' : ''"
      class="position-item w-full mb-10px text-justify leading-22px text-12px text-[#1a1a1a] flex flex-row items-start justify-center gap-x-10px"
    >
      <image :src="i.img" class="w-117px h-80px"></image>
      <view class="flex-1 font-400 leading-22px">
        <view class="text-14px font-700 mb-4px">
          <text class="text-[#B32C28]">{{ `0${index + 1}` }}</text>
          {{ i.title }}
        </view>
        <view>{{ i.desc }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  const introList = [
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-taoli-intro.png',
      title: '公司简介',
      desc: '桃李未来是深圳知名的教育集团，成立于2018年8月，深耕深圳教育市场。',
      path: '/pages/company-intro/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-taoli-honor.png',
      title: '企业荣誉',
      desc: '2021年3月，松鼠教育荣获南方都市报“年度最受深圳消费者信赖的教育品牌”称号。',
      path: '/pages/company-honor/index',
    },
  ]
  defineProps({
    customClass: {
      type: String,
      default: '',
    },
  })

  const go = (path: string) => {
    uni.navigateTo({
      url: path,
    })
  }
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
