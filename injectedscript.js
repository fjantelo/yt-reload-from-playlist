const currentURL = new String(window.location);

var indexEnd = 0;
for (let i = 0; i < currentURL.length - 5; i++) {
  if (
    currentURL[i] == "&" &&
    currentURL[i + 1] == "l" &&
    currentURL[i + 2] == "i" &&
    currentURL[i + 3] == "s" &&
    currentURL[i + 4] == "t"
  ) {
    indexEnd = i;
    break;
  }
}
var newURL = "";
for (let i = 0; i < indexEnd; i++) {
  newURL += currentURL[i];
}
window.location = newURL;
