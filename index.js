function computerPlay() {
    array = ['Rock', 'Scissors', 'Paper']
    let randomIndex = Math.floor(Math.random() * 2 + 1)
    return array[randomIndex]

}
console.log(computerPlay())