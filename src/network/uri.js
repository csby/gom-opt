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
  // 下载服务: /opt.api/svc/custom/download/:name
  svcCustomDownload: '/opt.api/svc/custom/download/',
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
  svcCustomLogFileContent: '/opt.api/svc/custom/log/file/content/',

  // 系统服务-tomcat
  // 获取服务列表
  svcTomcatList: '/opt.api/svc/tomcat/svc/list',
  // 启动服务
  svcTomcatStart: '/opt.api/svc/tomcat/svc/start',
  // 停止服务
  svcTomcatStop: '/opt.api/svc/tomcat/svc/stop',
  // 重启服务
  svcTomcatRestart: '/opt.api/svc/tomcat/svc/restart',
  // 获取应用列表
  svcTomcatAppList: '/opt.api/svc/tomcat/app/list',
  // 下载应用程序: /opt.api/svc/tomcat/app/download/:name/:app
  svcTomcatAppDownload: '/opt.api/svc/tomcat/app/download/',
  // 上传应用程序
  svcTomcatAppMod: '/opt.api/svc/tomcat/app/mod',
  // 删除应用程序
  svcTomcatAppDel: '/opt.api/svc/tomcat/app/del',
  // 获取配置列表
  svcTomcatCfgTree: '/opt.api/svc/tomcat/cfg/tree',
  // 新建应用配置文件夹
  svcTomcatCfgFolderAdd: '/opt.api/svc/tomcat/cfg/folder/add',
  // 上传应用配置
  svcTomcatCfgMod: '/opt.api/svc/tomcat/cfg/mod',
  // 删除应用配置
  svcTomcatCfgDel: '/opt.api/svc/tomcat/cfg/del',
  // 查看应用配置文件: /opt.api/svc/tomcat/cfg/file/content/:name/:path
  svcTomcatCfgView: '/opt.api/svc/tomcat/cfg/file/content/',
  // 下载应用配置文件: /opt.api/svc/tomcat/cfg/file/download/:name/:path
  svcTomcatCfgDownload: '/opt.api/svc/tomcat/cfg/file/download/',
  // 获取服务日志列表
  svcTomcatLogTree: '/opt.api/svc/tomcat/log/tree',
  // 查看服务日志文件: /opt.api/svc/tomcat/log/file/content/:name/:path
  svcTomcatLogView: '/opt.api/svc/tomcat/log/file/content/',
  // 下载服务日志文件: /opt.api/svc/tomcat/log/file/download/:name/:path
  svcTomcatLogDownload: '/opt.api/svc/tomcat/log/file/download/',
  // 删除服务日志
  svcTomcatLogDel: '/opt.api/svc/tomcat/log/del',

  // 系统服务-其他
  // 获取服务列表
  svcOtherList: '/opt.api/svc/other/svc/list',
  // 启动服务
  svcOtherStart: '/opt.api/svc/other/svc/start',
  // 停止服务
  svcOtherStop: '/opt.api/svc/other/svc/stop',
  // 重启服务
  svcOtherRestart: '/opt.api/svc/other/svc/restart',

  // 系统资源-磁盘
  // 获取磁盘分区信息
  monitorDiskUsageList: '/opt.api/monitor/disk/usage/list',

  // 系统资源-网络
  // 获取网卡信息
  monitorNetworkInterfaceList: '/opt.api/monitor/network/interface/list',
  // 获取网卡吞吐量
  monitorNetworkThroughputList: '/opt.api/monitor/network/throughput/list'

}

export default {
  uris: uri
}
