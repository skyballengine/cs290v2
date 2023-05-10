window.onload = function () {
    debugger;
    const stocks = [
        { company: 'Splunk', symbol: 'SPLK', price: 137.55 },
        { company: 'Microsoft', symbol: 'MSFT', price: 232.04 },
        { company: 'Oracle', symbol: 'ORCL', price: 67.08 },
        { company: 'Snowflake', symbol: 'SNOW', price: 235.8 },
        { company: 'Terradata', symbol: 'TDC', price: 44.98 }
    ];

    // Get the table element using the id
    let stocksElement = document.getElementById('stocks');

    // Get the tbody element by using the tag name.
    // getElementsByTagName returns a collection, even though the
    // table element has only one tbody element, 
    // Get this tbody element using the index in the array.
    let tableBody = stocksElement.getElementsByTagName('tbody')[0];


    // Loop through the array of stocks
    for (const stock of stocks) {
        // Create a new row element
        const newStockRow = document.createElement('tr');

        // Append the row as the last child of the tbody element
        tableBody.appendChild(newStockRow);

        // Create td element for stock.company and append to the row element
        newStockRow.appendChild(createTd(stock.company));

        // Create td element for stock.symbol and append to the row element
        newStockRow.appendChild(createTd(stock.symbol));

        // Create td element for stock.price and append to the row element
        newStockRow.appendChild(createTd(stock.price));
    };

    /**
     * 
     * @param {string} text 
     * @returns A new td element with the textContent set to the parameter text
     */
    function createTd(text) {
      const newTdElement = document.createElement('td');
      newTdElement.textContent = text;
      return newTdElement;
    }
}