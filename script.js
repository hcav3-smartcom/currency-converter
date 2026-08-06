const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log(currencySelect.value);
    const dollarToday = 5.2;
    const euroToday = 6.2;


    if (currencySelect.value == "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday);
    }
    if (currencySelect.value == "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "USD") {    
        currencyName.innerHTML = "Dollar";
        currencyImage.src = "./assets/dolar.png";
    }
    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);