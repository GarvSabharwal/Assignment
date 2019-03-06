module.exports={
checkOrder :function(text) {
    var arr = [];
    for (var i = 0; i < text.length; i++) {
      if (text[i] == "{" || text[i] == "(" || text[i] == "[") arr.push(text[i]);
  
      if (text[i] == "}" || text[i] == ")" || text[i] == "]") {
          if (arr.length==0) {
          return "Correct";
        } else if (!checkPair(arr.pop(), text[i])) {
          return "In Correct";
        }
      }
    }
    if (arr.length==0) return "Correct";
    else {
      return "InCorrect";
    }
},
  sortAlphabets :function(text) {
    var sortedString = text.split("");
    var unique = sortedString.filter(function(a) {
      return sortedString.indexOf(a) === sortedString.lastIndexOf(a);
    });
    return unique.join("");
  }
}
var checkPair = function checkPair(str1, str2) {
    if (str1 == "(" && str2 == ")") return true;
    else if (str1 == "{" && str2 == "}") return true;
    else if (str1 == "[" && str2 == "]") return true;
    else return false;
  };