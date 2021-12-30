<template>
  <div>
    <div class="header">
      <i class="el-icon-setting"></i>
      <span>自定义服务</span>
      <el-badge class="badge" type="info" :value="itemCount" v-if="itemCount > 0"/>
      <div>
        <el-tooltip placement="left">
          <div slot="content">
            <span>刷新</span>
          </div>
          <el-button type="text" icon="el-icon-refresh" @click="doGetList"/>
        </el-tooltip>
      </div>
    </div>
    <div class="table">
      <el-table v-loading="info.loading"
                aelement-loading-text="加载中..."
                element-loading-spinner="el-icon-loading"
                size="small"
                :data="info.items"
                :border="true"
                :stripe="true">
        <el-table-column type="expand">
          <div slot-scope="scope" class="cell-expand">
            <div>
              <span>服务名称:</span>
              <span>{{scope.row.serviceName}}</span>
            </div>
            <div>
              <span>项目名称:</span>
              <span>{{scope.row.name}}</span>
            </div>
            <div>
              <span>显示名称:</span>
              <span>{{scope.row.displayName}}</span>
            </div>
            <div>
              <span>描述信息:</span>
              <span>{{scope.row.description}}</span>
            </div>
            <div>
              <span>物理目录:</span>
              <span>{{scope.row.folder}}</span>
            </div>
            <div>
              <span>发布时间:</span>
              <span>{{scope.row.deployTime}}</span>
            </div>
            <div>
              <span>执行程序:</span>
              <span>{{scope.row.exec}}</span>
            </div>
            <div>
              <span>启动参数:</span>
              <span>{{scope.row.args}}</span>
            </div>
          </div>
        </el-table-column>
        <el-table-column
            label="项目"
            prop="displayName" />
        <el-table-column label="状态" width="100px">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 1" class="status-running">运行中</span>
            <span v-else-if="scope.row.status === 2" class="status-stopped">已停止</span>
            <span v-else class="status-uninstall">未安装</span>
          </template>
        </el-table-column>
        <el-table-column width="165px">
          <template slot="header">
            <el-button type="text" size="small" @click="add.visible = true">添加新服务</el-button>
          </template>
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="doMod(scope.row)">更新</el-button>
            <template v-if="scope.row.status === 0">
              <el-button type="text" size="small" @click="doAction(scope.row.name, act.install)">安装</el-button>
              <el-popconfirm :title="'确定要删除服务(' + scope.row.displayName + ')吗？'"
                             @confirm="doAction(scope.row.name, act.del)">
                <el-button slot="reference" type="text" size="small">删除</el-button>
              </el-popconfirm>
            </template>
            <template v-if="scope.row.status === 1">
              <el-button type="text" size="small" @click="doAction(scope.row.name, act.stop)">停止</el-button>
              <el-button type="text" size="small" @click="doAction(scope.row.name, act.restart)">重启</el-button>
            </template>
            <template v-if="scope.row.status === 2">
              <el-button type="text" size="small" @click="doAction(scope.row.name, act.start)">启动</el-button>
              <el-button type="text" size="small" @click="doAction(scope.row.name, act.uninstall)">卸载</el-button>
            </template>
            <el-button type="text" size="small" @click="doGetLogFileList(scope.row.name, scope.row.displayName)">日志</el-button>
          </template>
        </el-table-column>
        <template slot="empty">
            <span v-if="isError" class="error">
                <i class="el-icon-error"></i>
                <div class="error-summary">{{error.summary}}</div>
                <div class="error-detail">{{error.detail}}</div>
            </span>
            <span v-else>暂无数据</span>
        </template>
      </el-table>
    </div>

    <div>
      <fileUpload v-model="add.visible"
                  width="500px"
                  labelWidth="60px"
                  title="上传并安装新的自定义系统服务"
                  :uri="add.uri">
        <div>
          <div>
            <span>根目录中必须包含服务信息文件(info.json)</span>
          </div>
          <pre>{{info.json}}</pre>
        </div>
      </fileUpload>

      <fileUpload v-model="mod.visible"
                  width="580px"
                  labelWidth="100px"
                  :title="'上传并更新自定义系统服务: ' + mod.displayName"
                  :forms="mod.forms"
                  :uri="mod.uri">
        <el-form-item label="目标服务名称">
          <el-input v-model="mod.forms[0].value" :readonly="true"/>
        </el-form-item>
        <div>
          <div>
            <span>根目录中必须包含服务信息文件(info.json)</span>
          </div>
          <pre>{{info.json}}</pre>
        </div>
      </fileUpload>

      <el-drawer class="drawer" direction="rtl" size="500px"
                 :append-to-body="true"
                 :destroy-on-close="true"
                 :visible.sync="log.visible">
        <div slot="title" class="drawer-header">
          <i class="el-icon-files"></i>
          <span>日志文件列表 [{{log.displayName}}]</span>
          <el-tooltip placement="left">
            <div slot="content">
              <span>刷新</span>
            </div>
            <el-button type="text" icon="el-icon-refresh" @click="doGetLogFileList(log.name, log.displayName)"/>
          </el-tooltip>
        </div>
        <div class="drawer-body table">
          <el-table v-loading="log.loading"
                    aelement-loading-text="加载中..."
                    element-loading-spinner="el-icon-loading"
                    size="small"
                    :data="log.items"
                    :border="true"
                    :stripe="true">
            <el-table-column
                label="文件名称"
                prop="name" />
            <el-table-column
                label="文件大小"
                prop="sizeText"
                width="105px" />
            <el-table-column
                label="操作"
                width="95px" >
              <template slot-scope="scope" class="scope">
                <a :href="toViewerUrl(scope.row.path)" target="_blank">
                  <el-button type="text" class="btn" size="small" >
                    <span>查看</span>
                  </el-button>
                </a>
                <a :href="toDownloadUrl(scope.row.path)" target="_blank">
                  <el-button type="text" class="btn" size="small" >
                    <span>下载</span>
                  </el-button>
                </a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component'
