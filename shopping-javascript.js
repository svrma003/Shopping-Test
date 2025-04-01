function totalCostOfItems(items) {
    // I am assuming that the cost of items is always of unit 'p' and always a positive number and returns a string with the total cost

    // create an object of items and their cost - constant complexity
    const costOfItems = {
        'Apple': 35,
        'Banana': 20,
        'Melon': 50,
        'Lime': 15
    };

    // store the frequency / count of each item
    var itemsFreq = {};
    items.forEach(item => {
        if (!itemsFreq[item])
            itemsFreq[item] = 1;
        else
            itemsFreq[item] += 1;
    });

    var totalCost = 0;
    for (var item in itemsFreq) {
        switch (item) {
            case 'Apple':
            case 'Banana':
                totalCost += itemsFreq[item] * costOfItems[item]; // no offer on these items
                break;
            case 'Melon':
                // buy one get one free offer => (each pair of items = 1 item cost) + remainder items cost
                totalCost += (Math.floor(itemsFreq[item] / 2) * costOfItems[item]) + (itemsFreq[item] % 2 * costOfItems[item]);
                break;
            case 'Lime':
                // three for the price of two offer => (each group of 3 = 2 items cost) + remainder items cost
                totalCost += (Math.floor(itemsFreq[item] / 3) * 2 * costOfItems[item]) + (itemsFreq[item] % 3 * costOfItems[item]);
                break;
            default:
                break;
        }
    }

    return `Total cost of items is ${totalCost}p.`;
}

console.log('From JavaScript file');
console.log(totalCostOfItems(['Apple', 'Banana', 'Melon', 'Lime'])); //120p
console.log(totalCostOfItems(['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime'])); //220p
console.log(totalCostOfItems(['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Lime'])); //235p