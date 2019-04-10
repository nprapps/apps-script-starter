

// load a file as a string
// useful from HTML output: `<?!= include("file.html") ?>`
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}