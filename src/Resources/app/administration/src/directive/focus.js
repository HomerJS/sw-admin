Shopware.Directive.register('focus', {
    // when the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.focus();
    }
});