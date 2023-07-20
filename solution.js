cashAvailble = {
  '50': 10,
  '20': 10,
  '10': 10,
  '5': 25,
  '2': 25,
  '1': 25,
  "0.50": 25,
  "0.20": 25,
  "0.10": 25,
  '0.05': 25,
  '0.02': 25,
  '0.01': 25,
};

class CashCounter {
  constructor(cashAvailble) {
    this.cashAvailble = cashAvailble;
  }

  calculateChange(price, paid) {
    const acceptedPaid = [1, 2, 5, 10, 20, 50];
    if (!acceptedPaid.includes(paid)) {
      return `We accept only the amounts 1, 2, 5, 10, 20, 50`;
    }

    if (paid < price) {
      return `Customer needs to pay ${(price - paid).toFixed(2)}€ more`;
    }

    if (price === paid) {
      return "Change: 0, Counter closed";
    }

    if (paid > price) {
   
      let change = (paid - price).toFixed(2);
      const keys = Object.keys(this.cashAvailble);
      let sortedKeys = keys.sort((a, b) => b - a);

      const sortedDenomination = sortedKeys.map((str) => parseFloat(str));
      console.log(sortedDenomination);
      let denominationsArray=[];
      let numberOfDenominationsArray=[];
      for (let item of sortedDenomination) {
        let numberOfItems = 0;
        let temp = 0;
        
      
        while (change >= item) {
          numberOfItems = Math.floor(change / item);
          temp = item * numberOfItems; 
          
          console.log('this is number of items',numberOfItems);
          change -= temp;
          console.log('this is the denominations', item);
         
          
        }
        denominationsArray.push(item);
        numberOfDenominationsArray.push(numberOfItems);
        

      }
      console.log(denominationsArray);
      console.log(numberOfDenominationsArray);
      const resulObj= denominationsArray.reduce((obj,key,index)=>{  if(numberOfDenominationsArray[index] !==0){
          obj[key] = numberOfDenominationsArray[index];
          
        }
        return obj;
      },{})

      console.log(resulObj);
    
    }
  }
}
const cashCounter = new CashCounter(cashAvailble);

//console.log(cashCounter.calculateChange(1, 50)); // { '2': 2, '5': 1, '20': 2 }
//console.log(cashCounter.calculateChange(33.33, 50)); // { '1': 1, '5': 1, '10': 1, '0.5': 1, '0.1': 1, '0.05': 1, '0.02': 1 }
//console.log(cashCounter.calculateChange(46.67, 50)) // { '1': 1, '2': 1, '0.2': 1, '0.1': 1, '0.02': 1, '0.01': 1 }

cashCounter.calculateChange(1, 50); // { '2': 2, '5': 1, '20': 2 }
cashCounter.calculateChange(33.33, 50); // { '1': 1, '5': 1, '10': 1, '0.5': 1, '0.1': 1, '0.05': 1, '0.02': 1 }
cashCounter.calculateChange(46.67, 50);
//console.log(cashCounter.calculateChange(60,50));
