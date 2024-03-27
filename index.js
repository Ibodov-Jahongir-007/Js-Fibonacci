function fibonacci(num) {
    let fbncci = [0,1]

    for(let i = 2; i <=num ; i++) {
        let num1 = fbncci[i - 1]
        let num2 = fbncci[i - 2]

        fbncci.push(num1 + num2)
    }
    return fbncci[num]
}
console.log(fibonacci());
