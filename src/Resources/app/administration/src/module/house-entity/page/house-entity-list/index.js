import template from './house-entity-list.html.twig';

const { Component, Context } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('house-entity-list', {
    template,

    inject: [
      'repositoryFactory'
    ],

    data() {
        return {
            repository: undefined,
            houses: undefined
        }
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return this.getColumns();
        }
    },

    mounted() {
        this.createHouseEntity();
    },

    methods: {
        createHouseEntity() {
            this.repository = this.repositoryFactory.create('house');
            this.repository.search(new Criteria(), Context.api).then((result) => {this.houses = result});
        },

        getColumns() {
            return [
                {
                    property: 'name',
                    label: 'Name',
                    routerLink: 'house.entity.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'number',
                    label: 'Number',
                    allowResize: true,
                    inlineEdit: 'number',
                    align: 'center',
                }
            ];
        }
    },
});