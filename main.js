function changeColor(newColor) {
    const elem = document.getElementById('barva');
    elem.style.color = newColor;
}

console.log("ahoj2")


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            // Swap
            ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]

function pokusna_funkce(cislo){
    let stat
    stat = false

    if (cislo > 5) {
        stat = true
        return stat
    }
    return stat
}

console.log(pokusna_funkce(6))