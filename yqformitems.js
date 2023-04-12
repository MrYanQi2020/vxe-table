// 自定义表单组件
const YqFormItems = {
    props: {
        value: [String, Number, Boolean, Array, Object, null, Promise], // v-model 值 // 表单项数据
        item: Object, // 表单项
        field: String, // 绑定字段
    },
    data() {
        return {
            itemValue: null,// 表单项数据
        }
    },
    watch: {
        itemValue: {
            deep: true,
            immediate: true,
            handler(val) {
                this.$emit('input', val)
            }
        }
    },
    template:/*html*/`
       <div class="yq-form-item-content">
            <!-- input类型 -->
            <vxe-input v-if="item.slots.default=='input'" v-model="itemValue" v-bind="item.slots.props"></vxe-input>

            <vxe-switch v-if="item.slots.default=='switch'"  v-model="itemValue" v-bind="item.slots.props"></vxe-switch>
            
       </div>
    `
}
Vue.component('YqFormItems', YqFormItems)
