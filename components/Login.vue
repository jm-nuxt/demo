<template>
	<section>
		<el-dialog custom-class="dialog-login"  :visible.sync="opend">
			<h2 class="text-center title">欢迎登录</h2>
		  <el-form :model="form">
		    <el-form-item>
		      <el-input 
		      	v-model="form.username" 
		      	auto-complete="off" 
		      	placeholder="请输入手机号/邮箱">
		      </el-input>
		    </el-form-item>

		    <el-form-item>
		      <el-input 
		      	type="password"
		      	v-model="form.password" 
		      	auto-complete="off" 
		      	placeholder="请输入密码">
		      </el-input>
		    </el-form-item>
		
				<el-form-item>
					<a href="" class="pull-left">免费注册</a>
					<a href="" class="pull-right">忘记密码</a>
				</el-form-item>
				
				<el-form-item>
					<el-button class="login-btn" type="primary" @click="login()">登 录</el-button>
				</el-form-item>
		  </el-form>

		  <div class="dialog-footer">
		    <div class="contact">
		    	<p class="phone">400-860-0550</p>
					<p class="time">工作时间:周一到周五9:00-17:30</p>
		    </div>
		  </div>
		</el-dialog>
	</section>
</template>

<script>
	import axios from '~/plugins/axios'

	export default{
		name: 'dialog-login',

		data(){
			return {
				form: {
					username: '',
					password: ''
				}
			}
		},

		methods: {
			async login () {
				console.log(this.form)

				// 验证
				
				const { data } = await axios.post(`/webapi/v2/validateLoginInfo`, this.form)

				// 登录成功
				if(data.code === 200){
					this.$store.commit('SET_OPEN', false)

					const { data } = await axios.get(`/webapi/v2/userInfo`)

					console.log(data);
				} else {
					this.$message.error(`${data.desc}`);
				}
			}
		},

		computed: {
			/**
			 * [opend 控制登录弹出的显示和隐藏 使用set/get 防止computed中的属性直接修改报错]
			 * @type {Object}
			 */
			opend: {

				get () {
					return this.$store.state.login.opend
				},

				set (newVal) {
					this.$store.state.login.opend = newVal
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.dialog-login{
		width: 360px;

		.el-dialog__body{
			padding: 30px 60px;
		}
	}
	
</style>

<style lang="scss" scoped>
	.title{
		margin-bottom: 30px;
		font-size: 26px;
		color: #3e3e3e;
	}

	.login-btn{
		width: 100%;
	}

	.dialog-footer{
		border-top: 1px solid #ccc;
		padding-top: 15px;
	}
	.contact{
		background: url('~assets/img/phone.png') no-repeat 10px center;
		padding-left: 60px;
		color: #9e9e9e;
		.phone{
			font-size: 24px;
		}

		.time{
			font-size: 12px;
		}
	}
</style>