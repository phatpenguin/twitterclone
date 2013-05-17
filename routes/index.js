
exports.index = function(req, res){
  res.render('index', {
    "header": "People",
    "items": [
        {"name": "Thom", "first": true, "url": "#Thom"},
        {"name": "Dick", "link": true, "url": "#Dick"},
        {"name": "Harry", "link": true, "url": "#Harry"}
    ]
  });
};