function callback(activate, options) {
    optimizely.utils.waitUntil(() => {
        return window &&
        window.__NEXT_DATA__ &&
        window.__NEXT_DATA__.page;
    }).then(() => {
        if (window.__NEXT_DATA__.page === "/pdp") {
            if (window.innerWidth < 768)  {
                document.querySelector('[data-testid="ProductAccordions-component"]') && document.querySelector('[class*="content_shopping_bag_usp"]') &&
                document.querySelector('[class*="content_shopping_bag_usp"]');    
            } else {
                activate();
            }
        }
    });
}