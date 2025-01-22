import {data} from './data.js'
import { countJumlahSiswa } from './countJumlahSiswa.js'
import { jumlahNilai } from './jumlahNilai.js'

function totalNilai(data){
    let jumlahsiswa = countJumlahSiswa(data)
    let jumlahScore = jumlahNilai(data)
    return jumlahsiswa*jumlahScore
}

console.log(totalNilai(data))
