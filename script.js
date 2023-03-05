
function Clear(){
    const input = document.getElementById('bottom');
    const firstnum = document.getElementById('i');
    const top = document.getElementById('top');
    top.value = '';
    firstnum.value = '';
    input.value = '';
    
  }
  function ClearRange() {
    const range1 = document.getElementById('range1')
    const range2 = document.getElementById('range2')
    const result = document.getElementById('result')
    range1.value = '';
    range2.value = '';
    result.value = '';
  }
  
  function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= Math.abs(num); i++) {
      const possibleFactor = num / i;
      if (Math.trunc(possibleFactor) === possibleFactor) {
        factors.push(possibleFactor);
        factors.push(-possibleFactor);
      }
    }
    return factors;
  }
  
  function ab() {
    const num1 = document.getElementById('bottom').value;
    const findI = document.getElementById('i');
    const top = document.getElementById('top').value;
     const factors = getFactors(top);
     // [1,2,3,6]
    // // f1 = 3, f2 = 1
     for (let factor1 of factors) {
       for (let factor2 of factors) {
         if (factor1 + factor2 == num1 && factor1 * factor2 == top) {
           return findI.value = "i = " + factor1 + ";" + " y = " + factor2 + ";";
         }
       }
     }
     return findI.value = "Cannot Factor";
  }
  function Range() {
    const range1 = document.getElementById('range1').value;
    const result = document.getElementById('result');
    const range2 = document.getElementById('range2').value;
    for (let i = parseInt(range1); i < parseInt(range2); i++) {
      let random = Math.floor(Math.random() * parseInt(range2))
      if (random % 2 == 0 && random > parsenInt(range1)) {
        return result.value = "Random Number = " + random + " Result: True"
      }
      return result.value = "Random Number = " + random + "; Result: False"
  
    }
  }
  
    // New Problem: Generate a random number that is in between the number range of top and bottom
    // With that random number, if it is even, then print yes, else no
  
  