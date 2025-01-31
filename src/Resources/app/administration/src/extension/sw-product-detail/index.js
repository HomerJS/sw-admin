// <plugin root>/src/Resources/app/administration/src/page/sw-product-detail/index.js
import template from './sw-product-detail.html.twig';

// Override your template here, using the actual template from the core
Shopware.Component.override('sw-product-detail', {
    template
});