const {apiInit, createPatient} = require("./controller");
const router = require('express').Router();

// test route
router.get('/', apiInit)

// create
router.post('/patient/create', createPatient)

// read

// update

// delete

module.exports = router;