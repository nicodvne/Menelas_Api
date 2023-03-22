const express = require('express');
const router = express.Router();

const DispatchControllerModule  = require('../controllers/dispatchController.js');
const DispatchController = new DispatchControllerModule;

router.post('/insert', async (req, res) => DispatchController.createElement(req, res));

router.post('/delete', async (req, res) => DispatchController.deleteElement(req, res));

router.post('/update', async(req, res) => DispatchController.updateElement(req, res));

module.exports = router;
