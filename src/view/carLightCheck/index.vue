<template>
  <div class="container">
    <div class="top">
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
  width: 100%;
  height: 100%;
  background-color: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top {
  height: 60px;
  width: 100%;
  background-color: #ff5a01;
}

.middle {
  margin-top: 60px;
  height: 100vh-60px;
  width: 100%;
  background-color: pink;
}
</style>
