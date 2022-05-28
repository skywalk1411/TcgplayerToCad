fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
    .then(res => res.json())
    .then(data => {
        if (data.quoteSummary.error === null && data.quoteSummary.result[0].price.regularMarketPrice.raw) {
            function runCode() {
                let laTable = document.querySelector('.search-results');
                if (laTable) {
                    if (laTable.textContent.indexOf('$)') === -1) {
                        for (let i = 0; i <= laTable.children.length; i++) {
                            /* if normal listing6 */
                            let element1 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (element1) {
                                element1.textContent = element1.textContent + ` (${(Number(element1.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if normal market price7 */
                            let element2 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(7) > section:nth-child(1) > span:nth-child(2)`);
                            if (element2) {
                                element2.textContent = element2.textContent + ` (${(Number(element2.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if presale listing7 */
                            let element4 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (element4) {
                                element4.textContent = element4.textContent + ` (${(Number(element4.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if presale market price8 */
                            let element5 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(8) > section:nth-child(1) > span:nth-child(2)`);
                            if (element5) {
                                element5.textContent = element5.textContent + ` (${(Number(element5.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if another type of price5weird? */
                            let element5x = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(5) > section:nth-child(1) > span:nth-child(2)`);
                            if (element5x) {
                                element5x.textContent = element5x.textContent +` (${(Number(element5x.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if another type of price5 */
                            let element0 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (element0) {
                                element0.textContent = element0.textContent + ` (${(Number(element0.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if another type of price6 */
                            let element3 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(6) > section:nth-child(1) > span:nth-child(2)`);
                            if (element3) {
                                element3.textContent = element3.textContent + ` (${(Number(element3.textContent.slice(2, element3.textContent.length - 2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if horizontal stupid view */
                            let element666 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2)`);
                            if (element666) {
                                let elementStock = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)`);
                                if (!elementStock) {
                                    for (let b = 0; b <= element666.children.length; b++) {
                                        let element6667 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2) > section:nth-child(${b}) > div:nth-child(3) > div:nth-child(1)`);
                                        if (element6667) {
                                            element6667.textContent = element6667.textContent + ` (${(Number(element6667.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } /* if in seller shop */
                else if (document.querySelector('.product-carousel__list')) {
                    let laShop = document.querySelector('.product-carousel__list');
                    for (let p = 1; p <= laShop.children[0].children[0].children.length; p++) {
                        let element = document.querySelector(`figure.product-carousel-card:nth-child(${p}) > figcaption:nth-child(2) > p:nth-child(3) > span:nth-child(1)`);
                        element.textContent = element.textContent + ` (${(Number(element.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                    }
                }
                else {
                    /* if product price */
                    let laPrice = document.querySelector(`.spotlight__price`);
                    let check = false;
                    if (laPrice) {
                        if (laPrice.textContent.indexOf('$)') === -1) {
                            laPrice.textContent = laPrice.textContent + ` (${(Number(laPrice.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            check = true;
                        }
                    }
                    /* if check done proceed */
                    if (check) {
                        /* if currentpricepoints */
                        let currentPricePoints = document.querySelector(`.price-points`);
                        if (currentPricePoints) {
                            /* if two column */
                            if (currentPricePoints.children[0].children.length === 2) {
                                for (let i = 0; i <= currentPricePoints.children[1].children.length; i++) {
                                    let element = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(2)`);
                                    if (element) {
                                        if (element.textContent !== ' - ') {
                                            element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                        }
                                    }
                                }
                            }
                            /* else if assuming three column for foils */
                            else {
                                for (let i = 0; i <= currentPricePoints.children[1].children.length; i++) {
                                    let element = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(2)`);
                                    if (element) {
                                        if (element.textContent !== ' - ') {
                                            element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                        }
                                    }
                                    element = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(3)`);
                                    if (element) {
                                        if (element.textContent !== ' - ') {
                                            element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                        }
                                    }
                                }
                            }
                        }
                        /* if latestsales */
                        let latestSales = document.querySelector(`.latest-sales`);
                        if (latestSales) {
                            for (let i = 0; i <= latestSales.children[1].children.length; i++) {
                                let element01 = document.querySelector(`.latest-sales > ul:nth-child(2) > li:nth-child(${i}) > span:nth-child(5)`);
                                if (element01) {
                                    if (element01.textContent !== ' - ') {
                                        element01.textContent = element01.textContent + ` (${(Number(element01.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                    }
                                }
                                else {
                                    let element = document.querySelector(`.latest-sales > ul:nth-child(2) > li:nth-child(${i}) > span:nth-child(4)`);
                                    if (element) {
                                        if (element.textContent !== ' - ') {
                                            element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                        }
                                    }
                                }
                            }
                        }
                        /* if listings */
                        let listings = document.querySelector(`.search-layout > section:nth-child(2)`);
                        if (listings) {
                            for (let i = 0; i <= listings.children.length - 1; i++) {
                                let element = document.querySelector(`section.listing-item:nth-child(${i}) > div:nth-child(3) > div:nth-child(1)`);
                                if (element) {
                                    element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            }
                        }
                        /* if pricehistory */
                        let priceHistory = document.querySelector(`.martech-charts-history`);
                        if (priceHistory) {
                            /* top right price */
                            let priceHistoryMarketPrice = document.querySelector(`div.charts-row:nth-child(1) > div:nth-child(1) > div:nth-child(2)`);
                            let priceHistoryMarketPriceFoil = document.querySelector(`div.charts-row:nth-child(2) > div:nth-child(1) > div:nth-child(2)`);
                            if (priceHistoryMarketPrice) {
                                priceHistoryMarketPrice.textContent = priceHistoryMarketPrice.textContent + ` (${(Number(priceHistoryMarketPrice.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* top right foil price */
                            if (priceHistoryMarketPriceFoil) {
                                priceHistoryMarketPriceFoil.textContent = priceHistoryMarketPriceFoil.textContent + ` (${(Number(priceHistoryMarketPriceFoil.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                        }
                        /* if customer also purchased carousel */
                        let customerCarousel = document.querySelector(`div.VueCarousel:nth-child(2) > div:nth-child(1) > div:nth-child(1)`);
                        if (customerCarousel) {
                            for (let z = 0; z <= customerCarousel.children.length; z++) {
                                let element = document.querySelector(`div.VueCarousel-slide-active:nth-child(${z}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(5)`);
                                            
                                if (element) {
                                    element.textContent = element.textContent + ` (${(Number(element.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                                }
                            }
                        }
                    }
                }
            }
            /* watchdog */
            setInterval(() => {
                runCode()
            }, 3000);
        }
    });
