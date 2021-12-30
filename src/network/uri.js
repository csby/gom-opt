const uri = {
  // 获取获取验证码
  getCaptcha: '/opt.api/captcha',
  // 用户登录
  login: '/opt.api/login',
  // 退出登录
  logout: '/opt.api/logout',
  // 获取登录账号
  getLoginAccount: '/opt.api/login/account',
  // 获取在线用户
  getOnlineUsers: '/opt.api/online/users',

  // 通知订阅
  websocketNotify: '/opt.api/websocket/notify',

  // 后台服务
  // 获取服务信息
  svcInfo: '/opt.api/service/info',
  // 是否可在线重启
  svcRestartEnable: '/opt.api/service/restart/enable',
  // 重启服务
  svcRestart: '/opt.api/service/restart',
  // 是否可在线更新
  svcUpdateEnable: '/opt.api/service/update/enable',
  // 更新服务
  svcUpdate: '/opt.api/service/update',

  // 更新管理
  // 是否支持
  updEnable: '/opt.api/update/enable',
  // 获取服务信息
  updInfo: '/opt.api/update/info',
  // 是否可在线重启
  updRestartEnable: '/opt.api/update/restart/enable',
  // 重启服务
  updRestart: '/opt.api/update/restart',
  // 是否可在线更新
  updUploadEnable: '/opt.api/update/upload/enable',
  // 更新服务
  updUpload: '/opt.api/update/upload',

  // 系统信息
  // 获取主机信息
  monitorHost: '/opt.api/monitor/host',
  // 获取网卡信息
  monitorNetworkInterfaces: '/opt.api/monitor/network/interfaces',
  // 获取监听端口
  monitorListenPorts: '/opt.api/monitor/network/listen/ports',

  // 网站管理
  // 根站点
  // 获取文件列表
  siteRootFileList: '/opt.api/site/root/file/list',
  // 上传文件
  siteRootFileUpload: '/opt.api/site/root/file/upload',
  // 删除文件
  siteRootFileDelete: '/opt.api/site/root/file/delete',
  // 应用站点
  // 获取网站列表(ID)
  siteWebAppList: '/opt.api/site/app/list',
  // 获取网站信息
  siteWebAppInfo: '/opt.api/site/app/info',
  // 上传网站
  siteWebAppUpload: '/opt.api/site/app/upload',

  // 系统服务-自定义
  // 获取服务列表
  svcCustomList: '/opt.api/svc/custom/list',
  // 添加服务
  svcCustomAdd: '/opt.api/svc/custom/add',
  // 更新服务
  svcCustomMod: '/opt.api/svc/custom/mod',
  // 删除服务
  svcCustomDel: '/opt.api/svc/custom/del',
  // 安装服务
  svcCustomInstall: '/opt.api/svc/custom/install',
  // 卸载服务
  svcCustomUninstall: '/opt.api/svc/custom/uninstall',
  // 启动服务
  svcCustomStart: '/opt.api/svc/custom/start',
  // 停止服务
  svcCustomStop: '/opt.api/svc/custom/stop',
  // 重启服务
  svcCustomRestart: '/opt.api/svc/custom/restart',
  // 获取服务日志文件列表
  svcCustomLogFileList: '/opt.api/svc/custom/log/file/list',
  // 下载服务日志文件: /opt.api/svc/custom/log/file/download/:path
  svcCustomLogFileDownload: '/opt.api/svc/custom/log/file/download/',
  // 查看服务日志文件: /opt.api/svc/custom/log/file/content/:path
  svcCustomLogFileContent: '/opt.api/svc/custom/log/file/content/'
}

export default {
  uris: uri
}
