export function checkForMatch(array, valueToCheck) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].date === valueToCheck) {
      return true
    }
  }
  return false
}
