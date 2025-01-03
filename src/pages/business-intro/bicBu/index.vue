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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-bic.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">湾区国际书院</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-bic.png"
          >
          </image>
        </view>

        <view class="text-12px font-700 leading-23px mt-15px">
          湾区国际书院（The Bay International
          College，简称BIC），是桃李未来教育集团旗下首个高标准英系国际学校业务。学校致力于为有海外名校升学意愿的孩子提供更高效的升学路径与更出色的学习体验，实现孩子的名校升学梦想。
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
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-bic-1.png"
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
      title: '学校品质更出众',
      content:
        '两大知名教育品牌强强联合，桃李未来与牛剑教育均深耕大湾区教育市场多年，教育初心历久弥新，师资水平出类拔萃，教学成绩有目共睹，得到了社会各界的广泛信赖。两大品牌所能联动的优质教育资源、专家学者资源、知名企业资源与学生实践资源，将全面赋能学生全方面成长。',
    },
    {
      title: '学业进步更高效',
      content:
        '湾区国际书院采用深圳头部国际学校多年使用的学生在校行为实时反馈系统，该系统可以实时记录学生的在校学习轨迹，时时关注学生在校成长全过程。更配备有代表业内最高水平的电子图书馆、学科真题库与在线学业水平提高系统，全面保障学生取得极具竞争力的学业成果。',
    },
    {
      title: '学生发展更全面',
      content:
        '湾区国际书院教师采用全英文授课（中文科目外），语言类课程设置丰富且实践性强。 要求学生在所有沟通表达场景中使用英语进行交流，在四年的学习生活中实现英语能力潜移默化掌握，为之后升入国际知名高校做好语言铺垫。',
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
