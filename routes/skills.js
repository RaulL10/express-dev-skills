var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"


//get /skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show)

module.exports = router;
