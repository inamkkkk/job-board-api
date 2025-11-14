const express = require('express');
const jobController = require('../controllers/jobController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['employer', 'admin']), jobController.createJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put('/:id', authenticate, authorize(['employer', 'admin']), jobController.updateJob);
router.delete('/:id', authenticate, authorize(['employer', 'admin']), jobController.deleteJob);

module.exports = router;