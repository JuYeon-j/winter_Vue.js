<template>
      <header>
            <div class="navbar navbar-default">
                <div class="navbar-header">
                    <h1><router-link :to="{name:'iMain'}">{{sitename}}</router-link></h1>
                </div>
                <div class="nav navbar-nav navbar-right cart">
                    <router-link active-class='active' tag='button' class="btn btn-default btn-lg" :to="{name:'Form'}">
                        <span class="glyphicon glyphicon-shopping-cart">
                            {{ cartItemCount }}
                        </span>
                        <span>체크아웃</span>
                    </router-link>
                </div>
            </div>                      
        </header>
</template>
<script>
export default {
    name:'my-header',
    data(){
        return {sitename:'Vue.js 애완용품샵'}
    },
    props:['cartItemCount'],
    methods:{
        showCheckOut: function(){
            this.showProduct = this.showProduct ? false : true;
        },
    },
}
</script>
<style scoped>
a{
    text-decoration: none;
    color: coral;
}
.router-link-exact-active{
    color: deeppink;
}
</style>