import SocketBase from '@/components/SocketBase'
import FileUpload from '@/components/dlg/FileUpload'

@Component({
  components: {
    fileUpload: FileUpload
  }
})
class Index extends SocketBase {
  info = {
    loading: false,
    items: [],
    error: {
      summary: '',
      detail: ''
    },
    json: '{\n' +
        '\t"name": "项目名称, 必填",\n' +
        '\t"exec": "可执行程序, 必填",\n' +
        '\t"args": "程序启动参数, 可选",\n' +
        '\t"displayName": "显示名称, 可选",\n' +
        '\t"description": "描述信息, 可选"\n' +
        '}'
  }

  add = {
    visible: false,
    uri: this.$uris.svcCustomAdd
  }

  mod = {
    visible: false,
    uri: this.$uris.svcCustomMod,
    forms: [
      {
        name: 'name',
        value: ''
      }
    ],
    displayName: ''
  }

  act = {
    del: this.$uris.svcCustomDel,
    install: this.$uris.svcCustomInstall,
    uninstall: this.$uris.svcCustomUninstall,
    start: this.$uris.svcCustomStart,
    stop: this.$uris.svcCustomStop,
    restart: this.$uris.svcCustomRestart
  }

  log = {
    visible: false,
    loading: false,
    name: '',
    displayName: '',
    items: [],
    error: {
      summary: '',
      detail: ''
    }
  }

  protocol = document.location.protocol
  host = this.$db.get(this.$db.keys.host)
  token = this.$db.get(this.$db.keys.token)
  downloadUri = this.$uris.svcCustomLogFileDownload
  viewerUri = this.$uris.svcCustomLogFileContent

  get itemCount () {
    return this.info.items.length
  }

  get isError () {
    if (this.isNotNullOrEmpty(this.info.error.summary) || this.isNotNullOrEmpty(this.info.error.detail)) {
      return true
    } else {
      return false
    }
  }

  toDownloadUrl (path) {
    return this.protocol + '//' + this.host + this.downloadUri + path + '?token=' + this.token
  }

  toViewerUrl (path) {
    return this.protocol + '//' + this.host + this.viewerUri + path + '?token=' + this.token
  }

  doMod (item) {
    if (!item) {
      return
    }

    this.mod.forms[0].value = item.name
    this.mod.displayName = item.displayName
    this.mod.visible = true
  }

  onAction (code, err, data) {
    if (code === 0) {
    } else {
      this.error(err)
    }
  }

  doAction (name, uri) {
    const argument = {
      name: name
    }
    this.post(uri, argument, this.onAction)
  }

