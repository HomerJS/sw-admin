import template from './house-entity-detail.html.twig';

const { Component, Mixin, Context } = Shopware;

Component.register('house-entity-detail', {
    template,

    inject: [
      'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            house: undefined,
            isLoading: false,
            repository: undefined,
            processSuccess: false,
        }
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    created() {
        this.createComponent();
    },

    methods: {
        createComponent() {
            this.repository = this.repositoryFactory.create('house');
            this.getHouse();
        },

        getHouse() {
            this.repository.get(this.$route.params.id, Context.api).then(
                (house) => {this.house = house;}
            );
        },

        onClickSave() {
            this.isLoading = true;

            this.repository.save(this.house, Context.api).then(() => {
                this.getHouse();
                this.isLoading = false;
                this.processSuccess = true;
            }).catch((e) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('house-entity.detail.errorSave'),
                    message: e
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        }
    },
});