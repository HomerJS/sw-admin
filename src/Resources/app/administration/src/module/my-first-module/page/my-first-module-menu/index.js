import template from './my-first-module-menu.html.twig'

Shopware.Component.register('my-first-module-menu', {
    template: template,

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },
});