const { Mixin } = Shopware;

Mixin.register('my-test-mixin', {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
});