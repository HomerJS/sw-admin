const { Component, Mixin } = Shopware;

import template from "./my-first-module-plugin.html.twig";

Component.register('my-first-module-plugin', {
    template: template,

    mixins: [
        Mixin.getByName('my-test-mixin'),
        Mixin.getByName('notification')
    ],

    mounted() {
        console.log('asdasd');
    },

    methods: {
        greet: function () {
            console.log('greet');
            this.createNotificationSuccess({
                message: this.$tc('global.sw-media-media-item.notification.renamingSuccess.message'),
            });
            console.log('greet2');
        }
    }
});