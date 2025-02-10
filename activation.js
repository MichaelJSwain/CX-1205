function callback(activate, options) {

    const handleMobileActivation = function() {
        const usps = {
            options: {root: null,rootMargin: "0px",threshold: 0.5},
            target: document.querySelector('[class*="content_shopping_bag_usp_pdpUsp"]'),
            observer: '',
            observe: function() {
                usps.observer.observe(usps.target);
            },
            disconnect: function() {
                usps.observer.disconnect();
            }
        }
        const productDetails = {
            options: {root: null,rootMargin: "400px 0px 0px",threshold: 0},
            target: document.querySelector('[data-testid="ProductAccordions-component"]'),
            observer: '',
            observe: function() {
                productDetails.observer.observe(productDetails.target);
            },
            disconnect: function() {
                productDetails.observer.disconnect();
            }
        }
        
        const callback = function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    usps.disconnect();
                    productDetails.disconnect();
                    activate();
                }
            });
        };
        
        usps.observer = new IntersectionObserver(callback, usps.options);
        productDetails.observer = new IntersectionObserver(callback, productDetails.options);
        
        usps.observe();
        productDetails.observe();
    }


    optimizely.utils.waitUntil(function() {
        return window &&
        window.__NEXT_DATA__ &&
        window.__NEXT_DATA__.page;
    }).then(function() {
        if (window.__NEXT_DATA__.page === "/pdp") {
            if (window.innerWidth < 768)  {
                optimizely.utils.waitUntil(function() {
                    return document.querySelector('[data-testid="ProductAccordions-component"]') && document.querySelector('[class*="content_shopping_bag_usp"]') &&
                    document.querySelector('[class*="content_shopping_bag_usp"]');
                }).then(function() {
                    handleMobileActivation();
                });
            } else {
                activate();
            }
        }
    });
}