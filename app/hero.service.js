"use strict";
var mock_heroes_1 = require('./mock-heroes');
//@Injectable()
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map