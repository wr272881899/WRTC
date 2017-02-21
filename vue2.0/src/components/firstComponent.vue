<template>
    <div id="firstComponent">
        <h1>I am a title.</h1>
        <a>written by {{author}}</a><br>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default{
    data:function(){
        return{
            author:'微信公众号 ShuaiWu',
            articles:[]
        }
    },
    mounted: function(){
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
            header:{},
            emulateJSON:true
        }).then(function(response){
            console.log('yes---',response);
            this.articles = response.body.subjects;
        },function(error){
            console.log('no---',error);
        })
    }
}
</script>

<style>

</style>