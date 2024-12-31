//Sync loader, not preferred
// Shopware.Component.register('component-name', {
//     // Configuration here
// });

//Async loader
import myTemplate from 'hello-world.html.twig';
export default Shopware.Component.wrapComponentConfig('component-name', {

    template: myTemplate,

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    methods: {
        createdComponent() {
            // translate in JS
            const myCustomText = this.$tc('swag-example.foo');

            console.log(myCustomText);
        }
    }

});