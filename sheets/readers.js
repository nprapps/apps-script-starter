function readSheetAsObjects(name) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(name);
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var header = sheet.getSheetValues(1, 1, 1, lastColumn)[0];
  var rows = sheet.getSheetValues(2, 1, lastRow - 1, lastColumn);
  var parsed = header;
  var output = [];
  for (var r = 0; r < rows.length; r++) {
    var row = rows[r];
    var obj = {};
    for (var c = 0; c < row.length; c++) {
      var prop = header[c];
      if (!prop) continue;
      var cell = row[c];
      obj[prop] = cell;
    }
    output.push(obj);
  }
  return output;
};

function readSheetAsStrings(name) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(name);
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var values = sheet.getSheetValues(1, 1, lastRow, lastColumn);
  var output = [];
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    for (var j = 0; j < row.length; j++) {
      var value = row[j];
      if (value != "") output.push(value);
    }
  }
  return output;
}