import template from './house-entity-create.html.twig';

const { Component, Mixin, Context } = Shopware;

Component.register('house-entity-create', {
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
            this.house = this.repository.create(Context.api);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository.save(this.house, Context.api).then(() => {
                this.isLoading = false;
                this.$router.push({
                    name: 'house.entity.detail',
                    params: {id: this.house.id}
                });
            }).catch((e) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('house-entity.create.errorSave'),
                    message: e
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        }
    },
});