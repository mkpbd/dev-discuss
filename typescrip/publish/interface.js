"use strict";
function careTypeFunc(care) {
    console.log(`Car make: ${care.make}, model: ${care.model}, year: ${care.year}`);
    return `Car make: ${care.make}, model: ${care.model}, year: ${care.year}`;
}
careTypeFunc({
    make: "audi",
    model: "audi",
    year: 2023,
    name: "audi"
});
