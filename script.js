document.getElementById('convert').addEventListener('click', function() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Sample conversion rates relative to 1 USD
    const rates = {
        USD: 1,
        EUR: 0.91,
        INR: 83.5,
        GBP: 0.79
    };

    // Convert from source currency to USD first
    let amountInUSD = amount / rates[fromCurrency];

    // Convert USD to target currency
    let convertedAmount = amountInUSD * rates[toCurrency];

    // Display result
    document.getElementById('converted').textContent = convertedAmount.toFixed(2);
});

// Reset button
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('fromCurrency').value = 'USD';
    document.getElementById('toCurrency').value = 'USD';
    document.getElementById('converted').textContent = '0';
});
