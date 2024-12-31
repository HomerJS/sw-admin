import './module/ihor-test';

//import component
// import './component/plugin-name/component-name'; - not preferred, loads everytime
// Preferred way, loaded only when used
Shopware.Component.register('component-name', () => import('./component/plugin-name/component-name'));
