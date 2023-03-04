import httpCommon from "../http-common";

const getBarcode = (data) => {
    console.log(data)
    return httpCommon.post('https://qr-code-and-barcode-scanner.p.rapidapi.com/ScanCode', data, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '596b4a1785msh0e93b212eef6330p1512e4jsnd48ee83fc2ac',
            'X-RapidAPI-Host': 'qr-code-and-barcode-scanner.p.rapidapi.com'
        }
    });
};

const scanID = (data) => {
    return httpCommon.post('https://ocr43.p.rapidapi.com/v1/results', data,
        {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '69aa88bb0cmsh1f88160eee96bb6p1d6fd9jsnc858731d86cb',
                'X-RapidAPI-Host': 'ocr43.p.rapidapi.com'
            }
        })
}

export default {
    getBarcode,
    scanID,
}