  onGetLogFileList (code, err, data) {
    this.log.loading = false
    if (code === 0) {
      this.log.items = data
    } else {
      this.log.items = []
      this.log.error.summary = err.summary
      this.log.error.detail = err.detail
    }
  }

  doGetLogFileList (name, displayName) {
    if (this.log.loading) {
      return
    }

    this.log.name = name
    this.log.displayName = displayName
    this.log.loading = true
    const argument = {
      name: name
    }
    this.log.error.summary = ''
    this.log.error.detail = ''
    this.log.visible = true
    this.post(this.$uris.svcCustomLogFileList, argument, this.onGetLogFileList)
  }

  onGetList (code, err, data) {
    this.info.loading = false
    if (code === 0) {
      this.info.items = data
    } else {
      this.info.items = []
      this.info.error.summary = err.summary
      this.info.error.detail = err.detail
    }
  }

  doGetList () {
    if (this.info.loading) {
      return
    }

    this.info.loading = true
    this.info.error.summary = ''
    this.info.error.detail = ''
    this.post(this.$uris.svcCustomList, null, this.onGetList)
  }

  onSocketMessage (id, data) {
    if (id === this.$evt.id.wsSvcStatusChanged) {
      if (data && this.info.items) {
        const count = this.info.items.length
        for (let index = 0; index < count; index++) {
          const item = this.info.items[index]
          if (item) {
            if (data.name === item.serviceName) {
              item.status = data.status
              break
            }
          }
        }
      }
    } else if (id === this.$evt.id.wsCustomSvcAdded) {
      this.info.items.push(data)
    } else if (id === this.$evt.id.wsCustomSvcUpdated) {
      if (data && this.info.items) {
        const count = this.info.items.length
        for (let index = 0; index < count; index++) {
          const item = this.info.items[index]
          if (item) {
            if (data.name === item.name) {
              item.exec = data.exec
              item.args = data.args
              item.displayName = data.displayName
              item.description = data.description
              item.deployTime = data.deployTime
              break
            }
          }
        }
      }
    } else if (id === this.$evt.id.wsCustomSvcDeleted) {
      if (data && this.info.items) {
        const count = this.info.items.length
        for (let index = 0; index < count; index++) {
          const item = this.info.items[index]
          if (item) {
            if (data.name === item.name) {
              this.info.items.splice(index, 1)
              break
            }
          }
        }
      }
    }
  }

  mounted () {
    this.doGetList()
  }
}

export default Index
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0px 8px;
    background-color: #f8f8f8;
  }
  .header /deep/ .el-button {
    padding: 0px 2px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: medium;
  }
  .header :not(:first-child) {
    margin-left: 3px;
  }
  .header i:first-child {
    margin-top: 2px;
  }
  .header div:last-child {
    flex: 1;
    text-align: right;
  }
  .badge {
    padding: 0;
    margin-top: 3px;
  }

  .table {
  }
  .table /deep/ .el-table th.el-table__cell {
    padding: 2px 0px;
    margin: 0;
  }
  .table /deep/ .el-table--small td {
    padding: 0;
    margin: 0;
  }
  .table /deep/ .el-button {
    padding: 1px 8px 0px 0px;
    margin: 0;
  }

  .cell-expand {
    padding: 2px 4px 2px 55px;
  }
  .cell-expand div {
    padding: 2px 0px;
  }
  .cell-expand div :first-child {
    text-align: right;
    padding-right: 5px;
    color: darkgray;
  }

  .drawer {
  }
  .drawer /deep/ .el-drawer__header{
    background-color: #0078D7;
    color: white;
    padding: 2px 10px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .drawer /deep/ .el-drawer__body{
    margin: 0;
    padding: 0;
    min-height: calc(100% - 30px);
    max-height: calc(100% - 30px);
    overflow: auto;
  }
  .drawer-header{
    height: 26px;
    display: flex;
    align-items: center;
  }
  .drawer-header /deep/ .el-button {
    padding: 0px 3px;
    font-size: medium;
    color: #f2f2f2;
  }
  .drawer-header i{
    padding-right: 5px;
  }
  .drawer-header :last-child {
    flex: 1;
    text-align: right;
  }
  .drawer-body{
    min-height: 100%;
  }
</style>
