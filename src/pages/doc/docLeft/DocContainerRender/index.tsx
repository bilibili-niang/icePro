import { defineComponent, PropType, computed } from 'vue'
import router from '../../../../router'
import logo from '../../../../assets/png/logo.png'
import { useRoute } from 'vue-router'

interface MenuItem {
  /** 显示的文本 */
  text: string;
  /** 跳转链接，如 /doc/button */
  href?: string;
  /** 子菜单项 */
  children?: {
    /** 子菜单显示的文本 */
    text: string;
    /** 子菜单跳转链接，如 /doc/button */
    href: string;
  }[];
}

export default defineComponent({
  name: 'DocContainerRender',
  props: {
    /** 菜单项数组 */
    item: {
      type: Array as PropType<MenuItem[]>,
      required: true,
      validator: (value: MenuItem[]) => {
        return value.every(item => {
          // 验证每个菜单项必须有text
          if (!item.text) return false;
          // 如果有children，验证每个子项必须有text和href
          if (item.children) {
            return item.children.every(child => 
              typeof child.text === 'string' && 
              typeof child.href === 'string'
            );
          }
          return true;
        });
      }
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
