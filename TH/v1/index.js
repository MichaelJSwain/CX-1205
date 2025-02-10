const CX1205 = {
    addCss: function() {
        const css = document.createElement('style');
        css.innerHTML = `
            [class*="content_shopping_bag_usp_pdpUsp"] {
                margin-bottom: 32px;
            }
            .CX1205-payment-method-container {
                margin: 24px 0 48px 0;
            }
              .CX1205-title {
                margin: 0;
                font-family: Gill Sans;
                margin-bottom: 12px;
                font-size: 14px;
                line-height: 21px;
            }
            .CX1205-payment-method-list {
                display: flex;
                list-style: none;
                padding-left: 0;
                gap: 12px;
            }
            .CX1205-payment-method-list {
                margin: 0;
            }
            .CX1205-payment-method-list-item {
                width: 2rem;
                height: 2rem;
            }
            .CX1205-payment-method-logo {
                width: 100%;
                height: 100%;
            }
        `;
        document.head.appendChild(css);
    },
    localisedPaymentMethods: {
        gb: {
            title: 'Accepted payment methods',
            paymentLogos: ['amex','giftcard','klarna','maestro','mc','paypal','visa']
        },
        nl: {
            title: 'Geaccepteerde betaalmethodes',
            paymentLogos: ['amex','giftcard','ideal','klarna','mc','paypal','visa']
        },
        de: {
            title: 'Mögliche zahlungsmethoden',
            paymentLogos: ['amex','giftcard','klarna','mc','paypal','ratepay','visa']
        },
        fr: {
            title: 'Moyens de paiement acceptés',
            paymentLogos: ['amex','cartebancaire','giftcard','klarna','mc','paypal','visa','vpay']
        },
        it: {
            title: 'Metodi di pagamento accettati',
            paymentLogos: ['klarna','mc','paypal','visa']
        },
        es: {
            title: 'Métodos de pago aceptados',
            paymentLogos: ['giftcard','klarna','mc','paypal','visa']
        },
        pl: {
            title: 'Akceptowane metody płatności',
            paymentLogos: ['blik','klarna','mc','paypal','onlineBanking_PL','visa']
        }
    }[window.__NEXT_DATA__.props.pageProps.initialState.currentStore.target],
    targetSelector: '[class*="content_shopping_bag_usp"]',
    createPaymentMethodsElement: function() {
        let paymentMethodLogos = '';

        CX1205.localisedPaymentMethods.paymentLogos.forEach(function(logo) {
            paymentMethodLogos += `<li class="CX1205-payment-method-list-item">
                                    <img class="CX1205-payment-method-logo" src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/${logo}.svg" alt="${logo}">
                                </li>`;
        })

        const paymentMethodsElement = document.createElement('div');
        paymentMethodsElement.setAttribute('class', 'CX1205-payment-method-container');
        paymentMethodsElement.innerHTML = `
        <p class="CX1205-title">${ CX1205.localisedPaymentMethods.title}</p>
        <ul class="CX1205-payment-method-list">
            ${paymentMethodLogos}
        </ul>
        `;
        paymentMethodsElement.querySelector(".CX1205-payment-method-list").addEventListener("click", function() {
            optimizely.sendAnalyticsEvents("CX-1205 Clicks on Payment method", true);
        });
        return paymentMethodsElement;
    },
    insertPaymentMethodsElement: function(paymentMethodsElement) {
        const placementTarget = document.querySelector(CX1205.targetSelector);
        placementTarget.parentElement.insertBefore(paymentMethodsElement, placementTarget.nextElementSibling);
    },
    init: function() {
        CX1205.addCss();
        const paymentMethodsElement = CX1205.createPaymentMethodsElement();
        CX1205.insertPaymentMethodsElement(paymentMethodsElement);
    }
}
CX1205.init();