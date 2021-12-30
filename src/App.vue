<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  .status-running {
    color: #67C23A;
  }
  .status-stopped {
    color: #F56C6C;
  }
  .status-uninstall {
    color: #909399;
  }
</style>
