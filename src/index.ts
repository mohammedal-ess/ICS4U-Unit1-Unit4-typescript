/**
 *
 * This is dicegame program
 * author mohammed al-essawi
 * since 2022-10-07
 */
import promptSync from 'prompt-sync'

const randomNumber = Math.floor(Math.random() * 6 + 1)
let counter = 0

while (true) {
  const prompt = promptSync()
  const userString = prompt('Lets Guess a number from 1 to 6: ')
  const userNumber = parseInt(userString)
  counter += 1
  if (userNumber === randomNumber) {
    console.log(`it is correct it is took u  ${counter} try)`)
    break
  } else if (randomNumber < userNumber) {
    console.log('it is high guess lower than it')
  } else if (randomNumber > userNumber) {
    console.log('it is low guess higher than it')
  } else {
    console.log('Invalid Input')
  }
}
console.log('\nDone')
