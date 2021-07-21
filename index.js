customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "someone";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "someone else";
}


console.log(customerName);
// upperCaseCustomerName();
console.log(customerName);