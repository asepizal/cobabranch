import {data} from './data.js'
import { countJumlahSiswa } from './countJumlahSiswa.js'
import { jumlahNilai } from './jumlahNilai.js'
import {tambahData} from './tambahData.js'

function totalNilai(data){
    let jumlahsiswa = countJumlahSiswa(data)
    let jumlahScore = jumlahNilai(data)
    console.log(tambahData())
    return jumlahsiswa*jumlahScore
}

console.log(totalNilai(data))
