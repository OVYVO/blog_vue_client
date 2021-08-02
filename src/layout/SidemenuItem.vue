<template>
  <div class="menu-item" v-if="item.meta.inLayout">
    <template v-if="hasChildren(item) && isAllHide(item.children)">
      <el-submenu :index="item.path">
        <template #title >
          <i :class="item.meta.icon"></i>{{item.meta.title}}
        </template>
        <template v-for="child in item.children">
          <template v-if="child.meta.inLayout">
            <sidebar-item
              v-if="hasChildren(child) && isAllHide(item.children)"
              :item="child"
              :key="child.path"
            ></sidebar-item>
            <el-menu-item 
              v-else 
              :key="child.path" 
              :index="child.path"
            >
              <i :class="child.meta.icon"></i>{{child.meta.title}}
            </el-menu-item>
          </template>
        </template>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item 
        :index="item.path" 
        v-if="item.meta.inLayout"
      >
        <i :class="item.meta.icon"></i>{{item.meta.title}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed:{
    hasChildren(val){
      return (val)=>{
        return val.children && val.children.length
      }
    },
    isAllHide(val){
      return (val)=>{
        return val.every(item => item.meta.inLayout)
      }
    }
  }
}
</script>

<style>

</style>