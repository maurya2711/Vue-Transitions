<template>
  <div class="rocket-container">
    <div class="rocket-header">
    <p>This is Simple Rocket Container. Click on the button below to move rocket on that direction.</p>
    <button type="button" class="rocket-button-start" @click="handleStart">Start</button>
    </div>
    <div class="rocket-content-container">
      <div class="rocket-button-section">
        <button type="button" class="rocket-button-left" @click="handleLeft">Left</button>
        <button type="button" class="rocket-button-right" @click="handleRight">Right</button>
        <button type="button" class="rocket-button-up" @click="handleUp">Up</button>
        <button type="button" class="rocket-button-down" @click="handleDown">Down</button>
      </div>
      <div class="rocket-animation-section">
        <RocketModel :show="this.isShow" :up="this.isUp" :down="this.isDown" :left="this.isLeft" :right="this.isRight"/>
      </div>
    </div>
  </div>
</template>

<script>
import RocketModel from "../components/RocketModel.vue"
export default {
  name: "RocketView",
  components:{
    RocketModel,
  },
  data(){
    return {
      isShow: false,
      isLeft: false,
      isRight: false,
      isUp: false,
      isDown: false,
    }
  },
  methods:{
    handleStart(){
     
      this.isShow= !this.isShow
       console.debug("handleStart is clicked", this.isShow)
    },
    handleLeft(){
     this.isLeft= !this.isLeft
     this.isRight=false
     this.isUp=false
     this.isDown=false
    },
    handleRight(){
     this.isRight= !this.isRight
      this.isUp=false
     this.isDown=false
     this.isLeft=false
    },
    handleUp(){
     this.isUp= !this.isUp
      this.isLeft=false
     this.isDown=false
     this.isRight=false
    },
    handleDown(){
     this.isDown= !this.isDown
     this.isUp=false
      this.isLeft=false
     this.isRight=false
    },
  }
}
</script>

<style scoped>
  .rocket-content-container{
    display: flex;
    border-block: dashed gray;
    margin-top: 28px;
    height: 300px;
    align-items: center;
  }
  .rocket-button-section{
    /* margin-top: 28px; */
    display: flex;
    flex-direction: column;
  }
  .rocket-animation-section{
    border: solid  black 2.2px;
    border-radius: 12px;
    margin-left: 80px;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>