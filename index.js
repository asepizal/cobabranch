import {data} from './data.js'
import { countJumlahSiswa } from './countJumlahSiswa.js'
import { jumlahNilai } from './jumlahNilai.js'

function totalNilai(data){
    let siswa = countJumlahSiswa(data)
    let jumlahScore = jumlahNilai(data)
    return siswa*jumlahScore
}

console.log(totalNilai(data))
