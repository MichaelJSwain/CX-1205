const target = document.querySelector('[class*="content_shopping_bag_usp_pdpUsp"]');
const midwayPoint = Math.round(document.querySelector('[data-testid="ProductAccordions-component"]').offsetHeight / 2);

const intersectionCallback = function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        optimizely.sendAnalyticsEvents("CX-1205 Changes Seen", true);
      }
    });
  };
  const options = {
    root: null,
    rootMargin: `${midwayPoint}px 0px -${midwayPoint}px 0px`,
    threshold: 0,
  };
  
const observer = new IntersectionObserver(intersectionCallback, options);
observer.observe(target);