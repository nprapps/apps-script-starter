function writeSheetObject(name, obj) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(name);
  var lastColumn = sheet.getLastColumn();
  if (lastColumn) {
    var header = sheet.getSheetValues(1, 1, 1, lastColumn)[0];
  } else {
    header = [];
  }
  var index = {};
  header.forEach(function(h, i) {
    index[h] = i;
  });
  var row = [];
  for (var k in obj) {
    var i = header.indexOf(k);
    if (i == -1) {
      i = header.push(k) - 1;
    }
    row[i] = obj[k];
  }
  // update header
  sheet.getRange(1, 1, 1, header.length).setValues([header]);
  writeRow(name, row);
}

function writeSheetRow(name, row) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(name);
  sheet.appendRow(row);
}