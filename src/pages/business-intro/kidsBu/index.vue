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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-tx.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          style="border-bottom: 1px solid #d8d8d8"
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">桃李童学</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-tx.png"
          >
          </image>
        </view>

        <view class="text-12px font-700 leading-23px mt-15px mb-16px">
          桃李童学是桃李未来旗下素质类教育品牌，专注于培养3-16岁少儿的核心素养和综合能力。旗下包括语言艺术、书法研修、信息学竞赛、科创编程四大核心业务，旨在激发少儿学习兴趣，实现少儿表达、思维、素养、能力等多个维度的发展，培养符合新时代发展需求的综合创新型人才。
        </view>

        <view
          class="events flex flex-row items-start gap-x-10px mt-4px"
          v-for="(item, index) in data"
          :key="index"
        >
          <view class="w-82px">
            <image class="w-full mt-4px" mode="widthFix" :src="item.img">
            </image>
          </view>
          <view class="flex-1">
            <view class="text-12px font-700">
              <text class="text-[#B32C28]">{{ item.title }}</text>
            </view>
            <view class="text-12px font-400 leading-23px mt-10px text-justify">
              {{ item.content }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
  const data = [
    {
      title: '桃李童学 | 语言艺术',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-kids-1.png',
      content:
        '语言艺术致力于提高学员的语言表达综合能力，特色课程体系及丰富的呈现场景让学员全方位成长，培养孩子阳光自信、情商礼仪、表达思维等综合能力，让孩子成为一个受欢迎的人。',
    },
    {
      title: '桃李童学 | 书法研修',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-kids-2.png',

      content:
        '书法研修结合了现代教育理念和传统书法艺术的精华，基于多年的教学经验和研究成果编写，旨在为学生提供全面、系统、实用的书法教育。课程内容涵盖硬笔和毛笔书法的基础知识和技能、书法艺术的审美和创作、传统文化的学习和理解等。',
    },
    {
      title: '桃李童学 | 信息学竞赛',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-kids-3.png',

      content:
        '信息学竞赛以竞赛基础C++语言和算法学习为主，秉持着“做有效的编程教育”的教学理念，培养学员的计算思维，获得切实的编程能力，成为未来的创造者。',
    },
    {
      title: '桃李童学 | 科创编程',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-kids-4.png',

      content:
        '科创编程以赛促学，注重工程学的综合交叉学科，激发学生学习兴趣、培养学生数理等综合能力，打造科技特长。',
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
