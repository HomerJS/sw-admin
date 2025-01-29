const { Component, Mixin } = Shopware;

import template from "./my-first-module-plugin.html.twig";

Component.register('my-first-module-plugin', {
    template: template,

    mixins: [
        Mixin.getByName('my-test-mixin'),
    ],

    mounted() {
        console.log('asdasd');
    },

    methods: {

    }
});