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
        this.greet();
    },

    methods: {
        greet: function () {
            console.log('UPD');
            this.createNotificationSuccess({
                title: this.titleSaveSuccess,
                message: this.messageSaveSuccess
            });
        }
    }
});