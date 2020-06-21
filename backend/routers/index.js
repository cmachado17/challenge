const { Router } = require("express");
const router = Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {getEvents, newEvent, getEvent, deleteEvent} = require('../controllers/index.controllers');

router.get('/get-events', getEvents);
router.get('/evento/:id', getEvent);
router.post('/new-event',upload.fields([]), newEvent);
router.delete('/delete-event/:id', deleteEvent)


module.exports = router;