<template>
    <div class="page-search">
       <div>
           <mt-header fixed  title="菜单">
                <router-link to="/index" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="search">
            <mt-search v-model="value">
                <mt-cell
                        v-for="item in result"
                        :title="item.title"
                        :value="item.value">
                </mt-cell>
            </mt-search>
        </div>
        <mt-cell title="徽章" value="未读消息">未读消息&nbsp;<mt-badge type="error">10</mt-badge></mt-cell>
        <div>
            <mt-index-list>
                <mt-index-section index="A">
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Alden"></mt-cell>
                    <mt-cell title="Austin"></mt-cell>
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Alden"></mt-cell>
                    <mt-cell title="Austin"></mt-cell>
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Alden"></mt-cell>
                    <mt-cell title="Austin"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                    <mt-cell title="Baldwin"></mt-cell>
                    <mt-cell title="Braden"></mt-cell>
                    <mt-cell title="Baldwin"></mt-cell>
                    <mt-cell title="Braden"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>

</template>
<script>
    export default {
        data:function() {
            return {
            }
        },
        created:function(){
        },
        methods: {
            search:function() {
                console.log(this.value);
            }
        }
    }
</script>
<style>
.search{
    margin-top:40px;
}
.mint-search{
    height:100%;
}
</style>