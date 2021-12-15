const HelperSetCookie = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const HelperGetLang = (name, value, days) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  var selectedVal = "";
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      selectedVal = c.substring(nameEQ.length, c.length);
      break;
    }
  }
  return selectedVal;
};

export default { HelperSetCookie, HelperGetLang };
