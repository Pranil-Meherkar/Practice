// input

const data={
    name:'datta',
    page:1,
    size:0,
    search:'',
    abc:'abc'
}

// expected output =>  ?name=datta&page=1&size=0&abc=abc


let queryStr = Object.entries(data).reduce((acc,[key,value],index) => {
    if(value || value === false || value === 0){
        acc += (index ? "&": "?") + `${key}=${value}`
    }
    return acc
}, "")


console.log(queryStr)