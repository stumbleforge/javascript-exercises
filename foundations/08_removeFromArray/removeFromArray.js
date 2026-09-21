const removeFromArray = function removeItems(arr) {
  let blacklist = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function (e) {
    return blacklist.indexOf(e) == -1;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
