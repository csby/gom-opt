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
  wsNetworkThroughput: 2011,

  // 系统资源-CPU
  // data: {"time": "2022-01-05 12:19:42","usage": 35.7}}
  wsCpuUsage: 2012,

  // 反向代理服务状态信息
  // data: {"status":1,"startTime":null,"error":""}
  wsReviseProxyServiceStatus: 3001,
  // 反向代理连接已打开
  // data:
  wsReviseProxyConnectionOpen: 3002,
  // 反向代理连接已关闭
  // data:
  wsReviseProxyConnectionShut: 3003,
  // 反向代理添加服务器
  // data: {"id":"6619850aec7340788f43eb6075d9dc91","name":"http","disable":false,"tls":false,"ip":"","port":"80"}
  wsReviseProxyServerAdd: 3011,
  // 反向代理删除服务器
  // data: {"id":"b0962e13f8734cd9b844556ffd7706ac"}
  wsReviseProxyServerDel: 3012,
  // 反向代理修改服务器
  // data: {"id":"6619850aec7340788f43eb6075d9dc91","name":"http","disable":true,"tls":true,"ip":"","port":"80"}
  wsReviseProxyServerMod: 3013,
  // 反向代理添加目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","target":{"id":"f7bc87bb3c3d4c0baa1f77028b8a2924","domain":"tt","ip":"22","port":"24","version":0,"disable":false}}
  wsReviseProxyTargetAdd: 3021,
  // 反向代理删除目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","targetId":"f7bc87bb3c3d4c0baa1f77028b8a2924"}
  wsReviseProxyTargetDel: 3022,
  // 反向代理修改目标地址
  // data: {"serverId":"99b1d5cfba734176a68f1521d704f022","target":{"id":"76cacef32eac4ebe9d8aa575b28f409b","domain":"test.com","ip":"172.16.99.70","port":"443","version":1,"disable":false}}
  wsReviseProxyTargetMod: 3023
}

export default {
  ids
}
