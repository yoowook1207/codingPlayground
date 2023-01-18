const Stores = [
  {
    storeName: "A",
    Products: [
      { productId: 12345, productQuantity: 300 },
      { productId: 12346, productQuantity: 500 },
      { productId: 12347, productQuantity: 200 },
    ],
  },
  {
    storeName: "B",
    Products: [
      { productId: 12348, productQuantity: 1000 },
      { productId: 12345, productQuantity: 400 },
      { productId: 12342, productQuantity: 800 },
    ],
  },
  {
    storeName: "C",
    Products: [
      { productId: 12343, productQuantity: 100 },
      { productId: 12342, productQuantity: 500 },
      { productId: 12347, productQuantity: 500 },
    ],
  },
];

const Priority = [
  { productId: 12342, productPriority: 2 },
  { productId: 12343, productPriority: 1 },
  { productId: 12345, productPriority: 5 },
  { productId: 12346, productPriority: 4 },
  { productId: 12347, productPriority: 6 },
  { productId: 12348, productPriority: 3 },
];

// Return an array with all the stores’ highest priority products and display their quantities

//	output
//	[500,800,100] 

