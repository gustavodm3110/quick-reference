export default function decorate(block) {
    fx.base = "USD";
    fx.rates = {
        "AED": 3.672525,
        "AFN": 69.627489,
        "ALL": 94.575,
        "AMD": 403.991568,
        "ANG": 1.801635,
        "AOA": 831.5,
        "ARS": 800.5359,
        "AUD": 1.492438,
        "AWG": 1.8025,
        "AZN": 1.7,
        "BAM": 1.813865,
        "BBD": 2,
        "BDT": 109.966784,
        "BGN": 1.779455,
        "BHD": 0.376971,
        "BIF": 2855,
        "BMD": 1,
        "BND": 1.343615,
        "BOB": 6.907085,
        "BRL": 4.9108,
        "BSD": 1,
        "BTC": 0.000023289199,
        "BTN": 83.306267,
        "BWP": 13.556771,
        "BYN": 3.293059,
        "BZD": 2.014926,
        "CAD": 1.340482,
        "CDF": 2655,
        "CHF": 0.866807,
        "CLF": 0.031371,
        "CLP": 865.63,
        "CNH": 7.123445,
        "CNY": 7.06975,
        "COP": 3947.165619,
        "CRC": 525.530747,
        "CUC": 1,
        "CUP": 25.75,
        "CVE": 103.375,
        "CZK": 22.2285,
        "DJF": 177,
        "DKK": 6.78289,
        "DOP": 57.2,
        "DZD": 134.389018,
        "EGP": 30.9215,
        "ERN": 15,
        "ETB": 55.87,
        "EUR": 0.909682,
        "FJD": 2.21445,
        "FKP": 0.782982,
        "GBP": 0.782982,
        "GEL": 2.685,
        "GGP": 0.782982,
        "GHS": 12.045,
        "GIP": 0.782982,
        "GMD": 67.425,
        "GNF": 8605,
        "GTQ": 7.81733,
        "GYD": 209.329087,
        "HKD": 7.808626,
        "HNL": 24.74,
        "HRK": 6.854613,
        "HTG": 132.172979,
        "HUF": 345.539495,
        "IDR": 15478.739478,
        "ILS": 3.667,
        "IMP": 0.782982,
        "INR": 83.285507,
        "IQD": 1310,
        "IRR": 42262.5,
        "ISK": 136.91,
        "JEP": 0.782982,
        "JMD": 155.498038,
        "JOD": 0.7094,
        "JPY": 141.8005,
        "KES": 153.55,
        "KGS": 89.2,
        "KHR": 4118,
        "KMF": 456.625242,
        "KPW": 900,
        "KRW": 1290.109765,
        "KWD": 0.307516,
        "KYD": 0.833044,
        "KZT": 456.597684,
        "LAK": 20660,
        "LBP": 15032.5,
        "LKR": 326.696012,
        "LRD": 188.350047,
        "LSL": 19.09,
        "LYD": 4.825,
        "MAD": 10.138,
        "MDL": 17.749473,
        "MGA": 4580,
        "MKD": 56.061031,
        "MMK": 2099.251313,
        "MNT": 3450,
        "MOP": 8.04006,
        "MRU": 39.5525,
        "MUR": 44,
        "MVR": 15.4,
        "MWK": 1684,
        "MXN": 17.178541,
        "MYR": 4.6725,
        "MZN": 63.87499,
        "NAD": 19.09,
        "NGN": 791,
        "NIO": 36.75,
        "NOK": 10.5125,
        "NPR": 133.287881,
        "NZD": 1.609878,
        "OMR": 0.384943,
        "PAB": 1,
        "PEN": 3.765,
        "PGK": 3.71875,
        "PHP": 55.733001,
        "PKR": 283.5,
        "PLN": 3.920605,
        "PYG": 7327.668678,
        "QAR": 3.641,
        "RON": 4.5233,
        "RSD": 106.603,
        "RUB": 89.480014,
        "RWF": 1257,
        "SAR": 3.751331,
        "SBD": 8.475185,
        "SCR": 13.704312,
        "SDG": 601,
        "SEK": 10.239047,
        "SGD": 1.32772,
        "SHP": 0.782982,
        "SLL": 20969.5,
        "SOS": 571,
        "SRD": 37.4235,
        "SSP": 130.26,
        "STD": 22281.8,
        "STN": 22.875,
        "SVC": 8.747588,
        "SYP": 2512.53,
        "SZL": 19.09,
        "THB": 34.880029,
        "TJS": 10.931366,
        "TMT": 3.51,
        "TND": 3.1105,
        "TOP": 2.35925,
        "TRY": 28.981101,
        "TTD": 6.786358,
        "TWD": 31.2605,
        "TZS": 2515,
        "UAH": 36.99947,
        "UGX": 3778.373549,
        "USD": 1,
        "UYU": 38.920752,
        "UZS": 12375,
        "VES": 35.581693,
        "VND": 24251.246085,
        "VUV": 118.722,
        "WST": 2.8,
        "XAF": 596.711996,
        "XAG": 0.04135051,
        "XAU": 0.00049108,
        "XCD": 2.70255,
        "XDR": 0.752929,
        "XOF": 596.711996,
        "XPD": 0.00090199,
        "XPF": 108.553887,
        "XPT": 0.00103815,
        "YER": 250.349961,
        "ZAR": 18.333117,
        "ZMW": 24.221539,
        "ZWL": 322
    }
    let fromCur = '';
    let toCur = '';
    [...block.children].forEach((row, r) => {
        if (r == 0) {
            fromCur = [...row.children][0].textContent.toUpperCase();
            toCur = [...row.children][1].textContent.toUpperCase();
            row.replaceWith();
        } else {
            let curOutput = document.createElement('p');
            curOutput.classList.add('currency-output');
            let inputVal = Number([...row.children][0].textContent);
            curOutput.textContent = fx.convert(inputVal, {from: fromCur, to: toCur});
            row.replaceWith(curOutput);
        }
    });
}