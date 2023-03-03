<template>
  <div :class="backGround == `light` ? `light-theme` : `dark-theme`">
    <nav>
      <span class="" @click="changeTheme"> 
        
        <span> Change Theme </span>
        <i v-if="backGround == `dark`" class="fa-solid fa-lightbulb"></i>
        <i v-else="backGround == `light`" class="fa-solid fa-moon"></i>
      </span>
      <br>
    </nav>
    
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        backGround: "light"
      }
    },
    methods: {
      changeTheme () {
      this.backGround = this.backGround == "light" ? "dark" : "light";
      // console.log(this.backGround)
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.light-theme {
  background-color: white;
  color: black;
  min-height: 100vh;
  height: auto;
  
}

.dark-theme {
  background: black;
  color: white;
  min-height: 100vh;
  height: auto;
}
nav {
  margin-top: 10px;
  user-select: none;
  cursor: pointer;
}

</style>
