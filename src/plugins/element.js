//暂时不支持vite的按需引入 vue3.0结合babel-plugin-import可以实现按需引入
//vite-babel-plugin ->使vite能够根据.babelrc设置babel相关操作
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElUpload,
  ElSwitch,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTable,
  ElTableColumn,
  ElDivider,
  ElDialog,
  ElImage,
  ElImageViewer
} from 'element-plus';
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElUpload,
  ElSwitch,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTable,
  ElTableColumn,
  ElDivider,
  ElDialog,
  ElImage,
  ElImageViewer
]
const plugins = []
export default (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}