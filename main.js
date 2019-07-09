function loadAllItems () {
    let itemList = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];
    return itemList;
}

function createReceipt (barcodes) {
    let itemList = loadAllItems();
    let receiptItems = [];
    // 处理数量
    let barcodeMap = new Map();
    barcodes.forEach(barcode => {
        let count = (barcodeMap.get(barcode) == undefined) ? 1 : barcodeMap.get(barcode) + 1;
        barcodeMap.set(barcode, count);
    });

    barcodeMap.forEach((id, count) => {
        let filterItem = itemList.filter(value => {
            return value.id == id;
        });
        let receiptObj = {
            name: filterItem[0].name,
            price: filterItem[0].price,
            count: count
        };
        receiptItems.push(receiptObj);
    });

    //
    // if (barcodes.length > 0) {
    //     let itemList = loadAllItems();
    //     let receiptItems = [];
    //     let itemMap = new Map();
    //     barcodes.forEach(barcode => {
    //         let filterItem = itemList.filter(value => {
    //             return value.id == barcode;
    //         });
    //         let count = (itemMap.get(barcode) == undefined) ? 1 : itemMap.get(barcode) + 1;
    //         itemMap.set(barcode, count);
    //         let receiptObj = {
    //             name: filterItem[0].name,
    //             price: filterItem[0].price,
    //             count: 1 // default value
    //         };
    //     });
    // } else {
    //     return 1 / 0;
    // }
}

function printReceipt (barcodes) {
    try {
        let result = createReceipt(barcodes);
        console.log(result);

    } catch (e) {
        console.log('[ERROR:]' + e)
    }
}


module.exports = {
    createRecipt
};