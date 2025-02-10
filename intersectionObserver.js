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

const callback = (entries, observer) => {
    entries.forEach((entry) => {
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
