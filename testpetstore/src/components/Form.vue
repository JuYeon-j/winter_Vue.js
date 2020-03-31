<template>
<div>
    <my-header :cartItemCount='cartItemCount'>

    </my-header>
    <div class="row">
        <!-- <h1>체크아웃화면</h1> -->
        <div class="panel panel-info">
            <div class="panel-heading">
                애완용품샵 장바구니
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <div class="col-md-12">
                        <h4><strong>정보를 입력하시오.</strong></h4>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <strong>이름: </strong>
                        <input v-model.trim="order.fName" type="text" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <strong>성: </strong>
                        <input v-model.trim="order.lName" type="text" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <strong>주소: </strong>
                    </div>
                    <div class="col-md-12">
                        <input v-mode.triml="order.addr" type="text" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <strong>구: </strong>
                    </div>
                    <div class="col-md-12">
                        <input v-model.trim="order.ku" type="text" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-2">
                        <strong>도시: </strong>
                        <select v-model="order.city" name="" id="" class="form-control">
                            <option diable value="">도시</option>
                            <option v-for="(city,key) in cities" v-bind:value="city" v-bind:key='key'>
                                {{key}}.{{city}}
                            </option>
                            
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <strong>우편번호: </strong>
                        <input v-model.number="order.zipcode" type="number" class="form-control">
                    </div>
                    
                </div>
                
                <div class="form-group">
                    <div class="col-md-6 boxes">
                        <input type="checkbox" id="gift" value='true' v-bind:true-value="order.sendGift" v-bind:false-value="order.dontsendGift" v-model='order.gift'>
                        <label for="gift">선물보내기?</label>
                    </div>
                    
                </div>

                <div class="form-group">
                    <div class="col-md-6 boxes">
                        <input type="radio" id="home" v-bind:value='order.home' v-model='order.method'>
                        <label for="home">자택</label>
                        <input type="radio" id="business" v-bind:value='order.business' v-model='order.method'>
                        <label for="business">직장</label>
                    </div>
                    
                </div>

                <div class="form-group">
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary submit" @click="submitForm">
                            주문하기
                        </button>
                    </div>
                </div>
                


                <div class="col-md-12 verify">
                    <pre>
                        이름: {{order.fName}}
                        성: {{order.lName}}
                        주소: {{order.addr}}
                        구: {{order.ku}}
                        도시: {{order.city}}
                        우편번호: {{order.zipcode}}
                        주소지:{{order.method}}
                        선물:{{order.gift}}
                    </pre>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import MyHeader from './Header'
export default {
    name:'Form',
    props:['cartItemCount'],
    data(){
        return{
            cities:{
                SL:'서울',
                DG:'대구',
                PK:'부산',
                IC:'인천',
                GM:'구미',
                MS:'마산',
            },
            order:{
                fName: '',
                lName: '',
                addr:'',
                ku:'',
                city:'',
                zipcode:'',
                method:'자택주소',
                gift: '선물로 보내기',
                sendGift: '선물로 보내기',
                dontsendGift:'선물로 보내지 않기',
                home:'자택주소',
                business:'직장주소',
            }
        }
    },
    methods:{
        submitForm(){
            alert("주문완료");
            // 백엔드와 통신하는 코드
        },
    },
    components:{MyHeader},
    
}
</script>
<style scoped>

</style>