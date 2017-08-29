<template lang="html">
  <section class="research">
    <header class="company">
      <div class="website-container">
        <div class="company-info-wrap d-table">
          <div class="img-box d-table-cell">
            <img :src="detail.companyLogoUrl | imgCdn" :alt="detail.companyName" :title="detail.companyName"/>
          </div>

          <div class="company-info d-table-cell">
            <h2 class="company-name" :title="detail.companyName">{{ detail.companyName }}</h2>
            <a target="_blank" class="go" :href="detail.websiteUrl" :title="detail.companyName">跳转至公司界面</a>  
          </div>
        </div>
      </div>
    </header>

    <div class="website-container clearfix">
      <div class="main-bar pull-left">
        <header class="header-title">
          <h2 class="title">研报内容 <small class="small">Research content</small></h2>
        </header>
        <article class="research-box">
            <header class="research-title">
              <h3 class="title" :title="detail.title">{{ detail.title }}</h3>
              <time class="time">{{ detail.publisTime }}</time>
            </header>

            <section v-html="detail.content" class="research-content">
            </section>
        </article>

        <footer class="statement">
          <h4 class="title">免责声明</h4>
          <ol>
            <li>1、本文仅代表作者观点，不代表聚贸立场。</li>
            <li>2、本文系作者授权聚贸云智库发表，未经许可，不得转载。</li>
          </ol>
        </footer>
      </div>

      <div class="side-bar pull-right">
        <header class="header-title">
          <h2 class="title">专家信息 <small class="small">Information of expert</small></h2>
        </header>

        <div class="repert-box">
          <div class="d-table">
            <div class="img-box d-table-cell">
              <img :src="expert.imgUrl | imgCdn" :alt="expert.expertName">
            </div>

            <dl class="d-table-cell repert-info">
              <dd class="name text-overflow">{{
              expert.expertName}}</dd>
              <dd>
                <address class="address text-overflow"> <i class="icon-location"></i>{{expert.city}}</address>
              </dd>
            </dl>
          </div>

          <div class="content-list">
            <p> 
              <label>担任职务:</label>
              <span>{{expert.positionName}}</span>
            </p>

            <p> 
              <label>所在公司:</label>
              <span>{{expert.companyName}}</span>
            </p>

        <!--     <p> 
              <label>擅长领域:</label>
              <span>开发商穿心嘻嘻嘻</span>
            </p> -->

            <p v-if="Number(expert.yearsOfWorking)">
              <label>年限:</label>
              <span>{{Number(expert.yearsOfWorking).toFixed(0)}}年</span>
            </p>
          </div>
          

          <div class="text-center">
            <nuxt-link :to="{ path: `/experts/${expert.id}?tpl=${expert.templateId}` }" class="btn btn-primary expert-link">专家个人页面</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'companyResearch-id',

  async fetch ({ store, params }) {
    const { data } = await axios.get(`/webapi/v2/indexBottomMenu`)
    store.commit('SET_FOOTER', data.rows)
  },
    
  async asyncData({ params }){
    try {
      const result = await axios.get(`/webapi/v2/detailedResearchReport/${params.id}`)
      const detail = result.data || {}
      const { data } = await axios.get(`/webapi/v2/detailedExpertInfo/${detail.rows.expertId}`)
      
      return {
        detail: detail.rows || {},
        expert: data.rows || {}
      }
    } catch(e){
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>

  .img-box{
    img{
      width: 100%;
      height: 100%;
      border-radius: 100%;
      display: block;
    }
  }

  .company{
    margin-bottom: 30px;
    width: 100%;
    color: #fff;
    background: url('~assets/img/reportBanner.png') no-repeat center;
  }

  .company-info-wrap{
    overflow: hidden;
    padding: 40px 0;

    .img-box{
      width: 120px;
      height: 120px;
      border-radius: 100%;
      background-color: pink;
    }

    .company-info{
      padding-left: 35px;
    }

    .company-name{
      font-size: 24px;
      margin-bottom: 20px;
      color: #fff;
    }

    .go{
      background-color: #fff;
      color: #6e6e6e;
      padding: 8px 12px;
      border-radius: 3px;
      height: 32px; 
    }
  }

  .header-title{
    border: 1px solid #dedede;
    background-color: #fff;
    padding: 18px;

    .title{
      font-size: 16px;
      color: #3e3e3e;
      font-weight: normal;
    }

    .small{
      color: #9e9e9e;
      font-size: 16px;
    }
  }

  .main-bar{
    width: 850px;
  }

  .side-bar{
    width: 310px;
  }

  .research-box{
    padding: 40px;

    .research-title{
      text-align: center;
      padding-bottom: 30px;
    }
    .title{
      font-size: 24px;
      font-weight: 500;
      color: #3e3e3e;
    }
    .time{
      padding-top: 20px;
      display: block;
    }
  }

  .statement{
    border-top: 1px solid #dedede;
    padding: 25px 0;
    line-height: 28px;

    .title{
      font-size: 16px;
      font-weight: normal;
      color: #3d3d3d;
      padding-bottom: 5px;
    }

    li{
    }
  }

  // 专家信息
  .repert-box{
    border: 1px solid #dedede;
    border-top: none;
    padding: 30px 36px;

    .img-box{
      width: 100px;
      height: 100px;
      border-radius: 100%;
      background: pink;
    }

    .address{
      font-style: normal;
    }


    .repert-info{
      padding-left: 25px;
      width: 138px;
    }

    .name{
      font-size: 24px;
      color: #3e3e3e;
      padding-bottom: 15px;
    }
  }

  .content-list {
    line-height: 26px;
    padding: 20px 0;

    label{
      padding-right: 8px;
    } 
  }
  .expert-link{
    margin: 0 auto;
    border-radius: 3px;
    width: 152px;
    display: block;
    line-height: 36px;
    text-align: center;
  }

</style>
