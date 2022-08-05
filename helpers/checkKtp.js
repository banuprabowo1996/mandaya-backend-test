function checkKTP(dateOfBirth, ktp) {
    let _dob = dateOfBirth.split('-').reverse()
    let year = _dob[2].slice(2, 4)
    let spliced = _dob.splice(-1)
    let ddMMyy = _dob.join('') + year

    const validKTP = ktp.includes(ddMMyy, 6)
    return validKTP
}

let benar = checkKTP('1999-08-08', '3303040807990001')
console.log(benar);

module.exports = checkKTP