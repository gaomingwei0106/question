<template>
    <div>
        <img src="../imgs/home-pepole.png" alt="" id="people">
        <img src="../imgs/home-title.png" alt="" id="pi">
        <router-link :to="{name:'q1',query:{id:0},params:{'num':1}}"><img src="../imgs/f-wenke.png" alt="" id="wenke"></router-link>
        <router-link :to="{name:'q1',query:{id:1},params:{'num':1}}"><img src="../imgs/f-like.png" alt="" id="like"></router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    #people{
        position: absolute;
        width: 80%;
        height: auto;
        top: 0;
        left: 10%;
        }
    #pi{
        position: absolute;
        width: 40%;
        height: auto;
        top: 50px;
        left: 30%
        }
    #wenke{
        position: absolute;
        width: 32%;
        height: auto;
        left: 15%;
        top: 200px;
        }
    #like{
        position: absolute;
        width: 32%;
        height: auto;
        right: 15%;
        top: 200px;
        }
</style>
