import BlogTheme from "@sugarat/theme";
// 自定义样式重载
import "./style.scss";
// 自定义主题色
// import "./user-theme.css";

import MNavLinks from "./components/MNavLinks.vue";

// 导航
import { h } from "vue";
import { useData } from "vitepress";

export default {
  extends: BlogTheme,
  enhanceApp({ app }) {
    // 注册组件
    app.component("MNavLinks", MNavLinks);
  },
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    //@ts-ignore
    return h(BlogTheme.Layout, props);
  },
};
