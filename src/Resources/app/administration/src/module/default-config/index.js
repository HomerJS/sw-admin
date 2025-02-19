import './page/default-config-view'

import enGB from './snippet/en-GB';

Shopware.Module.register('default-config', {
    type: 'plugin',
    name: 'default_config',
    title: 'default-config.general.title',
    description: 'default-config.general.desc',
    color: '#ff3d58',
    icon: 'regular-shopping-bag',


    snippets: {
        'en-GB': enGB
    },

    routes: {
        view: {
            component: 'default-config-view',
            path: 'view',
            meta: {
                parentPath: 'sw.settings.index.plugins'
            }
        }
    },

    settingsItem: [{
        group: 'plugins',
        icon: 'regular-rocket',
        to: 'default.config.view',
        name: 'default-config.item.title', // optional, fallback is taken from module
        id: 'default-config-view', // optional, fallback is taken from module
        label: 'default-config.item.label', // optional, fallback is taken from module
    }]
});