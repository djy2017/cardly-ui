<template>
  <view class="page pb-50px">
    <CustomHeader
      :hasBack="true"
      :statusBarBg="'transparent'"
      :whiteBackIcon="true"
    >
      <view class="w-full t-center text-white"> </view>
    </CustomHeader>

    <view class="card-wrap w-full h-full">
      <image
        class="avatar w-full h-178px"
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-jy.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">桃李家育</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-jy.png"
          >
          </image>
        </view>

        <view
          class="text-12px font-700 leading-23px mt-15px mb-10px text-justify"
        >
          桃李家育是桃李未来旗下全新的家庭教育成长品牌，由在家庭教育领域研究了
          10
          多年的专家团队组成，独立自主研发了针对家长的“生命成长体系”课程，帮助
          0-18
          岁孩子的家长，进行不同阶段针对性的学习，掌握科学的家庭教育方法，提高家庭教育的能力。
        </view>

        <view
          class="events flex flex-row items-center gap-x-10px"
          v-for="(item, index) in data"
          :key="index"
        >
          <view class="text-12px font-700">
            <text class="text-[#B32C28]">{{ item.title }}</text>
          </view>
          <view class="text-12px font-400 leading-23px text-justify">
            {{ item.content }}
          </view>
        </view>

        <view class="mt-24px">
          <image
            class="w-140px h-35px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-jy-1.png"
          />
        </view>

        <view class="text-12px font-400 leading-23px text-justify mt-16px">
          桃李家育旗下设立“桃李儿童专注力中心”，依托心理学、脑科学等领域前沿成果，结合国内外主流训练方案，为4-12岁孩子提供全方位的专注力训练。以“学习更轻松，家长更放松”为宗旨，帮助每一个孩子提升专注力，赋能每一个家庭智慧成长。
        </view>

        <view class="flex items-center">
          <image
            mode="widthFix"
            class="w-310px h-385px mx-auto"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-jy-2.png"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
  const data = [
    {
      title: '家长服务',
      content: '父母成长课堂、家长读书会',
    },
    {
      title: '学生服务',
      content: '测评服务、课程服务',
    },
    {
      title: '社会服务',
      content: '社企合作',
    },
    {
      title: '赋能服务',
      content: '家庭教育指导师、心理咨询师培训',
    },
  ]
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #bc2b27;
    min-height: 100vh;
  }
</style>
