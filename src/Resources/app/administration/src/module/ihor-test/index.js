import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

Shopware.Module.register('ihor-test', {
    type: 'plugin', //core or plugin - 2 Options, so always use plugin
    name: 'MyPluginName', // Unique
    title: 'ihor-test.general.mainMenuItemGeneral',
    description: 'ihor-test.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'regular-AR',

    //translations
    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    //routing
    // always need to see the item
    //can be set some test route
    routes: {
        // overview: {
        //     component: 'sw-product-list',
        //     path: 'overview'
        // },
        nameOfTheRoute: {
            component: 'example',
            path: 'actualPathInTheBrowser'
        }
    },

    //place in menu can be only on 2d level
    navigation: [
        {
            id: 'ihor-module-test',
            parent: 'sw-settings',
            label: 'IhorCustomModule',
            color: '#ff3d58',
            path: 'sw.review.index',
            icon: 'regular-shopping-bag',
            position: 100
        }
    ],

    // system Menu Items
    settingsItem: [
        {
            group: 'plugins', //shop, system or plugins
            icon: 'regular-rocket',
            to: 'sw.manufacturer.index',
            name: 'SwagExampleMenuItemGeneral', // optional, fallback is taken from module
            id: 'ihor-module-test', // optional, fallback is taken from module
            label: 'Plugins Label', // optional, fallback is taken from module
            // iconComponent: YourCustomIconRenderingComponent, // optional, this overrides the component used to render the icon
        },
        {
            group: 'shop', //shop, system or plugins
            icon: 'regular-rocket',
            to: 'sw.manufacturer.index',
            name: 'SwagExampleMenuItemGeneral', // optional, fallback is taken from module
            id: 'ihor-module-test', // optional, fallback is taken from module
            label: 'Shop Label', // optional, fallback is taken from module
            // iconComponent: YourCustomIconRenderingComponent, // optional, this overrides the component used to render the icon
        },
        {
            group: 'system', //shop, system or plugins
            icon: 'regular-rocket',
            to: 'sw.manufacturer.index',
            name: 'SwagExampleMenuItemGeneral', // optional, fallback is taken from module
            id: 'ihor-module-test', // optional, fallback is taken from module
            label: 'System Label', // optional, fallback is taken from module
            // iconComponent: YourCustomIconRenderingComponent, // optional, this overrides the component used to render the icon
        }
    ]
});