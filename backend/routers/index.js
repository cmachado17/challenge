const { Router } = require("express");
const router = Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {getEvents, newEvent} = require('../controllers/index.controllers');

router.get('/get-events',upload.fields([]), getEvents);
router.post('/new-event',upload.fields([]), newEvent);

module.exports = router;