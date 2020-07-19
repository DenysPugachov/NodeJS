// const rp = require("request-promise");

module.exports = async function(city = " ") {
    if (!city) {
        throw new Error(`City in empty`);
    }

    console.log("City", city);
};
