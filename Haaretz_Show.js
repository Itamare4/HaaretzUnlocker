/*
*   Haaretz unlocker
*   Written By Itamar Eliakim
*/

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
		break;
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["http://www.haaretz.co.il/*"]},
  ["blocking", "requestHeaders"]
);