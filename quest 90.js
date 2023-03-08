function phoneticLookup(val) {
    const lookup = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxfront': 'Frank'
    }
    let result = lookup[val];
    return result;
  };
console.log(phoneticLookup("charlie"));



