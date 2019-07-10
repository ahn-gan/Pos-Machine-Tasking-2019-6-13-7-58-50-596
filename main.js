const loadAllItems = () => {
    const itemList = [
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

const handleBarcodesToItemMap = (barcodes) => {
    // 处理数量
    let barcodeMap = new Map();
    barcodes.forEach(barcode => {
        let count = (barcodeMap.get(barcode) == undefined) ? 1 : barcodeMap.get(barcode) + 1;
        barcodeMap.set(barcode, count);
    });
    return barcodeMap;
}

const handleMapToItemList = (barcodeMap) => {
    let receiptItems = [];
    let itemList = loadAllItems();

    barcodeMap.forEach((val, key) => {
        let filterItem = itemList.filter(value => {
            return value.id == key;
        });
        let receiptObj = {
            name: filterItem[0].name,
            price: filterItem[0].price,
            count: val
        };
        receiptItems.push(receiptObj);
    });
    return receiptItems;
}

const renderItems = (receiptItemList) => {
    let itemDetails = ``;
    receiptItemList.forEach(val => itemDetails += val.name + ` ` + val.price +` ` + val.count + `
    `);
    return itemDetails;
}

const calculateTotalPrice = (receiptItemList) => {
    let totalPrice = 0;
    receiptItemList.forEach(item => totalPrice += item.price * item.count);
    return totalPrice;

}

const renderTotal = (totalPrice) => {
    return `Price: ` + totalPrice;
}

const renderReceipt = (barcodes) => {
    let barcodeMap = handleBarcodesToItemMap(barcodes);
    let receiptItemList = handleMapToItemList(barcodeMap);
    let itemDetails = renderItems(receiptItemList);
    let totalPrice = calculateTotalPrice(receiptItemList);
    let totalDetails = renderTotal(totalPrice);
    let receiptTemplate = `Receipts
    ------------------------------------------------------------
    `;
    receiptTemplate += itemDetails;
    receiptTemplate += `
    ------------------------------------------------------------
    `;
    receiptTemplate += totalDetails;
    return receiptTemplate;
}

const printReceipt = (barcodes) => {
    let result = (barcodes.length > 0) ? renderReceipt(barcodes) : '[ERROR:]';
    return result;
}

module.exports = {
    renderReceipt,
    handleBarcodesToItemMap,
    handleMapToItemList
};