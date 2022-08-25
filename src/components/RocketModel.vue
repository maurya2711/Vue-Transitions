<template>
  <div class="conatiner">
    <transition name="rocket">
     
      <div v-if="this.show" >
        <img
          src="https://img.freepik.com/premium-vector/colored-rocket-ship-icon-flat-design-simple-spaceship-icon-isolated-white-background-vector-illustration_118339-1704.jpg?w=2000"
          alt="Rocket"
          class="rocket-image"
          :class="{
        'rocket-left-enter-active rocket-left-enter-from rocket-left-enter-to' : this.moveLeft==true ,
        'rocket-right-enter-active rocket-right-enter-from rocket-right-enter-to' : this.moveRight==true ,
        'rocket-up-enter-active rocket-up-enter-from rocket-up-enter-to' : this.moveUp==true ,
        'rocket-down-enter-active rocket-down-enter-from rocket-down-enter-to' : this.moveDown==true ,
      }"
        />
      </div>
    </transition>
     </div>
</template>

<script>
export default {
  name: "RocketModel",
  props: {
    show: Boolean,
    left: Boolean,
    right: Boolean,
    up: Boolean,
    down: Boolean,
  },
  data(){
    return {
        moveLeft: false,
        moveRight: false,
        moveUp: false,
        moveDown: false,
    }
  },
  mounted() {
    console.debug("mounted RocketModel", this.show, "left",this.left, "right",this.right, "up",this.up, "down",this.down);
    
  },
  watch:{
    left(){
        console.log("left", this.left, "right", this.right, "up", this.up, "down", this.down);
        this.moveLeft=this.left
        this.moveRight=this.right
    },
    up(){
        this.moveUp=this.up
        this.moveDown=this.down
    console.log("IN Watcher", this.moveUp, this.moveDown)
    }
  }
};
</script>

<style scoped>
.rocket-image {
  height: 100px;
  width: 80px;
  margin-top: 95px;
  
}
.rocke-left-enter-from .rocke-right-enter-from .rocke-down-enter-from .rocke-up-enter-from {
    opacity: 0;
}

.rocket-left-enter-to {
 opacity: 1;
   animation-name: rotate;
}

.rocket-left-enter-active {
   transform:rotate(90deg) 2s;
  transition-duration: 5s;
  animation: moveOnX 2s  ease-in-out alternate
}
.rocket-right-enter-active {
   transform:rotate(90deg) 2s;
  transition-duration: 5s;
  animation: moveOn-X 2s  ease-in-out alternate
}
.rocket-up-enter-active {
   transform:rotate(90deg) 2s;
  transition-duration: 5s;
  animation: moveOnY 2s  ease-in-out alternate
}
.rocket-down-enter-active {
   transform:rotate(90deg) 2s;
  transition-duration: 5s;
  animation: moveOn-Y 2s  ease-in-out alternate
}
@keyframes rotate{
    from{ transform: rotate(0deg); }
    to{ transform: rotate(180deg); }
}
@keyframes moveOnX {
from { transform: translateX(0px);}
  to { transform: translateX(500px);}
  
} 
@keyframes moveOn-X {
from { transform: translateX(0px);}
  to { transform: translateX(-500px);}
  
} 
@keyframes moveOnY {
from { transform: translateY(0px);}
  to { transform: translateY(-80px);}
  
} 
@keyframes moveOn-Y {
from { transform: translateY(0px);}
  to { transform: translateY(80px);}
  
} 

</style>
