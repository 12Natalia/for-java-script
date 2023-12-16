
function generateProducts() {
    const n = 1000000;
    let products = [];
  for (let i = 0; i < n; ++i) {
    products.push(
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    );
  }
  return products;
}

const products = generateProducts();

//------------------------------------------------------

  function getAllPropValues1(propName) {
    // Change code below this line
    let values = [];

    for (let product of products) {
        if (product.hasOwnProperty(propName)) {
        values.push(product[propName]);
      }
    }
    return values;
    // Change code above this line
  }
function getAllPropValues2(propName) {
  let values = [];

  for (const product of products) {
    const propValue = product[propName];
    if (propValue !== undefined) {
      values.push(propValue);
    }
  }
  return values;
}

function getAllPropValues3(propName) {
  let values = [];

  for (let i = 0; i < products.length; ++i) {
    const propValue = products[i][propName];
    if (propValue !== undefined) {
      values.push(propValue);
    }
  }
  return values;
}

function getAllPropValues4(propName) {
  let values = new Array(products.length);

  for (let i = 0; i < products.length; ++i) {
    const propValue = products[i][propName];
    if (propValue !== undefined) {
      values[i] = propValue;
    }
  }
  return values;
}

function getAllPropValues5(propName) {
  const productLength = products.length;
  let values = new Array(productLength);

  for (let i = 0; i < productLength; ++i) {
    const propValue = products[i][propName];
    if (propValue !== undefined) {
      values[i] = propValue;
    }
  }
  return values;
}

function getAllPropValues6(propName) {
  const productLength = products.length;
  let values = new Array(productLength);

  for (let i = 0; i < productLength; ++i) {
    const propValue = products[i][propName];
    if (propValue === undefined) 
      return [];
    values[i] = propValue;

  }
  return values;
}

  let t = Date.now();
  getAllPropValues2('price');
  console.log("Execution time: " + (Date.now() - t));

