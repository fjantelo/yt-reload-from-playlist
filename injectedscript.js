const currentURL = new String(window.location);
var isYoutubeURL = false;
if (currentURL.includes("youtube.com") && currentURL.includes("&list") && !currentURL.includes("music.youtube.com")) {
  isYoutubeURL = true;
}
if (isYoutubeURL) {
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
  var newURL = currentURL.substring(0, indexEnd);
  window.location = newURL;
}
