const convertButton = document.querySelector(".convert-button");
const currencySelectPrimary = document.querySelector(".currency-select-from");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dollarToday = 5.12;
    const euroToday = 5.88;
    const bitcoinToday = 330376.93;
    const libraToday = 6.88;


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

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect.value == "GBP") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
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
     if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
    if (currencySelect.value == "GBP") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }

    convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);