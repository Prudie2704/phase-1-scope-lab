var customerName = "bob";
function name() {
    return customerName;
}
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    window.bestCustomer = 'not bob';
}
let bestCustomer = 'not bob';
    
function overwriteBestCustomer(newFavourite){
    return bestCustomer = newFavourite
}
function leastFavouriteCustomer(changeLeastFavouriteCustomer){
    return changeLeastFavouriteCustomer = 'maybe bob';
}