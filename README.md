# evan-yy-swagger-bridge 案例

evan-yy-swagger-bridge

注意配置swagger json文档地址 在 _****_ 处替换

## 配置

项目根目录下配置 .swagger-bridge.json 文件
package.json
> swagger 自带接口文档生成的http地址
> RESTful风格接口
> swagger版本 2.9.2

```json
{
  "scripts": {
    "swagger": "yarn gen-swagger"
  }
}
```

## 内容组成

* src 目录下必须存在 services 文件夹
* 每个key对应一个后端swagger地址，会对应生成一个文件
* 生成文件的路径为： src/services/${key}/services.auto.ts
* ts类型的模版会同时生成一个.d.ts声明文件，路径为：/src/types/typing${key}.d.ts

内容如下：

```json
{
  "datapub": {
    "url": "http://localhost:8000/website/swagger/swagger-datapub.json",
    "mock-data": false,
    "unittest": false,
    "exclude": ["/test/"],
    "version": "3"
  },
  "platform": {
    "url": "http://localhost:8000/website/swagger/swagger-platform.json",
    "mock-data": false,
    "unittest": false,
    "exclude": ["/test/"],
    "version": "3"
  },
  "default": {
    "url": "http://localhost:8000/website/swagger/swagger-de.json",
    "mock-data": false,
    "unittest": false,
    "exclude": [],
    "version": "3"
  }
}
```
