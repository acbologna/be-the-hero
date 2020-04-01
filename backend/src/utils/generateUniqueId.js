const crypto = require('crypto');

module.exports = function generatedUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}