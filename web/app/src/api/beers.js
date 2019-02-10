/**
 * Mocking client-server processing
 */
const _beers = [
  {
    id: 1,
    brewery: "Schlossbrauerei Eichhofen",
    title: "Eichhofener Helles",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/eichhofener_helles.jpg",
    price: 500.01,
    inventory: 2
  },
  {
    id: 2,
    brewery: "Schlossbrauerei Eichhofen",
    title: "Eichhofener Spezial Dunkel",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/eichhofener_spezial_dunkle.jpg",
    price: 500.01,
    inventory: 2
  },
  {
    id: 3,
    brewery: "Prösslbräu Adlersberg",
    title: "Adlersberg Bayerisch Dunkel",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/adlersberg_bayerisch_dunkel.png",
    price: 10.99,
    inventory: 10
  },
  {
    id: 4,
    brewery: "Prösslbräu Adlersberg",
    title: "Adlersberg Palmator Dunkler Doppelbock",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/adlersberg_palmator.png",
    price: 19.99,
    inventory: 5
  },
  {
    id: 5,
    brewery: "Privatbrauerei Stöttner Pfaffenberg",
    title: "Pfaffenberger Original Weisse",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/stoettner_original_weisse.jpg",
    price: 10.99,
    inventory: 10
  },
  {
    id: 6,
    brewery: "Privatbrauerei Stöttner Pfaffenberg",
    title: "Pfaffenberger Dunkle Weisse",
    alcoholicStrength: 6.8,
    originalWort: 16.5,
    avatar: "/beers/stoettner_dunkle_weisse.jpg",
    price: 10.99,
    inventory: 10
  }
];

export default {
  getBeers(cb) {
    setTimeout(() => cb(_beers), 100);
  },

  buyBeers(beers, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  }
};
