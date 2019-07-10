const Main = require('../main');

const renderReceipt = Main.renderReceipt;
const handleBarcodesToItemMap = Main.handleBarcodesToItemMap;
const handleMapToItemList = Main.handleMapToItemList;


// test for function isStartSmallerThanOrEqualToEnd

it ('should return receipt when given barcodes', () => {
    let barcodes = ['0001', '0003', '0005', '0003'];
    let result = `Receipts
    ------------------------------------------------------------
    Coca Cola 3 1
    Pepsi-Cola 5 2
    Dr Pepper 7 1
    
    ------------------------------------------------------------
    Price: 20`;
    expect(renderReceipt(barcodes)).toBe(result);
});

// ok

// it ('should return barcodesMap when given barcodes', () => {
//     let barcodes = ['0001', '0003', '0005', '0003'];
//     let resultMap = new Map();
//     resultMap.set("0001", 1);
//     resultMap.set("0003", 2);
//     resultMap.set("0005", 1);
//     let result = JSON.stringify(resultMap);
//     expect(JSON.stringify(handleBarcodesToItemMap(barcodes))).toBe(result);
// });

// OK

// it ('should return barcodesList when given barcodeMap', () => {
//     let resultMap = new Map();
//     resultMap.set("0001", 1);
//     resultMap.set("0003", 2);
//     resultMap.set("0005", 1);
//     let result = [
//         {"name":"Coca Cola","price": 3,"count": 1}, 
//         {"name":"Pepsi-Cola","price": 5,"count": 2},
//         {"name": "Dr Pepper","price": 7,"count": 1}
//     ];
//     expect(JSON.stringify(handleMapToItemList(resultMap))).toBe(JSON.stringify(result));
// });




