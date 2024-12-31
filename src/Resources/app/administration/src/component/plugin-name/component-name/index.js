//Sync loader, not preferred
// Shopware.Component.register('component-name', {
//     // Configuration here
// });

//Async loader
import myTemplate from 'hello-world.html.twig';
export default Shopware.Component.wrapComponentConfig('component-name', {

    template: myTemplate

});