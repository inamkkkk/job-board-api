const express = require('express');
const companyController = require('../controllers/companyController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['employer', 'admin']), companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);
router.put('/:id', authenticate, authorize(['employer', 'admin']), companyController.updateCompany);
router.delete('/:id', authenticate, authorize(['employer', 'admin']), companyController.deleteCompany);

module.exports = router;