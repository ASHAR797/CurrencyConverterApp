
const fetchCurrencyconverterApi = async (fromCurrency, toCurrency)=>{
    let fetchApi = await fetch(`https://v6.exchangerate-api.com/v6/7b4dd8d9fe1252a7ba9186c9/latest/${fromCurrency}`)
    let res = await fetchApi.json() ;
    let amout = document.querySelector('#amount')
    let convertedAmount = amout.value * res.conversion_rates[toCurrency];
    document.querySelector('#converted-amount').textContent = convertedAmount + toCurrency;
}

const convert_btn = document.querySelector('#convert-btn');
convert_btn.addEventListener('click', ()=>{
    
    let from_currency = document.querySelector('#from-currency').value;
    let to_currency = document.querySelector('#to-currency').value;
    fetchCurrencyconverterApi(from_currency, to_currency)

})