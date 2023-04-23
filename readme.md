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
| title-width     | 所有项的标题宽度              | string | number              |                                                                   | 120     |                          |       |
| title-colon     | 是否显示标题冒号              | boolean                      |                                                                   | true     |                          |       |
| title-asterisk  | 是否显示必填字段的红色星号         | boolean/string               | left, right                                                       | true     | 类型为string设置 * 号出现位置      | yes   |
| title-overflow  | 所有设置标题内容过长时显示为省略号     | string | boolean             | ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示） | true     |                          |       |
| class-name      | 给表单附加 className       | string, ({ data }) => string |                                                                   |          |                          |       |
| collapse-status | collapse-status       | boolean                      |                                                                   | true     | 控制设置了folding属性的表单项的显示与隐藏 |       |
| items           | 表单项                   | Array                        |                                                                   |          |                          |       |



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



### **items 表单项**

| 参数            | 说明                     | 类型 / 返回类型                           | 可选值                                                               | 默认值 / 参数 |
|---------------|------------------------|-------------------------------------|-------------------------------------------------------------------|----------|
| **field**         | 字段名                    | string                              |                                                                   |          |
| **title**         | 标题                     | string                              |                                                                   |          |
| **span**          | 栅格占据的列数                | number                              |                                                                   | 24       |
| **required**          | 是否必填                | boolean                              |                                                                   | false       |
| align         | 内容对齐方式                 | string                              | left,center,right                                                 | left     |
| titleAlign    | 标题对齐方式                   | string                              |    left,center,right                                            |    right     |
| titleWidth  | 标题宽度                   | string | number                     |                                                                   | auto     |
| titleColon    | 是否显示标题冒号               | boolean                             |                                                                   | true     |
| titleAsterisk | 是否显示必填字段的红色星号          | boolean                             |                                                                   | true    |
| titleOverflow | 标题内容过长时显示为省略号          | string | boolean                    | ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示） | true     |
| className     | 给表单项附加 className       | string, ({ field, data }) => string |                                                                   |          |
| **rules**   | 验证规则                    | any[]                               |                                                                   |          |
| **visible**       | 默认是否显示                 | boolean                             |                                                                   | true     |
| **visibleMethod** | 该方法的返回值用来决定该项是否显示      | ({ data }) => boolean               |                                                                   |          |
| **folding**       | 是否收起                   | boolean                             |                                                                   | false    |
| **collapseNode**  | 折叠节点(一个用于控制folding的字段) | boolean                             |                                                                   | false    |
| titlePrefix   | 前缀配置项                  | any                                 |                                                                   |          |
| titleSuffix   | 后缀配置项                  | any                                 |                                                                   |          |
| **children**   | 表单项集合                    | any[]                               |                                                                   |          |
| **render**        | 项渲染配置项                 | any                                 |                                                                   |          |
| **slots**         | 插槽                     | any                                 |                                                                   |          |


### **rules 校验规则**

| 参数        | 说明                                                 | 类型 / 返回类型                                                                 | 可选值              | 默认值 / 参数                                              |
|-----------|----------------------------------------------------|---------------------------------------------------------------------------|------------------|-------------------------------------------------------|
| **required**  | 是否必填                                               | 默认值 / 参数                                                                  |                  | false                                                 |
| ~~min~~       | 校验值最小长度（如果 type=number 则比较值大小）                     | 不建议使用，应该用表单项组件来限制                                                                    |                  |                                                       |
| ~~max~~       | 校验值最大长度（如果 type=number 则比较值大小）                     | 不建议使用，应该用表单项props来限制maxlength,max,min                                                                  |                  |                                                       |
| ~~type~~      | 数据校验的类型                                            | string                                                                    | number，string | string                                                |
| pattern   | pattern                                            | RegExp \| string                                                          |                  |                                                       |
| **validator** | 自定义校验方法，返回一个 Error 或者 Promise<new Error\("提示消息"\)> | \(\{ itemValue, rule, rules, data, property \}\) => Error \| Promise<any> |                  |                                                       |
| message   | 校验提示内容                                             | string                                                                    |                  | 当类型为 requiret 时会自动添加对应的message |



### **titlePrefix / titleSuffix 前 / 后缀配置项**    

| 参数      | 说明    | 类型     |
|---------|-------|--------|
| content | 提示内容  | string |
| icon    | 自定义图标 | string |



### **render | slot**   渲染器  
   
> render: 使用自定义的内置组件   
> slot: 插槽   

> 组件会在内部将 `render` 转成 `slot` , 所以 `render` 和 `slot` 用法基本一致  
> render的 `type` 属性等同于slot的 `default`属性


| 参数           | 说明                       | 类型 / 返回类型 | 可选值 | 默认值 / 参数                            |
|--------------|--------------------------|-----------|-----|-------------------------------------|
| type/default | 渲染器名称                    | string    | input,buttons    |                                     |
| props        | 渲染的参数（请查看目标渲染的 Props）    | any       |     |                                     |
| events       | 渲染组件的事件（请查看目标渲染的 Events） | any       |     | {data, field}, ...[目标渲染的 arguments] |



## **vxe-input**  
> 渲染器的`input`类型   

**支持类型：**
- 文本输入 `text`
- 搜索输入 `search`
- 密码输入 `password`
- 数值输入 `number`
- 整数输入 `integer`
- 小数输入 `float`
- 日期选择 `date`
- 日期和时间选择 `datetime`  
- 时间选择器 `time`
- 周选择器 `week`
- 月选择器 `month`
- 季选择器 `quarter`
- 年选择器 `year`   


### **Props 参数** 

