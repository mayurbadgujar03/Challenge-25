const accountId = 144553;
let accountEmail = "user@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";

let accountState;

// accountId = 2 // not allowed

accountEmail = "user-2@gmail.com";
accountPassword = "1234";
accountCity = "Surat";

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
