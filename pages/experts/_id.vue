<template>
  <section>
    <!-- <p>{{detail}}</p> -->
    <!-- <p>{{report}}</p> -->
    <!-- <p>{{attribute}}</p> -->

    <!-- 个人信息 style-2-->
    <div class="expert-info" :class="{'style-1': query.tpl == 1, 'style-2': query.tpl == 2}">
      <div class="website-container">
        <el-row>
          <!-- 模板一二公用 -->
          <el-col :span="4" v-if="query.tpl == 1 || query.tpl == 3">
            <div class="img-box">
              <img :src="detail.imgUrl | imgCdn" alt="">
            </div>

            <button type="button" class="collection btn-line pull-none" :class="{liked: detail.isFavorite === 1}" name="button" v-if="query.tpl == 1">
              <i class="start"></i>
              <span class="favorite-text" v-if="detail.isFavorite === 1">收藏成功</span>
              <span class="favorite-text" v-else>收藏专家</span>
              <small class="small">Add expert to your favorite</small>
            </button>
          </el-col>

          <!-- 模板一 -->
          <el-col :span="20" v-if="query.tpl == 1">
            <el-row class="d-table info-wrap">
              <el-col :span="10" class="d-table-cell pull-none">
                <dl class="info">
                  <dt>
                    <h3 class="clearfix">
                      <span class="name">{{detail.expertName}}</span>
                    </h3>
                  </dt>
                  <dd class="font-md">{{detail.positionName}} | {{detail.maxSchool}}</dd>
                  <dd>
                    <span class="mr-sm" v-if="detail.yearsOfWorking">工作经验： {{detail.yearsOfWorking}}年</span>
                    <span v-if="detail.city">城市：<address class="address">{{detail.city}}</address></span>
                  </dd>
                </dl>
              </el-col>

              <el-col  class="text-right d-table-cell pull-none">
                <button type="button" name="button" class="btn btn-line">我要咨询专家 <small class="small">I want to consult an expert</small></button>
                <button type="button" name="button" class="btn btn-line">邀请专家调研企业 <small class="small">Apply for expert's research</small></button>
                <button type="button" name="button" class="btn btn-line">我要采访专家 <small class="small">I want to interview an expert</small></button>
              </el-col>
            </el-row>

            <el-row>
              <el-col class="introduction">
                <p>专家介绍:</p>
                <p class="introduction-content">{{detail.expertIntroduces}}</p>
              </el-col>
            </el-row>
          </el-col>

          <!-- 模板二 -->
          <el-col :span="24" v-if="query.tpl == 2">
            <el-row>
              <el-col :span="24" class="d-table info-wrap">
                <div class="img-box d-table-cell">
                  <img src="" alt="">
                </div>

                <dl class="info d-table-cell pl-sm">
                  <dt>
                    <h3 class="clearfix"> <span class="name">{{detail.expertName}}</span> <address ng-if="detail.city" class="address">{{detail.city}}</address></h3></dt>
                  <dd class="font-md">{{detail.positionName}} | {{detail.maxSchool}}</dd>
                  <dd>
                    <span class="mr-sm" v-if="detail.yearsOfWorking">工作经验： {{detail.yearsOfWorking}}年</span>
                    <span v-if="detail.city">城市：<address class="address">{{detail.city}}</address></span>
                  </dd>
                </dl>

                <div class="d-table-cell text-right">
                  <button type="button" class="collection btn-line" name="button" :class="{liked: detail.isFavorite === 1}>
                    <i class="start"></i>
                    <span class="favorite-text">收藏专家</span>
                    <small class="small">Add expert to your favorite</small>
                  </button>
                </div>
              </el-col>
            </el-row>

            <el-row class="introduction">
              <el-col :span="20">
                <p>专家介绍:</p>
                <p class="introduction-content">{{detail.expertIntroduces}}</p>

              </el-col>
              <el-col :span="4" class="text-right">
                <button type="button" name="button" class="btn btn-line">我要咨询专家 <small class="small">I want to consult an expert</small></button>
                <button type="button" name="button" class="btn btn-line">邀请专家调研企业 <small class="small">Apply for expert's research</small></button>
                <button type="button" name="button" class="btn btn-line">我要采访专家 <small class="small">I want to interview an expert</small></button>
              </el-col>
            </el-row>
          </el-col>

          <!-- 模板三   -->
          <el-col :span="16" v-if="query.tpl == 3">
            <dl class="info">
              <dt><h3 class="clearfix"> <span class="name">{{detail.expertName}}</span> <address ng-if="detail.city" class="address">{{detail.city}}</address></h3></dt>
              <dd>{{detail.positionName}} | {{detail.maxSchool}}</dd>
              <!-- <dd class="desc">如何进行矿厂设计，选择自动化设备及系统的开发、设计、安装、调试，提高技术生产管理水平，提升产量。</dd> -->
            </dl>
          </el-col>

          <el-col :span="4" class="actions" v-if="query.tpl==3">
            <button type="button" class="collection btn-line" name="button" :class="{liked: detail.isFavorite === 1}>
              <i class="start"></i>
              <span class="favorite-text">收藏专家</span>
              <small class="small">Add expert to your favorite</small>
            </button>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 专家介绍 -->
    <div class="expert-introduce" v-if="query.tpl == 3">
      <div class="introduce website-container style-box">
        <header>
            <h3 class="expert-header">专家介绍</h3>
        </header>

        <div class="content">
            <p class="desc">{{ detail.expertIntroduces}}</p>

            <p class="text-center actions">
              <button type="button" name="button" class="btn btn-line">我要咨询专家 <small class="small">I want to consult an expert</small></button>
              <button type="button" name="button" class="btn btn-line">邀请专家调研企业 <small class="small">Apply for expert's research</small></button>
              <button type="button" name="button" class="btn btn-line">我要采访专家 <small class="small">I want to interview an expert</small></button>
            </p>
        </div>
      </div>
    </div>

    <!-- 专家详情 -->
    <div class="expert-detail" :class="{'hasBg': query.tpl == 3}">
      <div class="website-container">
        <header class="text-center">
          <h3 class="style-header"> <span class="title">专家详情</span> <small class="small">Expert Details</small></h3>
        </header>

        <div class="detail">
          <p class="text-indent">{{attribute.desc}}</p>
        </div>
      </div>
    </div>

    <div class="pic">
      <img src="~assets/img/bg-expertdetail-middle.jpg" alt="">
    </div>

    <!-- 企业研报 -->
    <div class="research-report">
      <div class="website-container">
        <header class="text-center">
          <h3 class="style-header"> <span class="title">企业研报</span> <small class="small">Enterprise Research Report</small></h3>
        </header>

        <div class="content">
          <ul class="report-list">
            <li v-for="(item, index) in report" :key="index">
              <div class="img-box">
                <img :src="item.report | imgCdn" :alt="item.title" :title="item.title">
              </div>

              <dl class="report-content">
                <dt class="title text-overflow" :title="item.title">
                    <nuxt-link :to="{path: '/companyResearch/item.id'}">{{item.title}}<time class="time">2017-03-16</time></nuxt-link>
                </dt>
                <dd class="desc">{{item.report}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'expret-id',

    data () {
      return {
        query: this.$route.query,
        params: this.$route.params
      }
    },

    async asyncData ({ params, query, error }) {
      var expertId = params.id
      return Promise.all([
        axios.get(`/webapi/v2/detailedExpertInfo/${expertId}`).then((data) => data.data.rows),
        axios.get(`/webapi/v2/expertAttribute/${expertId}`).then((data) => data.data),
        axios.get(`/webapi/v2/researchReport/${expertId}`).then((data) => data.data.rows)
      ]).then((data) => {
        return {
          detail: data[0],
          attribute: data[1],
          report: data[2]
        }
      }).catch(error => console.log(error))
    }
  }
