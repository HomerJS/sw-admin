Shopware.Service('privileges').addPrivilegeMappingEntry({
    category: 'permissions',
    parent: 'myparent',
    key: 'mykey',
    roles: {
        viewer: {
            privileges: ['plugin:read'],
            dependencies: ['product.viewer']
        },
        editor: {
            privileges: []
        },
        newrole: {
            privileges: []
        }
    }
});