// Will be used to add items to the shopping cart currently I need to think about how to uniquely
// identify items with sizes. 
var breakCharacter = "\xA9"
function addItem(itemString) {
    // Check if the item is already in the database if so just ++ the value.
    if (sessionStorage.getItem(itemString) != null) {
        let itemCount = sessionStorage.getItem(itemString);
        sessionStorage.setItem(itemString, parseInt(itemCount) + 1);
    }
    else {
        // Save the item to the database with value 1.
        sessionStorage.setItem(itemString, 1);
    }

    console.log(sessionStorage)
}

// This function will be used when in the cart and the user wants to add items for example 3 of the same shirts
function modifyCount(itemString, amount) {
    return;
}

function deleteItem(itemString) {
    sessionStorage.deleteItem(itemString);
}

function clearCart() {
    sessionStorage.clear();
}

// Iterates through the session values and sums up the entire price.
// TODO Think of a way to get the price of an item easily
function sumCartValues() {
    var sum = 0;
    for (var key of Object.keys(sessionStorage)){
        sum += parseInt(sessionStorage[key]) * 1
    }
    return sum;
}