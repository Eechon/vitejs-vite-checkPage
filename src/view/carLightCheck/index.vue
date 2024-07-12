<template>
  <div class="container">
    <div class="top">
      <div class="logo">
        <div class="imgwrap">
          <img src="../../image/logo.png" alt="">
        </div>
      </div>
    </div>
    <div class="middle">this is carlight page</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>

<style>
.container {
  width: 100vh;
  height: 100vh;
  background-color: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top {
    height: 60px;
    width: 100%;
    background-color: #ff5a01;
  }

  .middle {
    width: 100%;
    background-color: pink;
  }
}

.logo {
  height: 2rem;

  .imgwrap {
    height: 100%;
    width: 100%;
    display: flex;
  }
}
</style>
