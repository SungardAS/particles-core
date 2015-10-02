module.exports = function(str,options) {
  //if (( (str != null && typeof str != 'object') ? str.indexOf('{') : void 0) === 0) {
  if ((str != null && typeof str != 'object')) {
    return '"'+str+'"';
  } else {
    return str;
  }
};
