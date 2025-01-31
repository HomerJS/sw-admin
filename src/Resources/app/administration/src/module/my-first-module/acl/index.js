// <plugin root>/src/Resources/app/administration/src/<your-component>/acl/index.js

Shopware.Service('privileges').addPrivilegeMappingEntry({
    category: 'permissions',
    parent: 'myparent',
    key: 'mykey',
    roles: {
        viewer: {
            privileges: [],
            dependencies: []
        },
        editor: {
            privileges: [],
            dependencies: []
        },
        creator: {
            privileges: [],
            dependencies: []
        },
        deleter: {
            privileges: [],
            dependencies: []
        }
    }
});

Shopware.Service('privileges').addPrivilegeMappingEntry({
    category: 'additional_permissions',
    parent: 'myaddparent',
    key: 'mysystem',
    roles: {
        clear_cache: {
            privileges: [],
            dependencies: ['system:clear:cache']
        }
    }
});