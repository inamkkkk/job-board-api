const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  industry: {
    type: String,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;