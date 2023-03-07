// Quest 66 (Comparison with the Greater Than Or Equal To Operator)
function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
    if (val >= 10) { 
      return "10 or Over";
    }
    return "Less than 10";
  }
testGreaterOrEqual(10);

// Quest 67 (Comparison with the Less Than Operator)
function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }
    if (val < 55) {  
      return "Under 55";
    }
    return "55 or Over";
  }
testLessThan(10);

// Quest 68 (Comparison with the Less Than Or Equal To Operator)
function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
testLessOrEqual(10);

// Quest 69 (operator AND &&)
function testLogicalAnd(val) {
if (val <= 50 && val >= 25) {
    return 'Yes';
    }
    return 'No';
    }
testLogicalAnd(10);

// Quest 70 (operator OR ||)
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  
  testLogicalOr(15);

// Quest 71 (ELSE Statement)
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    return result;
  }
testElse(4);


// Quest 71 (Introducing Else If Statements)
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
      return "Between 5 and 10";
    }
  }
testElseIf(7);  

// Quest 72 (Logical Order in If Else Statements)
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }
    else if (val < 10) {
      return "Less than 10";
    } 
    else {
      return "Greater than or equal to 10";
    }
  }
orderMyLogic(7);

// Quest 73 (Chaining IF/ELSE)
const testSize = (num) => {
if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else if (num >= 20) {
        return 'Huge'
    }
        return "Change Me";
}
testSize(7);

// Quest 74
const golfScore = (par, strokes) => {
  if (par >= 1 && strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes === par - 1) {
    return "Birdie"
  } else if (strokes === par) {
    return "Par"
  } else if (strokes === par + 1) {
    return "Bogey"
  } else if (strokes === par + 2) {
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    return "Go Home!"
  }
    return "Change Me";
}
console.log(golfScore(4, 7));

