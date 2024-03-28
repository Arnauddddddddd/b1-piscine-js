function hasCity(country, list) {
    return function (city) {
        if (list.includes(city)) {
            return city + " is a city from " + country;
        }
        return city + " is not a city from " + country;
    }
}

