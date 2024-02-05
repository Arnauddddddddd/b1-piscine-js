function dogYears(planet, age) {
    if (planet == "earth") {
        return parseInt((7 * (age / 31557600)).toFixed(2).parseInt());
    }
    if (planet == "mercury") {
        return parseInt((7 * (age / 0.2408467 * 31557600)).toFixed(2));
    }
    if (planet == "venus") {
        return parseInt((7 * (age / 0.61519726 * 31557600)).toFixed(2));
    }
    if (planet == "mars") {
        return parseInt((7 * (age / 1.8808158 * 31557600)).toFixed(2));
    }
    if (planet == "jupiter") {
        return parseInt((7 * (age / 11.862615 * 31557600)).toFixed(2));
    }
    if (planet == "saturn") {
        return parseInt((7 * (age / 29.447498 * 31557600)).toFixed(2));
    }
    if (planet == "uranus") {
        return parseInt((7 * (age / 84.016846 * 31557600)).toFixed(2));
    }
    if (planet == "neptune") {
        return parseInt((7 * (age / 164.79132 * 31557600)).toFixed(2));
    }
}