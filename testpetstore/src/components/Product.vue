<template>
<div>
    <my-header></my-header>
    <h1>판매물품 ID: {{$route.params.id}}</h1>
    <div class="row">
        <div class="col-md-5 col-md-offset-0">
            <figure><img v-bind:src="product.image" alt="" class="product"></figure>
        </div>
        <div class="col-md-6 com-md-offset-0 description">
            <h1></h1>
            <p v-html='product.description'></p>
            <p class="price">{{product.price}}</p>
            <button @click="edit">상품수정</button>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
import MyHeader from './Header'
export default {
    components:{MyHeader},
    data(){
        return{
            product:''
        }
    },
    created:function(){
        axios.get('/static/products.json')
        .then((res)=>{
            this.products=res.data.products.filter(data=>data.id == this.$route.params.id)[0];
            this.product.image='/'+this.product.image;
        }).catch((err)=>{
            console.log(err);
        });
         
    },
    methods:{
        edit(){
            this.$router.push({name:'Edit'});
        }
    }
}
</script>
<style scoped>

</style>