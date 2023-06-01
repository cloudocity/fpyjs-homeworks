function number(n) {
    var i = 2
    while( i <= n) {
        if (i < n) {
            if (n % i === 0) { console.log('Сразу делится', n, i) 
            return n} else {i++; console.log('Прибавляем', n, i-1)}
        } else {console.log('Простое');
        return n}
    }
        return n 
}

console.log(number(process.argv[2]))