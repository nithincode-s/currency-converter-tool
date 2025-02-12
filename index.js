import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import 'dotenv/config'
const freecurrencyapi = new Freecurrencyapi(process.env.api_key);
convertCurrency('USD','INR',3);

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest(
        {
            base_currency: fromCurrency,
            currencies: toCurrency
        }
    );
    const multiplier = res.data[toCurrency];
    console.log(units * multiplier);
    
    return units * multiplier;
}


