var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var u = [
  { name: 'form-data'}
];

router.post('/api/fileanalyse/', upload.single('0'), function (req, res) {
    console.log("ROUTE CALLED");
    res.json({fileSize: req.file.size});    
});

module.exports = router;
