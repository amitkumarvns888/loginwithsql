const bcrypt = require('bcrypt')

const hashpassword = async (pass) => {
    const temppass = bcrypt.hashSync(pass, 10)
    console.log(temppass)
    console.log(process.argv[2])
}
hashpassword(process.argv[2]);
