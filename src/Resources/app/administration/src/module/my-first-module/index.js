import EN from './snippet/en-GB.json'
import DE from './snippet/de-DE.json'

import './acl'

import './page/my-first-module-menu'
import './page/my-first-module-system'
import './page/my-first-module-shop'
import './page/my-first-module-plugin'

Shopware.Module.register('my-first-module', {
    type: 'plugin',
    name: 'My First Module',
    title: 'my-first-module.module.title',
    description: 'my-first-module.module.description',
    color: '#ff3d58',
    icon: 'regular-shopping-bag',

    snippets: {
        'de-DE': DE,
        'en-GB': EN
    },

    routes: {
        menu: {
            component: 'my-first-module-menu',
            path: 'menu',
            meta: {
                privilege: 'mykey.viewer' // e.g. 'product.viewer'
            }
        },
        plugin: {
            component: 'my-first-module-plugin',
            path: 'plugin'
        },
        shop: {
            component: 'my-first-module-shop',
            path: 'shop'
        },
        system: {
            component: 'my-first-module-system',
            path: 'system'
        },
        // detail: {
        //     component: 'sw-example-detail',
        //     path: 'detail/:id',
        //     meta: {
        //         parentPath: 'swag.example.list'
        //     }
        // }
    },

    navigation: [{
        id: 'my-first-module-menu',
        label: 'My First Module',
        color: '#ff3d58',
        path: 'my.first.module.menu',
        icon: 'default-shopping-paper-bag-product',
        parent: 'sw-catalogue',
        position: 100,
        privilege: 'mykey.viewer'
    }],

    settingsItem: [
        {
            group: 'plugins',
            icon: 'regular-rocket',
            to: 'my.first.module.plugin',
            name: 'Plugin Item', // optional, fallback is taken from module
            id: 'my-first-module-plugin', // optional, fallback is taken from module
            label: 'Plugin Item', // optional, fallback is taken from module
            privilege: 'mykey.viewer'
        },
        {
            group: 'shop',
            icon: 'regular-rocket',
            to: 'my.first.module.shop',
            name: 'Shop Item', // optional, fallback is taken from module
            id: 'my-first-module-shop', // optional, fallback is taken from module
            label: 'Shop Item', // optional, fallback is taken from module
        },
        {
            group: 'system',
            icon: 'regular-rocket',
            to: 'my.first.module.system',
            name: 'System Item', // optional, fallback is taken from module
            id: 'my-first-module-system', // optional, fallback is taken from module
            label: 'System Item', // optional, fallback is taken from module
        }
    ]
});