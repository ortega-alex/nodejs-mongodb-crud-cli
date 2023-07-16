require('dotenv').config();

module.exports = {
    MONTODB_URI: process.env.MONTODB_URI || 'mongodb://localhost/taskcli'
};
