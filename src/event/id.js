const ids = {
  // 用户登陆
  // data: {userAccount: "", userName: "", loginIp: "", loginTime: "2019-07-12 20:29:31"}
  wsOptUserLogin: 101,
  // 用户注销
  // data: null
  wsOptUserLogout: 102,

  // 上传并发布后台服务管理网站
  // data: {"id":"96d2197b51f14870b00a01f08b67ae63","name":"测试网站","url":"http://192.168.123.201:8085/apps/test/","root":"/home/dev/projects/go/tmp/site/apps/test","guid":"","version":"","deployTime":"2021-02-12 13:09:25"}
  wsSiteUpload: 110,
  // 根站点-上传文件
  // data: {"url":"http://192.168.123.201:8085/test.txt","name":"test.txt","uploadTime":"2021-02-22 14:10:20"}
  wsRootSiteUploadFile: 111,
  // 根站点-删除文件
  // data: {"name":"test.txt"}
  wsRootSiteDeleteFile: 112,

  // 服务状态改变
  // data: {"name":"example", "status": 0}
  wsSvcStatusChanged: 1011,

  // 添加自定义服务
  // data: {"name":"example", "exec": "", "args": "", "systemName": "svc-example", "displayName": "自定义服务示例",  "description": "", "folder": "", "deployTime": "2021-12-29 08:52:53", "status": 0}
  wsCustomSvcAdded: 1021,
  // 更新自定义服务
  // data: {"name":"example", "exec": "", "args": "", "systemName": "svc-example", "displayName": "自定义服务示例",  "description": "", "folder": "", "deployTime": "2021-12-29 08:52:53", "status": 0}
  wsCustomSvcUpdated: 1022,
  // 删除自定义服务
  // data: {"name":"example"}
  wsCustomSvcDeleted: 1023,

  // 添加tomcat应用
  // data: {"name":"example", "app": ""}
  wsTomcatAppAdded: 1031,
  // 更新tomcat应用
  // data: {"name":"example", "app": ""}
  wsTomcatAppUpdated: 1032,
  // 删除tomcat应用
  // data: {"name":"example", "app": ""}
  wsTomcatAppDeleted: 1033,

  // 添加tomcat配置
  // data: {"name":"example"}
  wsTomcatCfgAdded: 1041,
  // 更新tomcat配置
  // data: {"name":"example"}
  wsTomcatCfgUpdated: 1042,
  // 删除tomcat配置
  // data: {"name":"example"}
  wsTomcatCfgDeleted: 1043,

  // 系统资源-网络
  // data: {"name":"eth0", "flow": {"time": "2022-01-05 12:19:42","bytesSpeedSent": 4230,"bytesSpeedRecv": 9164,"bytesSpeedSentText": "4.1Kbps","bytesSpeedRecvText": "8.9Kbps"}}
  wsNetworkThroughput: 2011
}

export default {
  ids
}
