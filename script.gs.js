function doGet(e) {
  return HtmlService.createHtmlOutput("Request method not supported");
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Extract form data from the POST request
  var tanggal = e.parameter.tanggal;
  var nama = e.parameter.nama;
  var alamat = e.parameter.alamat;
  var ipAlamat = e.parameter["ip-alamat"];

  // Append the data to the spreadsheet
  sheet.appendRow([nama, tanggal, alamat, ipAlamat]);

  return ContentService.createTextOutput("Data submitted successfully!");
}
