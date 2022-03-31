<template>
  <div class="navigation">
    <div class="btn" @click="menuCollapse = !menuCollapse">
      <span v-if="menuCollapse" class="icon">
          <i class="el-icon-s-unfold" />
      </span>
      <span v-else class="icon">
          <i class="el-icon-s-data" />
      </span>
    </div>

    <el-menu class="menu" :style="heightStyle"
             :collapse="menuCollapse"
             :router="true"
             :default-active="defaultActive">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">服务面板</span>
      </el-menu-item>
      <el-submenu index="/monitor/disk/partition">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span>系统资源</span>
        </template>
        <el-menu-item index="/monitor/disk/partition">
          <i class="el-icon-coin"></i>
          <span slot="title">磁盘</span>
        </el-menu-item>
        <el-menu-item index="/monitor/network/interface">
          <i class="el-icon-set-up"></i>
          <span slot="title">网络</span>
        </el-menu-item>
        <el-menu-item index="/monitor/cpu/usage">
          <i class="el-icon-cpu"></i>
          <span slot="title">处理器</span>
        </el-menu-item>
        <el-menu-item index="/monitor/mem/usage">
          <i class="el-icon-notebook-2"></i>
          <span slot="title">内存</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/svc/custom">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统服务</span>
        </template>
        <el-menu-item index="/svc/tomcat">
          <i class="el-icon-setting"></i>
          <span slot="title">tomcat</span>
        </el-menu-item>
        <el-menu-item index="/svc/nginx">
          <i class="el-icon-setting"></i>
          <span slot="title">nginx</span>
        </el-menu-item>
        <el-menu-item index="/svc/custom">
          <i class="el-icon-setting"></i>
          <span slot="title">自定义</span>
        </el-menu-item>
        <el-menu-item index="/svc/other">
          <i class="el-icon-setting"></i>
          <span slot="title">其他</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/port/fwd/proxy">
        <i class="el-icon-share"></i>
        <span slot="title">端口转发</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Component from 'vue-class-component'
import VueBase from '@/components/VueBase'

@Component({
  props: {
    minHeight: {
      type: Number,
      default: 100
    },
    defaultActive: {
      type: String,
      default: ''
    }
  }
})
class Catalog extends VueBase {
  menuCollapse = false

  get heightStyle () {
    const minHeight = (this.minHeight - 25) + 'px'
    return {
      'min-height': minHeight
    }
  }
}

export default Catalog
</script>

<style scoped>
.navigation {
}

.navigation .btn {
  display: flex;
  align-items: center;
  height: 25px;
  background-color: #f8f8f8;
  border-right: 1px solid #e6e6e6;
  cursor: pointer;
}

.navigation .menu {
}
.navigation .menu:not(.el-menu--collapse) {
  width: 200px;
}

</style>
