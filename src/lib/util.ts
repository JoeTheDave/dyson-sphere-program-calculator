export const camelToWords = (camelCaseText: string) => {
  // Regular expression to match camelCase words with grouped numbers
  const regex = /[A-Z]?[a-z\d]+/g
  // Extract words from the camelCase text
  const words = camelCaseText.match(regex)
  if (!words) return '' // Return empty string if no words found

  // Capitalize each word and join with spaces
  return words
    .map(word => {
      // Capitalize first letter if it's not a number
      if (!isNaN(parseInt(word.charAt(0)))) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join(' ')
}

export const camelToKebab = (camelCaseText: string) => camelCaseText.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()

export const kebabToCamel = (kebabCaseText: string) =>
  kebabCaseText.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

export const startCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
