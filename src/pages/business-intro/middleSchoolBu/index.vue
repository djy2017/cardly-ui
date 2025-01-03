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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-sz.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left h-64px"
        >
          <text class="font-700 mt-10px">桃李未来复读学校</text>
        </view>

        <view class="mt-16px">
          <image
            class="w-120px h-34px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-py.png"
          >
          </image>
        </view>
        <view class="text-12px font-700 leading-23px text-justify">
          致力于培养学生的思维，强化学习能力，通过优秀教学服务、课程研发服务、学业规划服务、集训队建立专业系统的培优体系，帮助学生获得竞争优势，收获从优秀到卓越的全面发展。
        </view>

        <view class="mt-16px">
          <image
            class="w-120px h-34px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-1t1.png"
          >
          </image>
        </view>
        <view class="text-12px font-700 leading-23px text-justify">
          为满足个性化定制的教育需求，秉持“提供服务与温度并存的定制化教学“理念，基于“积木玩法”产品逻辑，从课堂内容、学习时间、学习速度、课后服务四个维度自由定制课程内容，做到真正的因材施教！
        </view>

        <view class="flex items-center mt-8px">
          <image
            mode="widthFix"
            class="w-310px h-178px mx-auto"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-sz-1.png"
          />
        </view>

        <view class="text-12px font-400 leading-23px text-justify mt-18px">
          学校创新的“首席老师+名校主讲老师”综合教学模式，最大程度地发挥了高考实战名师擎旗掌舵定向、传道授业解惑、托底把关护航的核心作用，同时最大程度激发了毕业于科大、复交等C9名校的主讲老师的专业功底素养、超强教练能力和拼搏创新活力。首席老师和主讲老师亦师亦友、并肩前行、荣辱与共，共同打造了桃李未来学校全天候教学辅导体系，构建了一个专业高效、学风优良、成效显著的教学生态系统。
          <br />
          学校坐落在美丽的大鹏新区玫瑰小镇，临山近海，风景如画，占地面积共2万多平方米；校内布局科学，配套完善，是一所为学生提供一站式学习、生活服务的园林式学府。
        </view>

        <view class="text-12px font-700 mt-16px mb-10px">
          <text class="text-[#B32C28]">部分荣誉：</text>
        </view>
        <view
          class="events flex flex-column mb-10px"
          v-for="(item, index) in data"
          :key="index"
        >
          <view class="text-12px font-700 mb-4px">
            <text class="">{{ item.title }}</text>
          </view>
          <view
            v-for="(i, index) in item.content"
            :key="'c-' + index"
            class="text-12px font-400 leading-23px text-justify"
          >
            {{ i }}
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
      title: '2023年9月',
      content: [
        '桃李物理集训队学员参加全国高中物理联赛，3人获得省一等奖，其中1人入选省队，并在决赛中取得金牌。',
        '桃李数学集训队学员参加全国高中数学联赛，6人获得省 一等奖，其中1人入选省队，并在决赛中取得银牌。',
        '桃李化学集训队学员参加全国高中化学联赛，8人获得省一等奖，其中1人入选省队，并在决赛中取得银牌。',
      ],
    },
    {
      title: '2024年10月',
      content: [
        '桃李化学集训队学员在第38届中国化学奥林匹克（初赛）中，取得11省一、其中2人入选省队的骄人佳绩。',
        '桃李物理集训队学员在第41届全国中学生物理竞赛（决赛）中，取得11个省一，2枚金牌，1人入选国集的骄人成绩。',
      ],
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
