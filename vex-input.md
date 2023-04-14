[^back]

[^back]:readme.md

# **vxe-input**  
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


## **Props 参数** 

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


## Slot 插槽   


| 参数     | 说明     |
|--------|--------|
| prefix | 前缀图标模板 |
| suffix | 后缀图标模板 |   

## Events 事件

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

## **Methods 方法**   

| 参数      | 说明       | 返回值     |
|---------|----------|---------|
| focus() | 使输入框获取焦点 | Promise |
| blur()  | 使输入框失去焦点 | Promise |






   



















