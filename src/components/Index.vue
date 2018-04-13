<template>
	<!-- 头部 -->
	<el-row class="i_index">
		  <el-col :span="24" class="i_header">
		  		<div class="grid-content bg-purple">xxx微商平台系统</div>
		  		<el-dropdown class="user_space">
				      <span class="el-dropdown-link">
				        超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
					        <el-dropdown-item>个人信息</el-dropdown-item>
					        <el-dropdown-item>修改密码</el-dropdown-item>
					        <el-dropdown-item>退出登录</el-dropdown-item>
				      </el-dropdown-menu>
			    </el-dropdown>
		  </el-col>
		  <!-- 内容区 -->
		  <el-col :span="24" class="i_article">
		  		<div class="left_nav">
			  		<!-- 展开按钮 -->
					<div class="clooapse_space" @click.prevent="isCollapse = !isCollapse" :class="{open:isCollapse,close:!isCollapse}">
						<i class="iconfont icon-liebiaozhankai-copy" v-show="!isCollapse"></i>	
						<i class="iconfont icon-liebiaozhankai" v-show="isCollapse"></i>					
					</div>
					<!-- 导航 -->
					<el-menu background-color="#EEF1F6" router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
						    <el-submenu :index="$route.path">
							    <template slot="title">
								      <i class="el-icon-location"></i>
								      <span slot="title">商品管理</span>
							    </template>
								    <el-menu-item index="/index/addCommodity">
								        <span slot="title">添加商品</span>
								    </el-menu-item>
								    <el-menu-item index="/index/commodityList">
								        <span slot="title">商品列表</span>
								    </el-menu-item>
						    </el-submenu>


							<el-menu-item :index="$route.path">
							    <i class="el-icon-menu"></i>
							    <span slot="title">图书</span>
							</el-menu-item>

							<el-submenu :index="$route.path">
							    <template slot="title">
								      <i class="el-icon-setting"></i>
								      <span slot="title">系统设置</span>
							    </template>
								    <el-menu-item index="/index/editPwd">
								        <span slot="title">修改密码</span>
								    </el-menu-item>
						    </el-submenu>


					</el-menu>
				</div>
				<!-- 内容切换区 -->
				<div class="all_articalSpace">
						<router-view></router-view>
				</div>
		    </el-col>
	</el-row>
</template>

<script>
	export default{
		data(){
			return{
 				isCollapse: false
			}
		},
		methods:{
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		},
		mounted(){
			console.log(this.$router)
		}
	}
</script>

<style scoped lang="less">
	.i_index{
		position: absolute;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    .i_header{
	    	height: 60px;
		    line-height: 60px;
		    background: #20A0FF;
		    padding: 0;
		    >div{
		    	float: left;
		    }
		    .user_space{
		    	float: right;
		    	color: #fff;
		    }
	    }
	}
	.i_article{
		display: flex;
	    position: absolute;
	    top: 60px;
	    bottom: 0;
   		overflow: hidden;
   		div.left_nav{
   			background:#EEF1F6;
   			overflow-x: hidden;
   			overflow-y: auto;
   			&::-webkit-scrollbar {
		        display: none;
		    }
		    .clooapse_space{
	    	    padding: 6px 0;
			    background: #f0f9eb;
			    text-align: center;
			    cursor:pointer;
			    border-right: solid 1px #e6e6e6;
		    }
		    .open{
		    	background: #20A0FF;
		    	color:#fff;
		    }
		    .close{
		    	background: #fff;
		    	color:#20A0FF;
		    }
   		}
   		.all_articalSpace{
   			flex: 1;
   			overflow-y: auto;
		    padding: 20px;
   		}
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
</style>