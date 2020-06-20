const { Router } = require("express");
const router = Router();

const {getEvents, newEvent} = require('../controllers/index.controllers');

router.get('/get-events', getEvents);
router.post('/new-event', newEvent);

module.exports = router;