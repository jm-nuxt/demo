<template lang="html">
  <section>
    <!-- 个人信息 style-2-->
    <div class="expert-info" :class="{'style-1': query.tpl == 1, 'style-2': query.tpl == 2}">
      <div class="website-container">
        <el-row>
          <!-- 模板一二公用 -->
          <el-col :span="4" v-if="query.tpl == 1 || query.tpl == 3">
            <div class="img-box">
              <img :src="detail.imgUrl | imgCdn" alt="专家头像" :title="detail.expertName">
            </div>

            <button type="button"
                    class="collection btn-line pull-none"
                    :class="{liked: detail.isFavorite === 1}"
                    name="button"
                    v-if="query.tpl == 1">
              <i class="start"></i>
              <span class="favorite-text"
                    v-if="detail.isFavorite === 1"
                    @click="collectExpert(0)">收藏成功</span>
              <span class="favorite-text" v-else @click="collectExpert(1)">收藏专家</span>
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
                    <span v-if="detail.city">城市：
                      <address class="address">{{detail.city}}</address>
                    </span>
                  </dd>
                </dl>
              </el-col>

              <el-col class="text-right d-table-cell pull-none">
                <button type="button" name="button" class="btn btn-line">我要咨询专家
                  <small class="small">I want to consult an expert</small>
                </button>
                <nuxt-link :to="{ path: '/releaseResearch', query: { expertId: params.id } }" @click="isLogin(e)" class="btn btn-line">邀请专家调研企业
                  <small class="small">Apply for expert's research</small>
                </nuxt-link>
                <button type="button" name="button" class="btn btn-line">我要采访专家
                  <small class="small">I want to interview an expert</small>
                </button>
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
                  <img :src="detail.imgUrl | imgCdn" alt="专家头像" :title="detail.expertName">
                </div>

                <dl class="info d-table-cell pl-sm">
                  <dt>
                  <h3 class="clearfix"><span class="name">{{detail.expertName}}</span>
                    <address ng-if="detail.city" class="address">{{detail.city}}</address>
                  </h3>
                  </dt>
                  <dd class="font-md">{{detail.positionName}} | {{detail.maxSchool}}</dd>
                  <dd>
                    <span class="mr-sm" v-if="detail.yearsOfWorking">工作经验： {{detail.yearsOfWorking}}年</span>
                    <span v-if="detail.city">城市：<address
                        class="address">{{detail.city}}</address></span>
                  </dd>
                </dl>

                <div class="d-table-cell text-right">
                  <button type="button" class="collection btn-line" name="button"
                          :class="{liked: detail.isFavorite === 1}">
                    <i class="start"></i>
                    <span class="favorite-text" v-if="detail.isFavorite === 1"
                          @click="collectExpert(0)">收藏成功</span>
                    <span class="favorite-text" v-else @click="collectExpert(1)">收藏专家</span>
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
                <button type="button" name="button" class="btn btn-line">我要咨询专家
                  <small class="small">I want to consult an expert</small>
                </button>
                <nuxt-link :to="{ path: '/releaseResearch', query: { expertId: params.id } }" @click="isLogin(e)" class="btn btn-line">邀请专家调研企业
                  <small class="small">Apply for expert's research</small>
                </nuxt-link>
                <button type="button" name="button" class="btn btn-line">我要采访专家
                  <small class="small">I want to interview an expert</small>
                </button>
              </el-col>
            </el-row>
          </el-col>

          <!-- 模板三   -->
          <el-col :span="16" v-if="query.tpl == 3">
            <dl class="info">
              <dt>
              <h3 class="clearfix">
                <span class="name">{{detail.expertName}}</span>
                <address ng-if="detail.city" class="address">{{detail.city}}</address>
              </h3>
              </dt>
              <dd>{{detail.positionName}} | {{detail.maxSchool}}</dd>
            </dl>
          </el-col>
          <el-col :span="4" class="actions" v-if="query.tpl==3">
            <button type="button" class="collection btn-line" name="button"
                    :class="{liked: detail.isFavorite === 1}">
              <i class="start"></i>
              <span class="favorite-text" v-if="detail.isFavorite === 1"
                    @click="collectExpert(0)">收藏成功</span>
              <span class="favorite-text" v-else @click="collectExpert(1)">收藏专家</span>
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
            <button type="button" name="button" class="btn btn-line">我要咨询专家
              <small class="small">I want to consult an expert</small>
            </button>
            <nuxt-link :to="{ path: '/releaseResearch', query: { expertId: params.id } }" @click="isLogin(e)" class="btn btn-line">邀请专家调研企业
              <small class="small">Apply for expert's research</small>
            </nuxt-link>
            <button type="button" name="button" class="btn btn-line">我要采访专家
              <small class="small">I want to interview an expert</small>
            </button>
          </p>
        </div>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'expret-layout',

    data () {
      return {
        query: this.$route.query,
        params: this.$route.params
      }
    },

    async asyncData ({params}) {
      let expertId = params.id
      try {
        const {data} = await axios.get(`/webapi/v2/detailedExpertInfo/${expertId}`)
        return {
          detail: data.rows
        }
      } catch (e) {
        console.log(e)
      }
    },

    async fetch ({store}) {
      const {data} = await axios.get(`/webapi/v2/indexBottomMenu`)
      store.commit('SET_FOOTER', data.rows)
    },

    methods: {
      collectExpert (status) {
        if (!this.$store.state.user.id) {
          this.$store.commit('SET_OPEN', {opend: true})
          return false
        }
        if (status) {
          axios.get(`/webapi/v2/favorite/1/${this.$route.params.id}`).then(({data}) => {
            if (data.rows.statusCode === 200) {
              this.detail.isFavorite = 1
            }
          })
        } else {
          axios.get(`/webapi/v2/notFavorite/1/${this.$route.params.id}`).then(({data}) => {
            if (data.rows.statusCode === 200) {
              this.detail.isFavorite = 0
            }
          })
        }
      },
      isLogin (e) {
        if (!this.$store.state.user.id) {

        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
  // 专家介绍
  .expert-introduce {
    padding: 95px 0;

    .expert-header {
      font-size: 18px;
      text-align: center;
      font-weight: normal;
      color: #3e3e3e;
    }

    .btn.btn-line {
      color: #2788e8;
      border-color: #2788e8;
      &:hover {
        color: #fff;
      }

    }

    .content {
      padding: 0 78px;
      color: #6e6e6e;
      position: relative;
    }

    .introduce {
      position: relative;
    }

    .introduce::before, .introduce::after {
      content: "";
      position: absolute;
      width: 24px;
      height: 18px;
    }

    .introduce::before {
      background: url('~assets/img/quotes-left.png') no-repeat;
      left: 0;
      top: 0;
    }

    .introduce::after {
      background: url('~assets/img/quotes-right.png') no-repeat;
      right: 0;
      bottom: 0;
    }

    .desc {
      line-height: 26px;
    }

    .actions {
      margin-top: 35px;
    }

  }
  .info-wrap {
    border-bottom: 1px solid #6e6e6e;
    padding-bottom: 12px;
  }

  .img-box {
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  .favorite-text {
    display: inline-block;
    vertical-align: middle;
  }

  .introduction {
    padding: 16px 0;
    line-height: 26px;
  }

  .introduction-content {
    height: 80px;
    overflow: hidden;
  }

  .btn {
    width: 172px;
    text-align: center;
    padding: 2px 8px;
    margin-left: 15px;
    color: #fff;
    border-color: #fff;
    font-size: 14px;
    line-height:1.4;
    vertical-align: middle;
    &:first-child {
      margin-left: 0;
    }

    &:hover {
      color: #fff;
      border-color: #2788e7;
    }

    .small {
      display: block;
    }

  }

  .expert-info {
    padding: 40px 0;
    background: url('~assets/img/bg-expertdetail.jpg');
    min-height: 240px;
    color: #fff;

    .img-box {
      height: 160px;
      width: 160px;
      border-radius: 100%;
      background-color: pink;
    }

    .info {
      dt {
        font-size: 24px;
        margin-bottom: 16px;
      }

      .name {
        display: inline-block;
        margin-right: 20px;
      }

      .address {
        display: inline-block;
        font-style: normal;
        font-size: 14px;
        .location {
          margin-right: 8px;
          vertical-align: top;
        }

      }
      dd {
        line-height: 28px;
      }

    }

    .actions {
      padding-top: 65px;
    }

    .collection {
      text-align: center;
      cursor: pointer;
      border-radius: 2px;
      padding: 5px 8px;

      &.btn-line {
        border-color: #fff;

        &:hover {
          border-color: #2788e8;
        }

      }

      .start {
        display: inline-block;
        vertical-align: middle;
        width: 15px;
        height: 14px;
        margin-right: 10px;
        background-image: url('~assets/img/start-white.png');
      }

      small {
        display: block;
      }

    }
  }

  // 模板二
  .style-1 {

    .collection {
      margin-top: 20px;
    }

  }

  .style-2 {

    .btn {
      margin: 0 0 20px;
    }

  }

  // 收藏成功
  .collection.liked {
    border-color: #2788e8;
    background-color: #2788e8;
  }
</style>
