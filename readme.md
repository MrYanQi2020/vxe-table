# **组件文档**

## **yq-form**  

### **Props 参数**        

| 参数              | 说明                    | 类型 / 返回类型                    | 可选值                                                               | 默认值 / 参数 | 详细说明                     | 是否未完成 |
|-----------------|-----------------------|------------------------------|-------------------------------------------------------------------|----------|--------------------------|-------|
| value/v-model   | 表单数据                  | object                       |                                                                   |          |                          |       |
| loading(支持sync)         | 是否加载中                 | boolean|string               |   false            |   类型string设置加载中文字  |     yes     |    
| span            | 	所有项的栅格占据的列数（共 24 分栏） | number                       |                                                                   | 24       |                          |       |
| align           | 所有项的内容对齐方式            | string                       | left, center, right                                               | left     |                          |       |
| size            | 尺寸                    | string                       | medium, small, mini                                               | small    |                          |       |
| title-align     | 所有项的标题对齐方式            | string                       | left, center, right                                               | left     |                          |       |
| title-width     | 所有项的标题宽度              | string | number              |                                                                   | auto     |                          |       |
| title-colon     | 是否显示标题冒号              | boolean                      |                                                                   | true     |                          |       |
| title-asterisk  | 是否显示必填字段的红色星号         | boolean/string               | left, right                                                       | true     | 类型为string设置 * 号出现位置      | yes   |
| title-overflow  | 所有设置标题内容过长时显示为省略号     | string | boolean             | ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示） | true     |                          |       |
| class-name      | 给表单附加 className       | string, ({ data }) => string |                                                                   |          |                          |       |
| collapse-status | collapse-status       | boolean                      |                                                                   | true     | 控制设置了folding属性的表单项的显示与隐藏 |       |
| items           | 表单项                   | Array                        |                                                                   |          |                          |       |
| rules           | 校验规则配置项             |                              |                                                                   |          |                          |       |  


### **Events 事件**   

| 参数       | 说明                                       | 默认值 / 参数                       |
|----------|------------------------------------------|--------------------------------|
| submit   | 表单验证成功后触发                                | this.$emit('submit',formData); |
| collapse | 当折叠按钮（items里的collapseNode属性）被手动点击时会触发该事件 |                                |


### **Methods 方法**  

| 参数                 | 说明                            | 类型 / 返回类型    | 参数                        |
|--------------------|-------------------------------|--------------|---------------------------|
| reset\(\)          | 重置表单                          | Promise<any> |                           |
| getItems\(\)       | 获取表单项/表单项列表                   | any\[\]      | 传入field返回对应表单项，不传值返回所有表单项 |
| toggleCollapse\(\) | 只对 collapse\-node 有效，手动切换折叠状态 | Promise      |                           |


### **rules 校验规则**

| 参数        | 说明                                                 | 类型 / 返回类型                                                                 | 可选值              | 默认值 / 参数                                              |
|-----------|----------------------------------------------------|---------------------------------------------------------------------------|------------------|-------------------------------------------------------|
| **required**  | 是否必填                                               | 默认值 / 参数                                                                  |                  | false                                                 |
| ~~min~~       | 校验值最小长度（如果 type=number 则比较值大小）                     | 不建议使用，应该用表单项组件来限制                                                                    |                  |                                                       |
| ~~max~~       | 校验值最大长度（如果 type=number 则比较值大小）                     | 不建议使用，应该用表单项组件来限制numbernumber                                                                    |                  |                                                       |
| ~~type~~      | 数据校验的类型                                            | string                                                                    | number，string | string                                                |
| pattern   | pattern                                            | RegExp \| string                                                          |                  |                                                       |
| **validator** | 自定义校验方法，返回一个 Error 或者 Promise<new Error\("提示消息"\)> | \(\{ itemValue, rule, rules, data, property \}\) => Error \| Promise<any> |                  |                                                       |
| message   | 校验提示内容                                             | string                                                                    |                  | 当类型为 requiret 时会自动添加对应的message |






### **items 表单项**

| 参数            | 说明                     | 类型 / 返回类型                           | 可选值                                                               | 默认值 / 参数 |
|---------------|------------------------|-------------------------------------|-------------------------------------------------------------------|----------|
| **field**         | 字段名                    | string                              |                                                                   |          |
| **title**         | 标题                     | string                              |                                                                   |          |
| **span**          | 栅格占据的列数                | number                              |                                                                   | 24       |
| align         | 内容对齐方式                 | string                              | left,center,right                                                 | left     |
| titleAlign    | 标题对齐方式                   | string                              |                                                                   |          |
| titleWidth  | 标题宽度                   | string | number                     |                                                                   | auto     |
| titleColon    | 是否显示标题冒号               | boolean                             |                                                                   | true     |
| titleAsterisk | 是否显示必填字段的红色星号          | boolean                             |                                                                   | false    |
| titleOverflow | 标题内容过长时显示为省略号          | string | boolean                    | ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示） | true     |
| className     | 给表单项附加 className       | string, ({ field, data }) => string |                                                                   |          |
| **visible**       | 默认是否显示                 | boolean                             |                                                                   | true     |
| **visibleMethod** | 该方法的返回值用来决定该项是否显示      | ({ data }) => boolean               |                                                                   |          |
| **folding**       | 是否收起                   | boolean                             |                                                                   | false    |
| **collapseNode**  | 折叠节点(一个用于控制folding的字段) | boolean                             |                                                                   | false    |
| titlePrefix   | 前缀配置项                  | any                                 |                                                                   |          |
| titleSuffix   | 后缀配置项                  | any                                 |                                                                   |          |
| **children**   | 表单项集合                    | any[]                               |                                                                   |          |
| **render**        | 项渲染配置项                 | any                                 |                                                                   |          |
| **slots**         | 插槽                     | any                                 |                                                                   |          |


### **titlePrefix / titleSuffix 前 / 后缀配置项**    

| 参数      | 说明    | 类型     |
|---------|-------|--------|
| content | 提示内容  | string |
| icon    | 自定义图标 | string |



### **render | slot**   渲染器  
   
> render: 使用自定义的内置组件   
> slot: 插槽   

> 组件会在内部将 `render` 转成 `slot` , 所以 `render` 和 `slot` 用法基本一致  
> render的 `type` 属性等同于slot的 `default`


| 参数           | 说明                       | 类型 / 返回类型 | 可选值 | 默认值 / 参数                            |
|--------------|--------------------------|-----------|-----|-------------------------------------|
| type/default | 渲染器名称                    | string    | [^input] \| [^textarea]    |                                     |
| props        | 渲染的参数（请查看目标渲染的 Props）    | any       |     |                                     |
| events       | 渲染组件的事件（请查看目标渲染的 Events） | any       |     | {data, field}, ...[目标渲染的 arguments] |


[^input]:vex-input.md
[^textarea]:vex-textarea.md