| 参数           | 说明                                             | 类型 / 返回类型       | 可选值                                                                                              | 默认值 / 参数 |
|--------------|------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------|----------|
| modelValue   | v-model 绑定值                                    | any             |                                                                                                  |          |
| **type**        | 渲染类型                                           | string          | text, search, number, integer, float, password, date, time, datetime, week, month, quarter, year | text     |
| placeholder  | 当值为空时，显示的占位符                                   | string          |                                                                                                  |          |
| size         | 尺寸                                             | string          | medium, small, mini                                                                              |          |
| **clearable**    | 当有值时，是否在右侧显示清除按钮                               | boolean         |                                                                                                  | true     |
| autocomplete | 原生 autocomplete 属性                             | string          |                                                                                                  | off      |
| **maxlength**    | 原生 maxlength 属性                                | string，number   |                                                                                                  |          |
| **multiple**     | 只对 type=date、week、month、quarter、year 有效，是否启用多选 | boolean         |                                                                                                  | false    |
| **readonly**     | 是否只读                                           | boolean         |                                                                                                  | false    |
| **disabled**     | 是否禁用                                           | boolean         |                                                                                                  | false    |
| className    | className                                      | string          |                                                                                                  |          |
| prefix-icon  | 头部图标                                           | string          |                                                                                                  |          |
| suffix-icon  | 尾部图标                                           | string          |                                                                                                  |          |
| **min**          | 只对 type=number、integer、float 有效，最小值            | string | number |                                                                                                  |          |
| **max**          | 只对 type=number、integer、float 有效，最小值            | string | number |                                                                                                  |          |
| step         | 只对 type=number、integer、float 有效，数字间隔           | number| string  |                                                                                                  | 1        |
| digits       | 只对 type=float 有效，小数位数                          | number| string  |                                                                                                  | 2        |
| align        | 内容对齐方式                                         | string          |                                                                                                  | left     |
| exponential  | 只对 type=number、integer、float 有效，数值是否允许输入科学计数   | boolean         |                                                                                                  | false    |
| controls        | 只对 type=number、integer、float 有效，是否显示控制按钮                                                            | boolean                         |                     | true     |
| start-day       | 设置每周的起始日期是星期几                                                                                       | number | string                 | 0, 1, 2, 3, 4, 5, 6 | 1        |
| select-day      | 只对 type=week 有效，设置周视图选中后返回星期几                                                                       | number | string                 | number | string     | 1        |
| **label-format**    | 只对 type=date、datetime、week、month、quarter、year 有效，输入框中显示的日期格式                                        | string                          |                     |          |
| **value-format**    | 只对 type=date、datetime、week、month、quarter、year 有效，绑定值的返回格式，默认返回对应type的字符串                            |                                 |                     |          |
| editable        | 只对 type=date、time、datetime、week、month、quarter、year 有效，文本框是否允许输入                                     | boolean                         |                     | true     |
| **disabled-method** | 只对 type=date、datetime、week、month、quarter、year 有效，该方法的返回值用来决定该日期是否允许选中                               | ({ date, viewType }) => boolean |                     |          |
| festival-method | 只对 type=date、datetime、week、month、quarter、year 有效，该方法用于返回对应日期显示的节日                                   | ({ date, viewType }) => any     |                     |          |
| transfer        | 只对 type=date、time、datetime、week、month、quarter、year 有效，是否将弹框容器插入于 body 内（对于嵌入到表格或者弹窗中被遮挡时需要设置为 true） | boolean                         |                     |          |


### Slot 插槽   


| 参数     | 说明     |
|--------|--------|
| prefix | 前缀图标模板 |
| suffix | 后缀图标模板 |   

### Events 事件

| 参数             | 说明                                                        | 默认值 / 参数                   |
|----------------|-----------------------------------------------------------|----------------------------|
| input          | 在键盘输入时触发该事件                                               | 	{ value, $event }         |
| change         | 在键盘输入时值发生变化时触发该事件                                         | 	{ value, $event }         |
| keydown        | 在键盘输入按下时触发该事件                                             | 	{ value, $event }         |
| keyup          | 在键盘输入按下弹起时触发该事件                                           | 	{ value, $event }         |
| click          | 在点击输入框时触发该事件                                              | 	{ value, $event }         |
| focus          | 在输入框聚焦时触发该事件                                              | 	{ value, $event }         |
| blur           | 在输入框失焦时触发该事件                                              | 	{ value, $event }         |
| clear          | 在点击右侧清除按钮时触发该事件                                           | 	{ value, $event }         |
| search-click   | 只对 type=search 有效，在点击右侧搜索按钮时触发该事件                         | 	{ value, $event }         |
| toggle-visible | 只对 type=password 有效，在点击右侧切换按钮时触发该事件                       | { value, visible, $event } |
| prev-number    | 只对 type=number 有效，在点击右侧向上按钮时触发该事件                         | 	{ value, $event }         |
| next-number    | 只对 type=number 有效，在点击右侧向下按钮时触发该事件                        | 	{ value, $event }         |
| prefix-click   | 在点击头部图标时触发该事件                                             | 	{ value, $event }         |
| suffix-click   | 在点击尾部图标时触发该事件                                             | 	{ value, $event }         |
| date-prev      | 只对 type=date、datetime、week、month、year 有效，在点击上一个视图按钮时触发该事件 | 	{ value, $event }         |
| date-today     | 只对 type=date、datetime、week、month、year 有效，在点击到今天视图按钮时触发该事件 | 	{ value, $event }         |
| date-next      | 只对 type=date、datetime、week、month、year 有效，在点击下一个视图按钮时触发该事件 | 	{ value, $event }         |

### **Methods 方法**   

| 参数      | 说明       | 返回值     |
|---------|----------|---------|
| focus() | 使输入框获取焦点 | Promise |
| blur()  | 使输入框失去焦点 | Promise |  


