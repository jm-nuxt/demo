<template lang="html">
  <div class="website-top">
    <el-row class="website-container">
      <el-col :span="24" class="text-right">
        <a href="#">申请成为专家/Apply for an expert</a>
        <a href="#">用户注册/Free Registration</a>

        <a v-if="!user" @click.prevent="showLogin()">登录/Sign</a>

        <a href="" v-if="user">
          <i>icon</i>
          <span>{{user.userName}}</span>
          <i>icon</i>

          <div>
            <p>
              <a href="#">个人中心</a>
            </p>

            <p><a href="#">退出</a></p>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    user: {
      get(){
        return this.$store.state.user.user || {}
      },

      set(newVal){
        this.$store.state.user.user = newVal
      }
      
    }
  },
  methods: {
    showLogin(){
      this.$store.commit('SET_OPEN', {opend: true})
    },
  }
}
</script>

<style lang="scss">
  .website-top{
    line-height: 30px;
    background-color: #f5f5f5;
    color: #6e6e6e;
  }

  .website-top a{
    margin-left: 25px;
  }
</style>
