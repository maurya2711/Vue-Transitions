<template>
  <div class="conatiner">
    <div class="conatiner-header">
    <h1>KAAMEEHAAMEEHAAA=======></h1>
    <p>Goku is ready for give his best move KAAMEEHAAMEEHAAA Help him to do that by click on button</p>
    <button type="button" @click="handleAttack">Launch</button>
    </div>
    <div class="conatiner-content">
      <div class="content-left">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ece695a-1a14-4f79-a016-9af68b09b274/d2vvjua-a0c7628b-82ed-424e-b453-759ecfb8a152.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlY2U2OTVhLTFhMTQtNGY3OS1hMDE2LTlhZjY4YjA5YjI3NFwvZDJ2dmp1YS1hMGM3NjI4Yi04MmVkLTQyNGUtYjQ1My03NTllY2ZiOGExNTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e2x_ef3FBtxTuJWQpTSzTayRumurQbOzWeF-j5QES-M" alt="Goku" class="goku"/>
      </div>
      <!-- <transition name=power> -->
      <div class="content-transition" >
        <img src="https://banner2.cleanpng.com/20180207/jjq/kisspng-light-energy-download-energy-ball-effects-5a7bb0ee7a0788.1360695315180556624998.jpg" alt="ball" :class="this.attack ? 'launchAttack': 'power'" />
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      attack:false
    }
  },
  methods:{
    handleAttack(){
      console.debug("attack button clicked")
      this.attack = true;
    }
  }
}
</script>
<style scoped>

.conatiner-content{
  display: flex;
  border-block: dashed gray;
  height:300px;
  margin-top:28px
}
.content-left{
  margin-top: 44px;
}
.goku{
  height:200px;
  width: 200px;
}
.power{
  height:80px;
  width:80px;
  border-radius: 50%;
   animation-name: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.content-transition{
  margin-top:76px;
    animation-direction:normal;
}
.launchAttack{
   height:80px;
  width:80px;
  border-radius: 50%;
  animation-name: rotate;
  transition-duration: 5s;
  animation: moveOnX 2s  ease-in-out alternate
}

@keyframes rotate{
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
}
@keyframes moveOnX {
from { transform: translateX(0px);}
  to { transform: translateX(500px);}
  
} 
</style>