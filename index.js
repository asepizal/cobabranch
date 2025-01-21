import {data} from './data.js'
import { countJumlahSiswa } from './countJumlahSiswa.js'

function totalNilai(data){
    let siswa = countJumlahSiswa(data)
    return siswa
}

console.log(totalNilai(data))
