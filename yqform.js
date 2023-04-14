// 表单组件
const YqForm = {
    props: {
        // 核心属性  【Start】


        // 表单数据
        value: Object,
        // 表单项列表
        items: {
            type: Array,
        },
        // 表单校验规则
        rules:Object,

         // 折叠状态 -- 对应表单项的【folding】属性
        collapseStatus:{
            type: Boolean,
            default: true
        },


        // ----------------------------------------------------------------------------------------------------------------

        //  其他属性  【Start】
         
        	
        // 所有项的栅格占据的列数（共 24 分栏）
        span:{
            type:[String,Number],
            default:24
        },

        // 所有项的内容对齐方式
        align:{
            type:String,
            default:'left'
        },

        // 尺寸
        size: {
            type: String,
            default: 'small', // medium, small, mini
        },

        // 所有项的标题对齐方式
        titleAlign: {
            type: String,
            default: 'left'
        },

        // 所有项的标题宽度
        titleWidth: {
            type: [String, Number],
            default: 'auto'
        },

        //是否显示标题冒号
        titleColon: {
            type: Boolean,
            default: true
        },

        // 所有设置标题内容过长时显示为省略号
        titleOverflow: {
            type: [Boolean,String], // boolean, ellipsis（只显示省略号）|title（并且显示为原生 title）| tooltip（并且显示为 tooltip 提示）
            default: true,// 与 tooltip 一致
        },
        // 给表单附加 className
        className: {
            type: [String, Function], // string, ({ data }) => string
        },

        // 是否显示必填字段的红色星号
        titleAsterisk:{
            type: [Boolean,String], // boolean, left (星号在title左边) | right (星号在title右边)
            default: true
        },
        // 是否加载中 sync
        loading:{
            type:[Boolean,String],
            defalut:false
        }
    },

    data() {
        return {
            formItems: [],
            curSlots: [],  // 过滤出只有renddr插槽的items
            curSlotItems: [], // 过滤出非render的插槽的items
            formRules:{},
        }
    },
    computed:{
        form:{
            get(){
                return this.value
            },
            set(e){
                this.$emit('input',e)
            }
        },

        // 所有表单项
        curItems: {
            get() {
                return this.$refs.vForm.getItems()
            }
        },

        // 是否加载中
        formLoading:{
            get() {
                return this.loading;
            },
            set(e){
                this.$emit('update:loading',e)
            }
        }
    },
    created() {
    },
    mounted() {
        this.init();
    },
    template:/*html*/`
    <vxe-form 
        ref="vForm"
        :data="form" 
        :items="formItems" 
        :rules="formRules"
        :class-name="className"
        :collapseStatus.sync="collapseStatus"
        :size="size"
        :span="span"
        :align="align"
        :title-colon="titleColon" 
        :title-width="titleWidth" 
        :title-align="titleAlign"
        :title-overflow="titleOverflow"
        :title-asterisk="titleAsterisk"
        @collapse="$emit('collapse',$event)"
        prevent-submit
        >
      

<!--           自定义组件 start-->


          <!-- 按钮组 -->
          <template #buttons="{data,item,field}">
            <template v-for="opt in item.slots.props.options">
                <!-- 提交按钮 -->
                <vxe-button v-bind="opt" v-if="['submit'].includes(opt.type)" @click="submit"></vxe-button> 
                <!-- 重置按钮 -->
                <vxe-button v-bind="opt" v-if="['reset'].includes(opt.type)" @click="reset"></vxe-button>

                <vxe-button v-bind="opt" v-if="!['submit','reset'].includes(opt.type)" @click="item.slots.events.click(curItems,type)"></vxe-button>
            </template>
          </template>

            <!-- input类型 -->
            <template #input="{data,item,field}">
                 <vxe-input  v-model="data[field]" v-bind="item.slots.props" @change="item.slots.events?.change({value:data[field],items:curItems})"></vxe-input>
            </template>

            <template #switch="{data,item,field}">
                <vxe-switch  v-model="data[field]" v-bind="item.slots.props"></vxe-switch>
            </template>
            

             
<!--           自定义组件 end-->


        <!-- 插槽 -->
        <template
            v-for='(item) in curSlots'
            #[item.slots.default]="{data,item,field}"
        >
            <slot :name="item.slots.default" v-bind="{data,item,field}" ></slot>
        </template>
    </vxe-form>
    `,
    methods: {
        init() {
            this.formItems = this.initItems(this.items); // 初始化【表单项】
            this.formRules = this.initformRules(this.rules) // 初始化 【表单验证规则】
            this.defaultForm = JSON.parse(JSON.stringify(this.value)); // 初始表单数据 - 用于 重置数据

            this.$nextTick(() => {

                this.curSlotItems = this.curItems.filter(d => d.slots && d.slots.type)
                this.curSlots = this.curItems.filter(d => d.slots && !d.slots.type)
                // 表单渲染完成(包含插槽) - 插槽渲染完毕后对 表单数据进行赋值
                this.form = JSON.parse(JSON.stringify(this.defaultForm));
            })
        },
        initItems(items = []) {
            return items.map(d => {
                const slots = d.slots ? d.slots : d.render ? { default: d.render.type, ...d.render } : null;
                const children = this.initItems(d.children)
                return {
                    ...d,
                    slots,
                    children,
                    span: d.span
                }
            })
        },
        initformRules(rules={}){
            
            return rules;
        },
        
        // 提交表单数据
        async submit(){
            const res = await this.$refs.vForm.validate((error)=>{
                if(error){
                    VXETable.modal.message({content: error[Object.keys(error)[0]][0].rule.$options.message, status: 'warning' ,id: 'unique1'})
                }else{
                    // 验证成功后的表单提交
                    const formData = JSON.parse(JSON.stringify(this.form));

                    this.$emit('submit',formData);
                    // 可以在这里进行提交 请求接口 
                }
            })
        },
        // 重置表单数据
        reset(){
            this.form = JSON.parse(JSON.stringify(this.defaultForm));
            this.$emit('input', this.form)
        },

        /**
         *  设置【表单项】
         * @param {*} field 字段绑定值
         * @param {*} obj 更改表单项属性
         *
         */
        setItems(field, obj = {}) {
            Object.keys(obj).forEach(key => {
                const target = this.curItems.find(d => d.field === field);
                if (target) {
                    Reflect.set(target, key, obj[key]);

                } else {
                    throw '不存在的field' + field
                }
            })
        },
        // 获取表单项 通过 field
        getItems(field){
            if(field){
                return this.curItems.find(d => d.field === field);
            }else{
                return this.curItems;
            }
        },
        // 只对 collapse-node 有效，手动切换折叠状态
        toggleCollapse(){
            this.$refs.vForm.toggleCollapse();
        }

    }
}

Vue.component('YqForm', YqForm)