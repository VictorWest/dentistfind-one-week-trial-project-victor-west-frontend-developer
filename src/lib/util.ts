export const THEME_COLOUR = "#030712"

export const getRandomNumbers = (length: number) => {
    let value = []

    for (let i = 0; i < length; i++){
        value.push(Math.floor(Math.random() * 10))
    }

    return Number(value.join(''))
}