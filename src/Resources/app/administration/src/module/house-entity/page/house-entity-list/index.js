import template from './house-entity-list.html.twig';

const { Component, Context, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('house-entity-list', {
    template,

    inject: [
        'repositoryFactory',
        'filterFactory'
    ],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('listing'),
        Mixin.getByName('placeholder')
    ],

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    data() {
        return {
            term: undefined,
            total: 0,
            page: 1,
            limit: 30,
            isLoading: false,
            repository: undefined,
            houses: undefined,
            storeKey: 'grid.filter.house-filters',
            defaultFilters: [
                'my-house-filter'
            ],
            activeFilterNumber: 0,
            filterCriteria: [],
        }
    },

    computed: {
        columns() {
            return this.getColumns();
        },

        listFilters() {
            return this.filterFactory.create('house', {
                'my-house-filter': {
                    type: 'string-filter',
                    property: 'number',
                    label: 'Label',
                    placeholder: 'Placeholder',
                }
            });
        },

        defaultCriteria() {
            const defaultCriteria = new Criteria(this.page, this.limit);

            defaultCriteria.setTerm(this.term);
            defaultCriteria.addSorting(Criteria.sort('createdAt', 'DESC'));

            this.filterCriteria.forEach(filter => {
                defaultCriteria.addFilter(filter);
            });

            return defaultCriteria;
        },
    },

    watch: {
        defaultCriteria: {
            handler() {
                this.getList();
            },
            deep: true,
        },
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
        },

        updateCriteria(criteria) {
            this.page = 1;
            this.filterCriteria = criteria;
        },

        async getList() {
            this.isLoading = true;

            const criteria = await Shopware.Service('filterService')
                .mergeWithStoredFilters(this.storeKey, this.defaultCriteria);

            this.activeFilterNumber = criteria.filters.length;

            try {
                const items = await this.repository.search(criteria);

                this.total = items.total;
                this.houses = items;
                this.isLoading = false;
                this.selection = {};
            } catch {
                this.isLoading = false;
            }
        },
    },
});