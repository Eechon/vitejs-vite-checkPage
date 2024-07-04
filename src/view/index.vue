<template>
  <div class="basic">
    <div>this is index page</div>
    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary" @click="handleClick">Primary</el-button>
      <el-button type="success" @click="handleClick1">Success</el-button>
      <el-button type="info" @click="handleClick2">Info</el-button>
      <el-button type="warning" @click="handleClick3">Warning</el-button>
      <el-button type="danger" @click="handleClick4">Danger</el-button>
    </div>
    <div class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      console.log("handleClick");
      this.$router.push({
        path: "/carlight"
      })

    },
    handleClick1 () {
      console.log("handleClick1")
    },
    handleClick2 () {
      console.log("handleClick2");

    },
    handleClick3 () {
      console.log("handleClick3");

    },
    handleClick4 () {
      console.log("handleClick4");

    }

  }

}


</script>

<style></style>
