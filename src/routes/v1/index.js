const express  = require('express');

const  router = express.Router();

const {infoContoller} = require('../../controllers');

router.get('/info',infoContoller.info);


module.exports = router;