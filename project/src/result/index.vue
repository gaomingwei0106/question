<template>
     <div class="result">
         <div class="main">
             <h5>{{$store.state.school[0].name}}</h5>
             <p><span>主修课程：</span>{{$store.state.school[0].majors}}</p>
             <p><span>课程特色：</span>{{$store.state.school[0].character}}</p>
         </div>
        <div class="left"><img src="../imgs/btn-intr.png" alt=""></div>
        <div class="right"><img src="../imgs/btn-share.png" alt=""></div>
        <img src="../imgs/seal.png" alt="" id="seal">
    </div> 
</template>
<script>
    export default {
        data:function(){
            return{
            }
        },
        beforeCreate:function(){
            this.$http.get('../service/school_list.json').then((result)=>{
                console.log(result.data)
                this.$store.dispatch('get_school',result.data);
            })
        }
    }
</script>
<style>
    .result{
        width: 100%;
        height: 100%;
        background: url('../imgs/bg-matriculate.png') no-repeat;
        background-size: 322px 382px;
        background-position: 0px 50px;
        position: relative;
    }
    .left{
        position: absolute;
        width: 130px;
        height: auto;
        left: 10px;
        bottom: 180px;
    }
    .left img,.right img{
        display: block;
        width: 100%;
        height: 100%;
    } 
    #seal{
        position: absolute;
        top: 50px;
        right: 0;
        width:40%;
        height: auto;
    }
    .right{
        position: absolute;
        width: 130px;
        height: auto;
        right: 10px;
        bottom: 180px;
    }
    .main{
        position: absolute;
        top: 160px;
        width: 100%;
        text-align: center;
        left:0;
    }
    .main h5{
        font-size: 22px;
        padding: 0;
        margin:0;
        line-height: 50px;
        font-weight: normal;
    }
    .main p{
        padding: 0;
        margin:0;
        width: 80%;
        margin-left: 10%;
        font-size: 14px;
        text-align: left;
        box-sizing:border-box;
        line-height: 25px;
    }
    .main p span{
        font-size: 14px;
        font-weight: bold;
    }
</style>
