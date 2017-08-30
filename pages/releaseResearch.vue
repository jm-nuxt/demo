<template>
	<section class="release-form-wrap">
		<div class="website-container">
			<header class="form-fieldset-header">
				<h2> <span class="title">发布调研单</span></h2>
			</header>
			<!-- {{expert}} -->
			<el-form class="release-form" ref="form" :rules="rules" :model="release" label-width="125px">

				<div class="form-textarea">

					<el-form-item v-if="expert.id" label="专家信息:">
			    	<h3>
			    		<span class="name">{{ expert.expertName }}</span>
			    		<address class="address"><i class="icon-location"></i> {{expert.city}}</address>
			    	</h3>

				    <p>
				    	<span :title="expert.positionName">
				    		{{ expert.positionName }}</span>
				    		<span v-if="expert.positionName && expert.companyName"> | </span>
				    		<span v-if="expert.companyName":title="expert.companyName">{{ expert.companyName }}</span>
				    		<span v-if="expert.yearsOfWorking"> {{ Number(expert.yearsOfWorking) }}年</span>
				    </p>

				    <p>{{ expert.expertIntroduces}}</p>
				  </el-form-item>

					<el-form-item label="调研公司信息:" prop="companyIntroduces">
				    <el-input
				    	type="textarea"
				    	placeholder="请尽可能的对公司信息进行描述，以便客服人员安排相应的专家进行调研"
				    	:rows="5"
				    	v-model="release.companyIntroduces">
				    </el-input>
				  </el-form-item>

				  <el-form-item label="调研描述:" prop="content">
				    <el-input
				    	type="textarea"
				    	:rows="5"
							placeholder="请尽可能说明具体内容问题，并对背景有所介绍，让专家能够快速理解您调查内容的重点"
				    	v-model="release.content">
				    </el-input>
				  </el-form-item>
				</div>


				<div class="user-info">
				  <el-form-item label="发布者名称:" prop="intentionUserName">
				    <el-input
				    	placeholder="请填写发布者的姓名"
				    	v-model="release.intentionUserName">
				    </el-input>
				  </el-form-item>

				  <el-form-item label="发布者公司:" prop="intentionUserCompany">
				    <el-input
				    	placeholder="请填写发布者公司信息，如公司名称等"
				    	v-model="release.intentionUserCompany">
				    </el-input>
				  </el-form-item>

				  <el-form-item label="发布者职务:" prop="intentionUserJob">
				    <el-input
				    	placeholder="请填写发布者的职务信息"
				    	v-model="release.intentionUserJob">
				    </el-input>
				  </el-form-item>

				  <el-form-item label="电子邮箱:" prop="intentionUserEmail">
				    <el-input
				    	placeholder="请填写发布者电子邮箱"
				    	v-model="release.intentionUserEmail">
				    </el-input>
				  </el-form-item>

				  <el-form-item label="联系方式:" prop="intentionUserTel">
				    <el-input
							placeholder="请务必填写联系方式，以便后续联系"
				    	v-model="release.intentionUserTel">
				    </el-input>
				  </el-form-item>

					<el-form-item class="text-center">
				    <el-button  :disabled="loading" class="submit-btn" type="primary" @click="submitForm('form')">
				    	<span v-show="!loading">提交</span>
				    	<span v-show="loading">正在提交中...</span>
				    </el-button>
				  </el-form-item>
				 </div>
			</el-form>
		</div>
	</section>
</template>

<script>
	import axios from '~/plugins/axios'

	export default {
		
		data () {
			return {
				rules: {
		      companyIntroduces: [
		        { required: true, message: '请输入调研公司信息', trigger: 'blur' },
		        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
		      ],
		      content: [
		        { required: true, message: '请输入调研描述', trigger: 'blur' }
		      ],
		      intentionUserName: [
		        { required: true, message: '请输入发布者名称', trigger: 'blur' }
		      ],
		      intentionUserCompany: [
		        { required: true, message: '请输入发布者公司', trigger: 'blur' }
		      ],
		      intentionUserJob: [
		        { required: true, message: '请输入发布者职务', trigger: 'blur' }
		      ],
		      intentionUserEmail: [
		        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
		        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
		      ],
		      intentionUserTel: [
		        { required: true, message: '请输入联系方式', trigger: 'blur' }
		      ]
		    }
			}
		},

		async asyncData({query}){
			if(query.expertId){
				const { data } = await axios.get(`/webapi/v2/detailedExpertInfo/${query.expertId}`)
				return {
					expert: data.rows
				}
			}else{
				return {
					expert: {}
				}
			}
		},

		async fetch ({ store, params }) {
      const { data } = await axios.get(`/webapi/v2/indexBottomMenu`)
      store.commit('SET_FOOTER', data.rows)
    },

		computed: {

			loading: {
				get(){
					return this.$store.state.release.loading
				},

				set(newVal) {
					this.$store.state.release.loading = newVal
				}
			},

			user: {
				get(){
					return this.$store.state.user.user || {}
				},

				set(newVal){
					this.$store.state.user.user = newVal
				}
			},

			release() {
				return {
					// 调研公司信息
					companyIntroduces: '',

					// 调研描述
					content: '',

					// 发布者名称
					intentionUserName: this.user.realName || '',

					// 发布者公司
					intentionUserCompany: this.user.companyName || '',

					// 发布者职务
					intentionUserJob: this.user.job || '',

					// 电子邮箱
					intentionUserEmail: this.user.email || '',

					// 联系方式
					intentionUserTel: this.user.userName || '',

					objectId: this.$route.query.expertId || null
				}
			}
		},

		methods: {
			submitForm (formName) {
				if (this.$store.state.user.user.id) {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.$store.commit('SET_RELEASE_LOADING', true)
							axios.post(`/webapi/v2/surveyBill`, this.release)
								.then(data => {
									this.$store.commit('SET_RELEASE_LOADING', false)
									const result = data.data || {}
									if(result.statusCode === 200){
										this.$alert('调研单发布成功', false, {
		                  type: 'success',
		                  confirmButtonText: '确定'
		                })
									}

								})
								.catch(err => this.$store.commit('SET_RELEASE_LOADING', false))
						}
					})
				} else {
					this.$store.commit('SET_OPEN', {opend: true})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.release-form-wrap{
		padding-top: 40px;
		border-top: 1px solid #dedede;
	}
	.release-form{
		padding: 40px 0;
	}

	.submit-btn{
		width: 200px;
	}
	.name {
    display: inline-block;
    margin-right: 20px;
  }
	.address {
    display: inline-block;
    font-style: normal;
    font-size: 14px;
    font-weight: normal;
    .location {
      margin-right: 8px;
      vertical-align: top;
    }
	}
</style>
