<template>
  <div class="wenke">
    <div class="top">
      <h6>{{$store.state.list[num-1].subjectCh}} 第{{num}}题/共4题</h6>
    </div>
    <div class="mid">
      <p>{{$store.state.list[num-1].title}}</p>
    </div>
    <div class="bottom">
        <div class="bg" @click="change(0)" :class="{'active':list[0]}"><img src="../imgs/a.png" alt="" style="width:30px;left:45px">{{$store.state.list[num-1].answers[0]}}</div>
        <div class="bg" @click="change(1)" :class="{'active':list[1]}"><img src="../imgs/b.png" alt="">{{$store.state.list[num-1].answers[1]}}</div>
        <div class="bg" @click="change(2)" :class="{'active':list[2]}"><img src="../imgs/c.png" alt="">{{$store.state.list[num-1].answers[2]}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      list:[!1,!1,!1],
      num:0
    }
  },
  methods:{
    change:function(index){
      this.list=[!1,!1,!1];
      this.list[index]=!0;
      
      setTimeout(()=>{
        this.num = this.num*1+1;
        this.list=[!1,!1,!1];
        if(this.num > 4){
          this.$router.replace('/result');
        }else{
          this.$router.replace('/wenke/'+this.num);
        }
        
      }, 500);
    }
  },
  created:function(){
    this.num =this.$route.params.num*1;
    console.log(this.num)
    let type = this.$route.query.id;
    this.$store.commit('select',type)
    
  }
  
}
</script>
<style>
  .top{
    height:65px;
    background: url('../imgs/bg-qustion-top.png') no-repeat;
    background-size: 90% auto;
    background-position: 20px 20px;
  }
  
  .mid{
    height:55px;
    background: url('../imgs/bg-question-center.png') no-repeat;
    background-size: 90% auto;
    background-position: 20px 0px ;
  }
  .bottom{
    height: 350px;
    background: url('../imgs/bg-question-bottom.png') no-repeat;
    background-size: 90% auto;
    background-position: 20px 0px;
    background-size:90% 100%;
    padding-top: 10px;
  }
  .bg{
    height: 42px;
    background: url('../imgs/btn-bg-select.png') no-repeat;
    background-size: 80%;
    background-position: 30px 0px;
    position: relative;
    line-height: 45px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: left;
    box-sizing: border-box;
    padding-left: 85px;
    margin-bottom: 10px;
  }
  .active{
    background-position: 30px -42px;
  }
  .bg img{
    position: absolute;
    left: 50px;
    width: 20px;
    top: 10px;
    height: auto;;
  }
  .top h6{
    margin:0;
    padding: 0;
    line-height: 60px;
  }
  p{
    padding: 0;
    margin: 0;
    width: 80%;
    margin-left:10%;
    font-size:14px;
  }
</style>
