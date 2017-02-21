<template>
    <div id="home">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <mt-button @click.native="startHacking">Let's do it</mt-button>
        <mt-button @click.native="Alert">Let's do it</mt-button>
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>

        <ul>
            <li><router-link to="/list">第一个页面</router-link></li>
        </ul>

        <first-component></first-component>

       <el-menu theme="dark" defaile-active="1" class="el-menu-demo" mode="horizontal" :router="true">
           <el-menu-item index="/elindex/hot">处理中心</el-menu-item>
           <el-submenu index="2">
           <template slot="title">我的工作台</template>
           <el-menu-item index="2-1">选项1</el-menu-item>
           <el-menu-item index="2-2">选项2</el-menu-item>
           <el-menu-item index="2-3">选项3</el-menu-item>
           </el-submenu>
               <el-menu-item index="3">订单管理</el-menu-item>
           </el-menu>
    </div>
</template>

<script>
import firstComponent from './firstComponent.vue'
    export default {
        name: 'home',
        data:function() {
            return {
                msg: 'Welcome to Your Vue.js App',
                sheetVisible:false,
                actions:[{name:'拍照',method:''},{name:'从相册选择',method:''}]
            }
        },
        methods: {
            startHacking:function() {
                this.sheetVisible = true;
                //this.MessageBox.alert('操作成功').then()
            },
            Alert:function(){
                this.$messagebox.alert('操作成功').then(action=>{})
            }
        },
        components:{firstComponent}
    }
</script>
<style>
#home{
    text-align: center;
}
</style>

