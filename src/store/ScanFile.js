import Vue from 'vue'
// 基础文件夹扫描文件
const requireComponent = require.context('../components/basis', true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
  // 全局注册组件
  Vue.component(
    componentName.replace(/\//, '.'),
    componentConfig.default || componentConfig
  );
});

// 业务文件夹扫描文件
const requireComponentx = require.context('../components/business', true, /\.vue$/);
requireComponentx.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponentx(fileName);
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
  // 全局注册组件
  Vue.component(
    componentName.replace(/\//, '.'),
    componentConfig.default || componentConfig
  );
});

