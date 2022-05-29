fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
    .then(res => res.json())
    .then(data => {
        function convertPrice(element, type) {
            let delivery;
            switch (type) {
                case 0:
                    delivery = element.textContent + ` (${(Number(element.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                    break;
                case 1:
                    delivery = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                    break;
                case 2:
                    delivery = `\n ` + element.children[0].textContent.replace('\n','').replace(' ','') + ` (${(Number(element.children[0].textContent.replace('\n','').replace(' ','').replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`+` \n`;
                    break;
                default:
            }
            return delivery;
        };
        if (data.quoteSummary.error === null && data.quoteSummary.result[0].price.regularMarketPrice.raw) {
            function runCode() {
                let laTable = document.querySelector('.search-results');
                if (laTable) {
                    if (laTable.textContent.indexOf('$)') === -1) {
                        for (let i = 0; i <= laTable.children.length; i++) {
                            /* if normal listing6 */
                            let normalListing = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (normalListing) {
                                normalListing.textContent = convertPrice(normalListing, 0);
                            }
                            /* if normal market price7 */
                            let normalMarketPrice = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(7) > section:nth-child(1) > span:nth-child(2)`);
                            if (normalMarketPrice) {
                                normalMarketPrice.textContent = convertPrice(normalMarketPrice, 0);
                            }
                            /* if presale listing7 */
                            let presaleListing = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(7) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (presaleListing) {
                                presaleListing.textContent = convertPrice(presaleListing, 0);
                            }
                            /* if presale market price8 */
                            let presaleMarketPrice = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(8) > section:nth-child(1) > span:nth-child(2)`);
                            if (presaleMarketPrice) {
                                presaleMarketPrice.textContent = convertPrice(presaleMarketPrice, 0);
                            }
                            /* if another type of price5weird? */
                            let priceFiveException = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(5) > section:nth-child(1) > span:nth-child(2)`);
                            if (priceFiveException) {
                                priceFiveException.textContent = convertPrice(priceFiveException, 0);
                            }
                            /* if another type of price5 */
                            let priceFiveException2 = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)`);
                            if (priceFiveException2) {
                                priceFiveException2.textContent = convertPrice(priceFiveException2, 0);
                            }
                            /* if another type of price6 */
                            let normalListingException = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > section:nth-child(6) > section:nth-child(1) > span:nth-child(2)`);
                            if (normalListingException) {
                                normalListingException.textContent = normalListingException.textContent + ` (${(Number(normalListingException.textContent.slice(2, normalListingException.textContent.length - 2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                            /* if horizontal stupid view */
                            let horizontalStupidView = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2)`);
                            if (horizontalStupidView) {
                                let elementStock = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)`);
                                if (!elementStock) {
                                    for (let b = 0; b <= horizontalStupidView.children.length; b++) {
                                        /* if special directbytcgplayer listing */
                                        let specialDirectHorizontalListing = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2) > section:nth-child(${b}) > div:nth-child(4) > div:nth-child(1)`)
                                        if (specialDirectHorizontalListing) {
                                            specialDirectHorizontalListing.textContent = convertPrice(specialDirectHorizontalListing, 1);
                                        } /* else normal listing */
                                        else {
                                            let normalHorizontalListing = document.querySelector(`div.search-result:nth-child(${i}) > div:nth-child(1) > div:nth-child(2) > section:nth-child(${b}) > div:nth-child(3) > div:nth-child(1)`);
                                            if (normalHorizontalListing) {
                                                normalHorizontalListing.textContent = convertPrice(normalHorizontalListing, 1);
                                            }
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
                        let laShopPrice = document.querySelector(`figure.product-carousel-card:nth-child(${p}) > figcaption:nth-child(2) > p:nth-child(3) > span:nth-child(1)`);
                        if (laShopPrice?.textContent.indexOf('$)')===-1) {
                            laShopPrice.textContent = convertPrice(laShopPrice, 0);
                        }
                    }
                } /* if in prices list pages */
                else if (document.querySelector(`.priceGuideTable`)) {
                    let priceGuideList = document.querySelector(`.priceGuideTable > tbody:nth-child(3)`);
                    if (priceGuideList) {
                        for (let cardEntry of document.querySelectorAll(`.priceGuideTable > tbody:nth-child(3) > tr`)) {
                            if (cardEntry) {
                                if (cardEntry.children[3].children[0].textContent.indexOf('—') === -1 && cardEntry.children[3].children[0].textContent.indexOf('$)') === -1) {
                                    cardEntry.children[3].children[0].textContent = convertPrice(cardEntry.children[3],2);
                                } 
                                if (cardEntry.children[4].children[0].textContent.indexOf('—') === -1 && cardEntry.children[4].children[0].textContent.indexOf('$)') === -1) {
                                    cardEntry.children[4].children[0].textContent = convertPrice(cardEntry.children[4],2);
                                } /* if .buylistMarketPriceHead do ~ */
                                if (document.querySelector(`.buylistMarketPriceHead`)) {
                                    if (cardEntry.children[5].children[0].textContent.indexOf('—') === -1 && cardEntry.children[5].children[0].textContent.indexOf('$)') === -1) {
                                        cardEntry.children[5].children[0].textContent = convertPrice(cardEntry.children[5],2);
                                    }
                                }
                            }
                        }
                    }
                }
                /* if event decklists */ 
                else if (document.querySelector(`.accordion`)) {
                    let eventDeckLists = document.querySelector(`.accordion`);
                    if (eventDeckLists) {
                        for (let z = 1; z <= eventDeckLists.children.length; z++) {
                            let eventDeck = document.querySelector(`div.accordion-menu:nth-child(${z}) > button:nth-child(1) > span:nth-child(4) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)`);
                            if (eventDeck?.textContent.indexOf('$)')===-1) {
                                eventDeck.textContent = convertPrice(eventDeck,0);
                            }
                        }
                    }
                }
                /* if in decks page */
                else if (document.querySelector(`div.grid:nth-child(2) > div:nth-child(1)`)) {
                    /* display top 3 featured decks */
                    let laTopDecks = document.querySelector(`div.grid:nth-child(2) > div:nth-child(1)`);
                    if (laTopDecks) {
                        for (let j = 1; j <= laTopDecks.children.length; j++) {
                            let topdeckPrice = document.querySelector(`div.three-col:nth-child(${j}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)`);
                            if (topdeckPrice?.textContent.indexOf('$)') === -1) {
                                topdeckPrice.textContent = convertPrice(topdeckPrice, 0);
                            }
                        }
                    }
                    /* display normal decks list */
                    let laNormalDecks = document.querySelector(`div.grid:nth-child(1)`);
                    if (laNormalDecks) {
                        for (let g = 0; g <= laNormalDecks.children.length; g++) {
                            let laNormalRowDecks = document.querySelector(`div.grid:nth-child(1) > div:nth-child(${g})`);
                            if (laNormalRowDecks) {
                                for (let h = 0; h <= laNormalRowDecks.children.length; h++) {
                                    let laNormalDeckPrice = document.querySelector(`div.grid:nth-child(1) > div:nth-child(${g}) > div:nth-child(${h}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)`);
                                    if (laNormalDeckPrice?.textContent.indexOf('$)') === -1 && laNormalDeckPrice.textContent !== 'n/a') {
                                        laNormalDeckPrice.textContent = convertPrice(laNormalDeckPrice, 0);
                                    }
                                }
                            }
                        }
                    }
                    /* if format deck list */
                    let laDeckGrid = document.querySelector(`.grid`);
                    if (laDeckGrid) {
                        for (let f = 1; f <= laDeckGrid.children[0].children.length; f++) {
                            let laDeckGridPrice = document.querySelector(`div.grid-col:nth-child(${f}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)`);
                            if (laDeckGridPrice?.textContent.indexOf('$)') === -1) {
                                laDeckGridPrice.textContent = laDeckGridPrice.textContent + ` (${(Number(laDeckGridPrice.textContent.slice(1)) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            }
                        }
                    }
                }
                else if (document.querySelector(`span.group`)) {
                    /* if deckprice */
                    let deckPrice = document.querySelector(`.market`);
                    if (deckPrice) {
                        if (deckPrice.nextSibling.textContent.indexOf('$)') === -1) {
                            deckPrice.nextSibling.textContent = convertPrice(deckPrice.nextSibling, 0);
                        }
                    }
                    /* if decklist price */
                    let deckList = document.querySelector(`.maindeck`);
                    if (deckList) {
                        for (let mainCardEntry of document.querySelectorAll(`.maindeck > * > ul:nth-child(2) > li > * > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)`)) {
                            if (mainCardEntry?.textContent.indexOf('$)') === -1) {
                                mainCardEntry.textContent = convertPrice(mainCardEntry, 0)
                            }
                        }
                    }
                    /* if sideboard price */
                    let sideboardList = document.querySelector(`.sideboard`);
                    if (sideboardList) {
                        for (let sideCardEntry of document.querySelectorAll(`ul.list:nth-child(1) > li > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)`)) {
                            if (sideCardEntry?.textContent.indexOf('$)') === -1) {
                                sideCardEntry.textContent = convertPrice(sideCardEntry, 0);
                            }
                        }
                    }
                    /* if hovercard price */
                    function hovercardPriceHover() {
                        let hoverCardPrice = document.querySelector(`span.price`);
                        if (hoverCardPrice && hoverCardPrice.textContent !== '') {
                            let cadPrice = hoverCardPrice.querySelector('span.strager-rocks');
                            if (!cadPrice) {
                                cadPrice = document.createElement('span');
                                cadPrice.classList.toggle('strager-rocks');
                            }
                            cadPrice.textContent = '';
                            cadPrice.textContent = ` (${(Number(hoverCardPrice.textContent.slice(1).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
                            hoverCardPrice.appendChild(cadPrice);
                        }
                    }
                    hovercardPriceHover();
                    document.querySelector(`.martech-card__body`).addEventListener("mouseover", () => setTimeout(hovercardPriceHover, 0));
                }
                else {
                    /* if product price */
                    let laPrice = document.querySelector(`.spotlight__price`);
                    let check = false;
                    if (laPrice) {
                        if (laPrice.textContent.indexOf('$)') === -1) {
                            laPrice.textContent = convertPrice(laPrice, 0);
                            check = true;
                        }
                    }
                    /* if currentpricepoints */
                    let currentPricePoints = document.querySelector(`.price-points`);
                    if (currentPricePoints) {
                        /* if two column */
                        if (currentPricePoints.children[0].children.length === 2) {
                            for (let i = 0; i <= currentPricePoints.children[1].children.length; i++) {
                                let currentPricePointsEntry = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(2)`);
                                if (currentPricePointsEntry && currentPricePointsEntry.textContent !== ' - ' && currentPricePointsEntry.textContent.indexOf('$)') === -1) {
                                    currentPricePointsEntry.textContent = convertPrice(currentPricePointsEntry, 1);
                                }
                            }
                        }
                        /* else if assuming three column for foils */
                        else {
                            for (let i = 0; i <= currentPricePoints.children[1].children.length; i++) {
                                let currentPricePointsColumnTwo = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(2)`);
                                if (currentPricePointsColumnTwo && currentPricePointsColumnTwo.textContent !== ' - ' && currentPricePointsColumnTwo.textContent.indexOf('$)') === -1) {
                                    currentPricePointsColumnTwo.textContent = convertPrice(currentPricePointsColumnTwo, 1);
                                }
                                let currentPricePointsColumnThree = document.querySelector(`.price-points__rows > li:nth-child(${i}) > span:nth-child(3)`);
                                if (currentPricePointsColumnThree && currentPricePointsColumnThree.textContent !== ' - ' && currentPricePointsColumnThree.textContent.indexOf('$)') === -1) {
                                    currentPricePointsColumnThree.textContent = convertPrice(currentPricePointsColumnThree, 1);
                                }
                            }
                        }
                    }
                    /* if latestsales */
                    let latestSales = document.querySelector(`.latest-sales`);
                    if (latestSales) {
                        for (let i = 0; i <= latestSales.children[1].children.length; i++) {
                            /* if 5th element */
                            let latestSalesPrice = document.querySelector(`.latest-sales > ul:nth-child(2) > li:nth-child(${i}) > span:nth-child(5)`);
                            if (latestSalesPrice && latestSalesPrice.textContent !== ' - ' && latestSalesPrice.textContent.indexOf('$)') === -1) {
                                latestSalesPrice.textContent = convertPrice(latestSalesPrice, 1);
                            }
                            /* else if 4th instead */
                            else {
                                let latestSalesPriceFourth = document.querySelector(`.latest-sales > ul:nth-child(2) > li:nth-child(${i}) > span:nth-child(4)`);
                                if (latestSalesPriceFourth && latestSalesPriceFourth.textContent !== ' - ' && latestSalesPriceFourth.textContent.indexOf('$)') === -1 && latestSalesPriceFourth.textContent.indexOf('$') !== -1) {
                                    latestSalesPriceFourth.textContent = convertPrice(latestSalesPriceFourth, 1);
                                }
                            }
                        }
                    }
                    /* if check done proceed */
                    if (check) {
                        /* if listings */
                        let listings = document.querySelector(`.search-layout > section:nth-child(2)`);
                        if (listings) {
                            for (let i = 0; i <= listings.children.length - 1; i++) {
                                let elementListing = document.querySelector(`section.listing-item:nth-child(${i}) > div:nth-child(3) > div:nth-child(1)`);
                                if (elementListing) {
                                    elementListing.textContent = convertPrice(elementListing, 1);
                                }
                            }
                        }
                        /* if pricehistory */
                        let priceHistory = document.querySelector(`.martech-charts-history`);
                        if (priceHistory) {
                            /* top right four prices, normal, foil, + 2 random others */
                            for (let k = 1; k <= 4; k++) {
                                let elementOfPriceChart = document.querySelector(`div.charts-row:nth-child(${k}) > div:nth-child(1) > div:nth-child(2)`);
                                if (elementOfPriceChart) {
                                    elementOfPriceChart.textContent = convertPrice(elementOfPriceChart, 1);
                                }
                            }
                        }
                        /* if customer also purchased carousel */
                        let customerCarousel = document.querySelector(`div.VueCarousel:nth-child(2) > div:nth-child(1) > div:nth-child(1)`);
                        if (customerCarousel) {
                            for (let z = 0; z <= customerCarousel.children.length; z++) {
                                let elementCaroussel = document.querySelector(`div.VueCarousel-slide:nth-child(${z}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)`);
                                /* if normal-slide */
                                if (elementCaroussel) {
                                    elementCaroussel.textContent = convertPrice(elementCaroussel, 0);
                                } /* else slide-active */
                                else {
                                    let elementCarousselExcept = document.querySelector(`div.VueCarousel-slide-active:nth-child(${z}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)`);
                                    if (elementCarousselExcept) {
                                        elementCarousselExcept = convertPrice(elementCarousselExcept, 0);
                                    }
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
