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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-zw.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">桃李中文</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-zw.png"
          >
          </image>
        </view>

        <view class="text-12px font-700 leading-23px mt-15px">
          桃李中文于2021年8月成立，专注于数字教育技术的创新与应用，致力于为全球中文学习者提供全面、多元的中文教育服务，是一个涵盖HSK备考、来华留学、全球就业、教育数字化系统等领域的泛中文生态平台。
        </view>

        <view class="events" v-for="(item, index) in data" :key="index">
          <view class="text-12px font-700 mt-16px">
            <text class="text-[#B32C28]">{{ item.title }}</text>
          </view>
          <view class="text-12px font-400 leading-23px mt-10px">
            {{ item.content }}
          </view>
        </view>

        <view class="w-full">
          <image
            class="w-full h-188px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-zw-1.png"
          >
          </image>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
  const data = [
    {
      title: 'TaoLi APP',
      content:
        'TaoLi APP基于HSK考试大纲，提供中文在线精品课程、测评练习模拟考、精讲精练、趣味课程、口语课、书写课和直播课。用户量达150w+，遍及160多个国家和地区，其中80%以上来自“一带一路”沿线国家。',
    },
    {
      title: 'HSK考试',
      content:
        '桃李未来获教育部中外语言交流合作中心授权，设立考点，实施中文水平考试 HSK、中文水平考试HSK  (口语)、商务中文考试BCT、中小学生中文考试YCT，同时提供直播课、模拟考等相关业务。',
    },
    {
      title: '来华留学',
      content:
        '基于APP 海量用户，通过精细化运营，对用户分层，筛选出高潜留学用户，辅导他们申请国内高校留学。',
    },
    {
      title: '中文学习内容输出',
      content: '与学习机系统厂商合作，为海外客户提供定制化的学习内容。',
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
