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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-company-intro-banner.png"
      />
      <view
        class="intro rounded-15px bg-white px-16px pt-24px pb-24px mx-16px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px mb-16px flex-column text-left"
        >
          <text class="font-700">企业荣誉</text>
        </view>

        <view class="events" v-for="yearData in data" :key="yearData.year">
          <view class="text-12px font-700 mt-16px">
            <text class="text-[#B32C28]">{{ yearData.year }}</text>
          </view>

          <template
            v-for="monthData in yearData.monthEvents"
            :key="monthData.month"
          >
            <view class="text-12px font-400 mt-4px mb-4px leading-23px">
              {{ monthData.month }}
            </view>
            <view
              v-for="(event, index) in monthData.events"
              :key="monthData.month + '-' + index"
              class="text-12px font-400 leading-23px"
            >
              {{ event.content }}
            </view>
          </template>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
  const data = [
    {
      year: '2024年',
      monthEvents: [
        {
          month: '10月',
          events: [
            {
              content:
                '桃李未来化学培优集训队学员在第38届中国化学奥林匹克（初赛）中，取得11省一、其中2人入选省队的骄人佳绩。',
            },
            {
              content:
                '桃李未来物理培优集训队学员在第41届全国中学生物理竞赛（决赛）中，取得11个省一，2枚金牌，1人入选国集的骄人成绩。',
            },
          ],
        },
        {
          month: '8月',
          events: [
            {
              content:
                '桃李未来凭借优秀的教育品质、积极的社会影响力以及行业领先优势，荣获晶报“行业先锋奖”。',
            },
            {
              content:
                '桃李童学旗下业务科创编程学员在Botball国际教育机器人大赛·国际大会中16人荣获金奖，3人勇夺一等奖。',
            },
          ],
        },
        {
          month: '6月',
          events: [
            {
              content:
                '深圳市福田区总工会、深圳市职工发展基金会授予桃李未来“爱心企业”称号。',
            },
            {
              content:
                '中共深圳桃李未来科技有限公司支部委员会荣获“第四届福田区非公党委千项实事综合评议优秀项目”。',
            },
          ],
        },
        {
          month: '3月',
          events: [
            {
              content:
                '桃李家育和桃李未来复读学校荣登南方都市报发布的“深圳教育年度口碑榜”。',
            },
          ],
        },
      ],
    },
    {
      year: '2023年',
      monthEvents: [
        {
          month: '12月',
          events: [
            {
              content:
                'TaoLiChinese荣获谷歌商店2023年度“最佳自我提升App”荣誉入围奖。',
            },
            {
              content:
                '由松鼠志愿服务队(现桃李志愿服务队)参与举办的“幸福福田阳光少年”公益项目荣获福田区“年度十大志愿服务项目”。',
            },
          ],
        },
        {
          month: '11月',
          events: [
            {
              content:
                '桃李童学信息学竞赛学员在CSP-J/S复赛中创下佳绩，其中CSP-J组33人参赛，满分1人，300分及以上8人，一等奖16人，一等率48%；CSP-S组20人参赛，200分及以上2人(均为全国六年级选手前五)一等奖5人，二等奖15人，一等率 25%。',
            },
            {
              content:
                '桃李未来数学培优集训队连续两年指导深圳实验初中学生获得IMMC国际数学建模挑战赛特等奖，并且受邀参加香港大学的最终辩论。',
            },
          ],
        },
        {
          month: '9月',
          events: [
            {
              content:
                '桃李未来物理培优集训队学员参加全国高中物理联赛，3人获得省一等奖，其中1人入选省队，并于10月在决赛中取得金牌。',
            },
            {
              content:
                '桃李未来数学培优集训队学员参加全国高中数学联赛，6人获得省一等奖，其中1人入选省队，并于12月在决赛中取得银牌。',
            },
            {
              content:
                '桃李未来化学培优集训队学员参加全国高中化学联赛，8人获得省一等奖，其中1人入选省队，并在决赛中取得银牌。',
            },
          ],
        },
        {
          month: '8月',
          events: [
            {
              content:
                '桃李童学科创学员在教育部白名单赛事全国青少年通信科技创新大赛中获得全国一等奖、全国青少年人工智能创新挑战赛获全国银奖',
            },
          ],
        },
        {
          month: '5月',
          events: [
            {
              content:
                '桃李未来荣获“福田区五四红旗团支部”“福田青年五四奖章集 体”荣誉称号。',
            },
          ],
        },
        {
          month: '4月',
          events: [
            {
              content: '桃李未来成为深圳市教育培训行业协会副会长单位。',
            },
          ],
        },
      ],
    },
    {
      year: '2022年',
      monthEvents: [
        {
          month: '11月',
          events: [
            {
              content:
                '桃李未来数学培优集训队指导深圳实验初中学生获得IMMC国际数学建模挑战赛特等奖，并且受邀参加香港大学的最终辩论。',
            },
          ],
        },
        {
          month: '10月',
          events: [
            {
              content:
                '桃李未来化学培优集训队学员参加全国高中化学联赛，2人获得省一等奖，其中1人入选省队，并于12月在决赛中取得银牌。',
            },
          ],
        },
        {
          month: '5月',
          events: [
            {
              content: '桃李未来成为全国首个数字人民币教培行业试点单位。',
            },
          ],
        },
      ],
    },
    {
      year: '2021年',
      monthEvents: [
        {
          month: '3月',
          events: [
            {
              content:
                '松鼠教育荣获南方都市报“年度最受深圳消费者信赖的教育品牌”称号。',
            },
          ],
        },
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
