function jumlahNilai(data){
    let sum = 0
    data.forEach(element => {
        sum += element.score
    });
    return sum
}

export {jumlahNilai}
