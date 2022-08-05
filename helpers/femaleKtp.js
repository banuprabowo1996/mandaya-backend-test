function femaleKTP(ktp) {
    let ddNumber = +ktp.slice(6, 8) + 40
    let start = ktp.substring(0, 6)
    let end = ktp.substring(8)
    return start + ddNumber + end
}

module.exports = femaleKTP