<template>
  <div class="aos-animation">
    <p>In this section lets acheive animation using Animate on Scroll library. click on button to Check exciting features of AOS</p>
    <button type="button" @click="handleShow" class="button">Click Here</button>
  </div>
  <div class="aos-animation-container" v-if="this.show">
    <transition-group tag="ul" >
        <li v-for="(item) in this.users" :key="item.id" data-aos="fade-up-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            {{item.userName}} {{item.email}}
        </li>

    </transition-group>
  </div>

</template>

<script>
export default {
    name: "AosAnimation",
    data(){
        return {
            users:[
                {
                    id:"1",
                    userName:"Test 1",
                    email:"test1@example.com"
                },
                {
                    id:"2",
                    userName:"Test 2",
                    email:"test2@example.com"
                },
                {
                    id:"3",
                    userName:"Test 3",
                    email:"test3@example.com"
                },
                {
                    id:"4",
                    userName:"Test 4",
                    email:"test@example.com"
                },
            ],
            show: false,
        }
    },
    methods:{
        handleShow(){
            this.show = !this.show
        }
    },
}
</script>
<style>

</style>