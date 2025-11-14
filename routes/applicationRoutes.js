const express = require('express');
const applicationController = require('../controllers/applicationController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, applicationController.createApplication);
router.get('/', authenticate, applicationController.getAllApplications);
router.get('/:id', authenticate, applicationController.getApplicationById);
router.put('/:id', authenticate, applicationController.updateApplication);
router.delete('/:id', authenticate, applicationController.deleteApplication);

module.exports = router;