</script>

<style lang="scss" scoped>
  .info-wrap{
    border-bottom: 1px solid #6e6e6e;
    padding-bottom: 12px;
  }
  .img-box{
    img{
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
   .favorite-text{
       display: inline-block;
       vertical-align: middle;
   }

  .introduction{
    padding: 16px 0;
    line-height: 26px;
  }

  .introduction-content{
    height: 80px;
    overflow: hidden;
  }
  .btn{
    width: 170px;
    text-align: center;
    padding: 2px 8px;
    margin-left: 15px;
    color: #fff;
    border-color: #fff;
    &:first-child{
      margin-left: 0;
    }

    &:hover{
      color: #fff;
      border-color: #2788e7;
    }
    .small{
      display: block;
    }
  }

  .expert-info{
    padding:40px 0;
    background: url('~assets/img/bg-expertdetail.jpg');
    min-height: 240px;
    color: #fff;

    .img-box{
      height: 160px;
      width: 160px;
      border-radius: 100%;
      background-color: pink;
    }


    .info{
      // padding-top: 28px;
      dt{
        font-size: 24px;
        margin-bottom: 16px;
      }

      .name{
        display: inline-block;
        margin-right: 20px;
      }

      .address{
        display: inline-block;
        font-style: normal;
        font-size: 14px;
        .location{
          margin-right: 8px;
          vertical-align: top;
        }
      }
      dd{
        line-height: 28px;
      }
    }

    .actions{
      padding-top: 65px;
    }
    .collection{
      text-align: center;
      cursor: pointer;
      border-radius: 2px;
      padding: 5px 8px;
      &.btn-line{
       border-color: #fff;
       &:hover{
          border-color: #2788e8;
        }
       }

      .start{
        display: inline-block;
        vertical-align: middle;
        width: 15px;
        height: 14px;
        margin-right:10px;
        background-image: url('~assets/img/start-white.png');
      }

      small{
        display: block;
      }
    }
  }

  // 专家介绍
  .expert-introduce{
    padding: 95px 0;
    .expert-header{
      font-size: 18px;
      text-align: center;
      font-weight: normal;
      color: #3e3e3e;
    }

    .btn-line{
      color: #2788e8;
        &:hover{
           color: #fff;
        }
    }


    .content{
      padding: 0 78px;
      color: #6e6e6e;
      position: relative;
    }
    .introduce{
      position: relative;
    }
    .introduce::before,.introduce::after{
      content: "";
      position: absolute;
      width: 24px;
      height: 18px;
    }
    .introduce::before{
      background: url('~assets/img/quotes-left.png') no-repeat;
      left: 0;
      top: 0;
    }
    .introduce::after{
      background: url('~assets/img/quotes-right.png') no-repeat;
      right: 0;
      bottom: 0;
    }

    .desc{
      line-height: 26px;
    }

    .actions{
      margin-top: 35px;
    }
  }

  // 专家详情
  .expert-detail{
    padding-top: 90px;
    min-height: 550px;

    &.hasBg{
      background: url('~assets/img/bg-expertinfo.jpg') no-repeat top center;
      .detail{
        background-color: #fff;
      }
    }

    .detail{
      margin-top: 35px;
      color: #6e6e6e;
      line-height: 26px;
      background-color: #f5f5f5;
      padding: 75px 60px;
      min-height: 260px;
    }
  }

  // 图片
  .pic{
    height:337px;

    img{
      height: 100%;
      width: 100%;
    }
  }

  // 研报列表
  .research-report{
    padding: 90px 0;
  }
  .report-list{
    margin-top: 35px;
    li{
      width: 100%;
      display: table;
      table-layout: fixed;
      color: #6e6e6e;
    }


    .img-box{
      vertical-align: middle;
      width: 120px;
      height: 120px;
      border-radius: 100%;
      border:1px solid #dedede;
      display: table-cell;


    }

    .report-content{
      display: table-cell;
      vertical-align: middle;
      padding-left: 20px;
    }

    .title{
      font-size: 18px;

      padding-right: 95px;
      position: relative;

      .time{
        position: absolute;
        right: 0;
        top: 2px;
        font-size: 14px;
      }
    }

    .desc{
      line-height: 26px;
      padding-top: 15px;
    }

    li{
      padding: 25px 0;
      border-bottom:1px solid #dedede;
    }
    li:first-child{
      border-top: 1px solid #dedede;
    }
  }

  // 模板二
  .style-1{
    .collection {
      margin-top: 20px;
    }
  }

  .style-2{
    .btn{
      margin: 0 0 20px;
    }
  }
  // 收藏成功
     .collection.liked{
         border-color: #2788e8;
         background-color: #2788e8;
     }
</style>
