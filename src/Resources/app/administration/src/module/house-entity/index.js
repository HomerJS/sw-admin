import de from './snippet/de-DE.json';
import en from './snippet/en-GB.json';

import './page/house-entity-list';
import './page/house-entity-detail';
import './page/house-entity-create';

const {Module} = Shopware;

Module.register('house-entity', {
    type: 'plugin',
    title: 'house-entity.general.title',
    description: 'house-entity.general.description',
    color: '#F88962',
    icon: 'default-avatar-multiple',

    snippets: {
        'de-DE': de,
        'en-GB': en,
    },

    routes: {
        index: {
            component: 'house-entity-list',
            path: 'index'
        },
        detail: {
            component: 'house-entity-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'house.entity.index'
            }
        },
        create: {
            component: 'house-entity-create',
            path: 'create',
            meta: {
                parentPath: 'house.entity.index'
            }
        },
    },

    navigation: [{
        label: 'house-entity.general.title',
        color: '#ff3d58',
        path: 'house.entity.index',
        icon: 'default-shopping-paper-bag-product',
        position: 100,
        parent: 'sw-catalogue',
    }]
})
