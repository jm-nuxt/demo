<template lang="html">
  <div class="website-top">
    <el-row class="website-container">
      <el-col :span="24" class="text-right">
        <a href="#">申请成为专家/Apply for an expert</a>
        <a href="#">用户注册/Free Registration</a>
        <a href="#">登录/Sign</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

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
