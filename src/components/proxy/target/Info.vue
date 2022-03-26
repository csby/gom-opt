<template>
  <div class="root">
    <el-table class="content"
              size="small"
              width="100%"
              :border="true"
              :stripe="true"
              :max-height="320"
              :data="targets" >
      <el-table-column prop="domain" label="域名" align="right"/>
      <el-table-column prop="path" label="路径"/>
      <el-table-column label="目标地址:目标端口" align="right" width="220">
        <div slot-scope="scope">
          <table class="table-target">
            <tr>
              <td>{{scope.row.ip}}</td>
              <td>:{{scope.row.port}}</td>
            </tr>
            <template v-if="scope.row.spares" >
              <tr v-for="(item, index) in scope.row.spares" :key="index">
                <td>{{item.ip}}</td>
                <td>:{{item.port}}</td>
              </tr>
            </template>
          </table>
        </div>
      </el-table-column>
      <el-table-column prop="version" label="版本" width="55"/>
      <el-table-column label="已禁用" width="60">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.disable" :disabled="true"/>
        </template>
      </el-table-column>
      <el-table-column label="" width="115" align="left">
        <template slot="header">
          <el-button style="padding: 6px 4px;" icon="el-icon-circle-plus-outline" size="mini" type="primary" @click="addItem()">
            <span >添加目标地址</span>
          </el-button>
        </template>
        <div class="btn" slot-scope="scope">
          <el-button size="mini" style="padding: 3px 5px;" @click="modifyItem(scope.row)">修 改</el-button>
          <el-popconfirm @confirm="deleteItem(scope.row)"
                         style="padding: 0; margin: 0;"
                         :title="'确定要删除该目标地址[' + scope.row.domain + ' => ' + scope.row.ip + ':' + scope.row.port + ']吗？'">
            <el-button slot="reference" style="margin-left: 8px; margin-right: 0px; padding: 3px 5px;" size="mini" type="danger">删 除</el-button>
          </el-popconfirm>
        </div>
      </el-table-column>
    </el-table>
    <targetEditDlg v-model="dialogsVisible.targetEdit"
                   :server-id="serverId"
                   :info="editInfo"
                   :uri="this.$uris.proxyTargetMod"/>
    <targetEditDlg v-model="dialogsVisible.targetAdd"
                   :server-id="serverId"
                   :uri="this.$uris.proxyTargetAdd"
                   title="添加目标地址"/>
  </div>
</template>

<script>
import Component from 'vue-class-component'
import SocketBase from '@/components/SocketBase'
import TargetEditDlg from '@/components/proxy/target/Edit'

@Component({
  components: {
    targetEditDlg: TargetEditDlg
  },
  props: {
    serverId: {
      type: String,
      default: ''
    }
  }
})
class Info extends SocketBase {
  targets = []

  editInfo = {
    id: '',
    domain: '',
    path: '',
    ip: '',
    port: '',
    version: 0,
    disable: false,
    spares: []
  }

  dialogsVisible = {
    targetEdit: false,
    targetAdd: false
  }

  fireTargetCountChanged () {
    this.$emit('targetCountChanged', this.targets.length)
  }

  addItem () {
    this.dialogsVisible.targetAdd = true
  }

  modifyItem (data) {
    this.editInfo = data
    this.dialogsVisible.targetEdit = true
  }

  onDeleteTargets (code, err, data) {
    if (code === 0) {
    } else {
      this.error(err)
    }
  }

  deleteItem (data) {
    const argument = {
      serverId: this.serverId,
      targetId: data.id
    }

    this.post(this.$uris.proxyTargetDel, argument, this.onDeleteTargets)
  }

  onGetTargets (code, err, data) {
    if (code === 0) {
      this.targets = data
    } else {
      this.targets = []
    }

    this.fireTargetCountChanged()
  }

  getTargets () {
    const argument = {
      id: this.serverId
    }
    this.post(this.$uris.proxyTargetList, argument, this.onGetTargets)
  }

  onSocketMessage (id, data) {
    if (id === this.$evt.id.wsReviseProxyTargetMod) {
      if (data && this.targets) {
        if (data.serverId === this.serverId && data.target) {
          const count = this.targets.length
          for (let index = 0; index < count; index++) {
            if (data.target.id === this.targets[index].id) {
              this.targets[index].domain = data.target.domain
              this.targets[index].path = data.target.path
              this.targets[index].ip = data.target.ip
              this.targets[index].port = data.target.port
              this.targets[index].version = data.target.version
              this.targets[index].disable = data.target.disable
              this.targets[index].spares = data.target.spares
            }
          }
        }
      }
    } else if (id === this.$evt.id.wsReviseProxyTargetAdd) {
      if (data && this.targets) {
        if (data.serverId === this.serverId && data.target) {
          this.targets.push(data.target)
          this.fireTargetCountChanged()
        }
      }
    } else if (id === this.$evt.id.wsReviseProxyTargetDel) {
      if (data && this.targets) {
        if (data.serverId === this.serverId) {
          const count = this.targets.length
          for (let index = 0; index < count; index++) {
            if (data.targetId === this.targets[index].id) {
              this.targets.splice(index, 1)
              this.fireTargetCountChanged()
            }
          }
        }
      }
    }
  }

  mounted () {
    this.getTargets()
  }
}

export default Info
</script>

<style scoped>
.root {
}
.root /deep/ .el-table--small td {
  padding: 0;
  margin: 0;
}
.content {
  border-top: 1px solid #ebeef5;
}

.btn {
  display: flex;
  align-items: center;
}
.btn .el-button {
  padding: 4px 8px 4px 8px;
  margin: 0px;
}
.btn .el-button:not(:first-child) {
  margin-left: 5px;
}

.table-target {
  padding: 0px;
  width: 100%;
  border-width: 0;
  background: transparent;
}
.table-target tr {
  border-width: 0;
  padding: 0px;
  background: transparent;
}
.table-target tr td {
  border-width: 0;
  padding: 0px;
  background: transparent;
}
.table-target tr td:first-child {
  text-align: right;
}
.table-target tr td:last-child {
  text-align: left;
  width: 50px;
}
</style>
