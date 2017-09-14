import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
Vue.prototype.$http = axios;
Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    question:[],
    list:[],
    school:[]
  },
  mutations:{
    set_question:function(state,data){
      for(var i in data){
        state.question.push(data[i])
      }
      console.log(typeof(state.question))
    },
    set_school:function(state,data){
      for(var n in data){
        state.school.push(data[n])
      }
      console.log(typeof(state.school))
    },
    select:function(state,type){
      let arr = [];
      if(type == 1){
        arr=state.question.filter((val)=>{
          if(val.type ==1 || val.type == 2){
            return val
          }
        })
      }else if(type == 0){
        arr=state.question.filter((val)=>{
          if(val.type !=1){
            return val
          }
        })
      }
      state.list=arr.slice(0,4);
    }
  },
  actions:{
    get_question:function({commit},data){
      commit('set_question',data)
    },
    get_school:function({commit},data){
      commit('set_school',data)
    }
   
  }
})

new Vue({
  el: '#app',
  beforeCreate:function(){
    this.$http.get('../service/question.json')
              .then((res)=>{
                console.log(res.data)
                this.$store.dispatch('get_question',res.data)
              })
  },
  router:router,
  store:store,
  render: h => h(App)
})
