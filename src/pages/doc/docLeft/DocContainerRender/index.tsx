import { defineComponent, PropType, computed } from 'vue'
import router from '../../../../router'
import logo from '../../../../assets/png/logo.png'
import { useRoute } from 'vue-router'

interface MenuItem {
  text: string;
  href?: string;
  children?: MenuItem[];
}

export default defineComponent({
  name: 'DocContainerRender',
  props: {
    item: {
      type: Array as PropType<MenuItem[]>,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const goIndex = () => {
      router.push({
        name: 'index'
      })
    }
    const nowPath = computed(() => {
      return route.path
    })

    const goHref = (href: string) => {
      router.push(href)
    }

    const renderMenuItem = (menuItem: MenuItem) => {
      return (
        <li key={menuItem.text}>
          {menuItem.href ? (
            <ice-button
              border={false}
              type={nowPath.value === menuItem.href ? 'danger activeUrl' : 'primary'}
              onClick={() => goHref(menuItem.href!)}>
              {menuItem.text}
            </ice-button>
          ) : (
            <ice-title noselect>{menuItem.text}</ice-title>
          )}
          {menuItem.children && (
            <ul>
              {menuItem.children.map(child => renderMenuItem(child))}
            </ul>
          )}
        </li>
      )
    }

    return () => (
      <div class="doc-container-render ice-column docLeft">
        <ice-link disabled onClick={goIndex} title="回到首页">
          <ice-avatar src={logo}></ice-avatar>
        </ice-link>
        <ice-link href="https://github.com/bilibili-niang/icePro" target="_blank">
          github地址
        </ice-link>

        <ul class="list-ul listContainer">
          {props.item.map(item => renderMenuItem(item))}
        </ul>
      </div>
    )
  }
})
