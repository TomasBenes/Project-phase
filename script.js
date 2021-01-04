const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?
function purchaseOfItems(amount) {
  if (amount < bank_balance) {
    console.log("I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
  }
  // otherwise:
  else {
    console.log("No, thanks.");
  }
}

function whileLoopCustomers (numOfCustomers) {
  while (numOfCustomers > 0) {
    console.log( "How may I help you?" );
  
    // help the customer...
  
    numOfCustomers = numOfCustomers - 1;
  }
}

function doLoopCustomers (numOfCustomers) {
  do {
    console.log( "How may I help you?" );
  
    // help the customer...
  
    numOfCustomers = numOfCustomers - 1;
  } while (numOfCustomers > 0);
}


