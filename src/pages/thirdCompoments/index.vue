<template>
  <div class="third-components">
    <ice-header>第三方组件扩展</ice-header>
    <ice-text>
      这里展示了一些优秀的第三方组件集成示例，可以帮助你更好地扩展icePro的功能。
    </ice-text>
    
    <ice-title>组件列表</ice-title>
    <ice-row class="component-list">
      <ice-card v-for="(item, index) in componentList" 
               :key="index" 
               class="component-item"
               :title="item.name">
        <template #content>
          <ice-text>{{ item.description }}</ice-text>
        </template>
        <template #footer>
          <ice-link :href="item.link" target="_blank">查看文档</ice-link>
        </template>
      </ice-card>
    </ice-row>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ThirdComponents'
})

const componentList = [
  {
    name: 'Vue Use',
    description: '常用的Vue组合式API工具集合',
    link: 'https://vueuse.org/'
  },
  {
    name: 'ECharts',
    description: '功能强大的图表库',
    link: 'https://echarts.apache.org/zh/index.html'
  },
  {
    name: 'Day.js',
    description: '轻量级的日期处理库',
    link: 'https://day.js.org/'
  }
]
</script>

<style lang="less" scoped>
.third-components {
  padding: 20px;
  
  .component-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    .component-item {
      width: 300px;
    }
  }
}
</style>
