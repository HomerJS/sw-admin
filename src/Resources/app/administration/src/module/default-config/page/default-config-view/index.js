import template from './default-config-view.html.twig'
import './default-config-view.scss';

Shopware.Component.register('default-config-view', {
    template: template,

    compatConfig: Shopware.compatConfig,

    mixins: [
        Shopware.Mixin.getByName('notification'),
    ],

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    data() {
        return {
            isLoading: false
        };
    },

    methods: {
        onClickSave() {
            this.$refs.systemConfig.saveAll();
        },
    }
});