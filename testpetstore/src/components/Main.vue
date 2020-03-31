<template>
<div>
    <my-header v-bind:cartItemCount='cartItemCount'>

    </my-header>
    <main>
        <div v-for="product in sortedProducts" v-bind:key='product.id'>
            <div class="row">
                <div class="col-md-5 col-md-offset-0">
                    <figure>
                        <img v-bind:src="product.image" class='product'>
                    </figure>
                </div>
                <div class="col-md-6 col-md-offset-0 description">
                    <router-link tag='h1' :to="{name:'Id',params:{id:product.id}}">{{product.title}}</router-link>
                    <p v-html='product.description'></p>
                    <p class='price'>{{ product.price | formatPrice }}</p>
                    <button class="btn btn-primary btn-lg" v-on:click='addToCart(product)' v-if='canAddToCart(product)'>
                        장바구니 담기</button>
                                                                
                    <button class="btn btn-primary btn-lg" disable='true' v-else >
                        장바구니 담기</button>

                    <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id)===0 ">
                        품절입니다.
                    </span>
                    <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id)<5 ">
                        {{product.availableInventory - cartItemCount}} 남았습니다.
                    </span>
                
                    <span class="inventory-message" v-else>
                        구매가능!!!
                    </span>

                    <div class="rating">
                        <span v-bind:class="{'rating-active':checkRating(n, product)}" v-for="n in 5" :key='n'>☆</span>
                        
                    </div>
                </div>
            </div>
            <hr>
        </div>
                
    </main>
</div>
</template>
<script>
import MyHeader from './Header' // './Header.vue'
export default {
    name:'iMain',
    data(){
        return{
            products:[],
            cart:[],
        }
    },
    computed:{
        cartItemCount(){
            return this.cart.length || '';
        },
        sortedProducts(){  // 정렬된 형태로 리턴됨
            if(this.products.length>0){
                let productsArray = this.products.slice(0);
                function compare(a,b){
                    if(a.title.toLowerCase()<b.title.toLowerCase())
                        return -1;
                    if(a.title.toLowerCase()>b.title.toLowerCase())
                        return 1;
                    return 0;
                }
                return productsArray.sort(compare);
            }
        },
    },
    components:{MyHeader},
    methods:{
        canAddToCart(myProduct){
            return myProduct.availableInventory > this.cartCount(myProduct.id);
        },
        addToCart: function(myProduct){
            this.cart.push(myProduct.id);
        },
        cartCount(id){
            let count = 0;
            for(var i = 0; i<this.cart.length; i++){
                if(this.cart[i] === id) count++;
            }
            return count;
        },
        checkRating(n, myProduct){
            return myProduct.rating-n>=0;
        },
    },
    filters:{
        // filter 옵션에 필터 함수 작성
        formatPrice:(price)=>{ // price값을 전달받아 가격표시형식으로 반환
            if(!parseInt(price)){return "";}
                if(price>999){
                    var priceString = ""+price;
                    var priceArray = priceString.split("").reverse();
                    var index=3;
                    while(priceArray.length>index){
                        priceArray.splice(index,0,",");
                        index+=4;
                    }
                    return priceArray.reverse().join("")+"원";
                }else{
                    return price+"원";
                }
        }
    },
    created:function(){
        axios.get('./static/products.json')
        .then((res)=>{
            this.products=res.data.products;
            console.log(this.products);
        }).catch((err)=>{
            console.log(err);
        });
         
    },
         
}
</script>
<style scoped>

</style>