import { ElMenu, ElSubmenu, ElMenuItem, ElIcon } from 'element-plus';
import { useRouter } from 'vue-router'
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'SideMenu',
  setup() {
    const router = useRouter()
    const routes = router.options.routes
    // 渲染icon图标
    function renderIcon(icon) {
      return !icon || icon === 'none' ? null : h('i', { class: icon })
    }
    // 渲染控制条件
    function renderItem(menu, pIndex, index) {
      if (menu.meta && menu.meta.isShow) {
        if (menu.children && menu.children.length) {
          console.log('===============')
          console.log(menu)
          console.log('===============')
          let itemArr = []
          let pIndex_ = `${pIndex}_${index}`
          menu.children.forEach((item, i) => {
            itemArr.push(renderItem(item, pIndex_, i))
          });
          return h(
            ElSubmenu,
            {
              key: menu.path ? menu.path : `submenu_${pIndex}_${index}`
            },
            itemArr
          )
        } else {
          return h(
            ElMenuItem,
            {
              key: menu.path ? menu.path : `item_${pIndex}_${index}`
            },
            [
              h(
                'a',
                {
                  attrs: { href: `#${menu.path}` }
                },
                [
                  renderIcon(menu.meta.icon),
                  h('span', [menu.name])
                ]
              )
            ]
          )
        }
      }
    }
    // 渲染router树
    function renderMenu(menuTree) {
      let menuArr = []
      menuTree.forEach((menu, i) => {
        menuArr.push(renderItem(menu, '0', i))
      })
      // console.log('================')
      // console.log(menuArr)
      // console.log('================')
      return menuArr
    }
    return () => h(ElMenu, null, renderMenu(routes))
  }
})