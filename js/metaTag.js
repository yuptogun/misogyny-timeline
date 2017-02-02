var ua = navigator.userAgent;
var isAndroid = (ua.match(/Android/i) != null); //&& ua.indexOf("mobile");
var isChrome = ua.match(/Chrome/i) != null; //&& ua.indexOf("mobile");
var isWebView = ((ua.match(/wv/i)) != null) || ((ua.match(/FBAV/i) != null))
// if the device runs Android:
if (isAndroid && isChrome) {
  $('#pgtitle').after('<meta name="viewport" content="initial-scale=0.25">');
}
