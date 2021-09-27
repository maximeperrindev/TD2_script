var crypto = require('crypto')
const fs = require('fs');

module.exports.getHash = (filename, algorithm) => getCustomHash(filename, algorithm);

function getCustomHash(filename, algorithm = "sha256") {
    return new Promise((resolve, reject) => {
        let shasum = crypto.createHash(algorithm);
        try {
            let s = fs.ReadStream(filename)
            s.on('data', function(data) {
                shasum.update(data)
            })
            s.on('end', function() {
                const hash = shasum.digest('hex')
                return resolve(hash);
            })
        } catch (error) {
            return reject('calc fail');
        }
    });
}