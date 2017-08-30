<template>
	<section class="service">
		<div class="website-container clearfix">
			<aside class="side-bar">
				<header>
					<h2 class="title">{{ left.cmsCategory.categoryName }}</h2>
				</header>
				<nav class="sub-nav">
					<ul>
						<li v-for="(item, index) in left.arts" :key="index">
							<nuxt-link class="text-overflow" :to="`/services/${item.id}`">{{ item.title }}</nuxt-link>
						</li>
					</ul>
				</nav>
			</aside>

			<main class="main">
				<article>
					<header>
						<h2 class="title">{{detail.title}}</h2>
					</header>
					<section v-html="detail.content"></section>
				</article>
			</main>
		</div>
	</section>
</template>

<script>
	import axios from '~/plugins/axios'

	export default {
		name: 'service-id',
		async fetch ({ store, params }) {
      const { data } = await axios.get(`/webapi/v2/indexBottomMenu`)
      store.commit('SET_FOOTER', data.rows)
    },

		asyncData({ params }){
			return Promise.all([
				axios.get(`/webapi/v2/artDetails/${params.id}`).then(data => data.data.rows),
				axios.get(`/webapi/v2/artLeftList/${params.id}`).then(data => data.data.rows)
			]).then((data) => {
        return {
          detail: data[0],
          left: data[1]
        }
      }).catch(e => console.log(e))
		}

	}
</script>

<style lang="scss" scoped>
	.service{
		padding: 60px 0;
		border-top: 2px solid #2788e8;
	}

	.side-bar{
		width: 200px;
		float: left;
		border: 1px solid #dedede;
		border-right: none;

		header{
			padding: 20px;
			padding-bottom: 0;

			.title{
				border-bottom: 1px solid #dedede;
				font-weight: normal;
				font-size: 16px;
				line-height: 36px;
			}
		}

		.sub-nav{
			padding: 10px 0;

			a {
				padding: 0 20px;
				line-height: 40px;

				&::before{
					content: "";
					display: inline-block;
					width: 10px;
					height: 10px;
					background: #dedede;
					border-radius: 3px;
					margin-right: 5px;
					transform: rotate(45deg);
				}

				&:hover,&.nuxt-link-active{
					background-color: #2788e8;
					color: #fff;
				}
			}
		}
	}

	.main{
		border:2px solid #2788e8;
		padding: 30px 35px;
		min-height: 680px;
		overflow:hidden;
		header{
			border-bottom: 1px solid #dedede;
			margin-bottom: 30px;
		}
		.title{
			font-size: 24px;
			font-weight: normal;
			color: #3e3e3e;
			text-align: center;
			padding-bottom: 20px;
		}
	}
</style>
