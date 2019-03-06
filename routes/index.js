var express = require('express');
var router = express.Router();
var dbConfig=require('../dbConfig/submitData');
var middleWare=require('../middlewares/index');
router.get("/api/find_duplicates", function(req, res) {
  res.render("find_duplicates", { title: "Find Duplicates" });
});
router.get("/api/check_order", function(req, res) {
  res.render("check_paranthese");
});

router.post("/api/check_duplicates", function(req, res) {
  var str = req.body.fname;
  var nonDuplicates = middleWare.sortAlphabets(str);
  console.log(nonDuplicates);
  res.render("find_duplicates", { str: nonDuplicates });
});

router.post("/api/check_paranthese", function(req, res) {
  var str = req.body.fname;
  console.log(str);
  var order = middleWare.checkOrder(str);
  res.render("check_paranthese", { str: order });
});

module.exports = router;