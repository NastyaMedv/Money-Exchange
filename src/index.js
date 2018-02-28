// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency == 0) {
      return {};
    }
    if (currency > 10000 ) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    var cents = [ [50,25,10,5,1],['H','Q','D','N','P']];

    var exchange = [0,0,0,0,0];
    var i=0, k=0;

    while (currency > 0) {
      if (cents[0][i] <= currency) {
        k = Math.floor(currency / cents[0][i]);
        currency = currency - cents[0][i] * k;
        exchange[i] = exchange[i] + k;
      } else {
        i++;
      }
    }

    var obj = {};
    for (var j = 0; j<5; j++) {
      if (exchange[j] != 0) {
        obj[cents[1][j]] = exchange[j];
      }
    }

    return obj;
}
