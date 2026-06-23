// ===========================================================================
// STRINGS — ejercicios por PATRÓN (fácil → intermedio)
//
//   pnpm tsx src/practice/strings.ts
//
// Truco mental: split('') te pasa de string a array → usás map/filter/reduce
// → join('') te devuelve a string. Casi todo string-problem es eso.
// ===========================================================================

function show(label: string, value: unknown) {
  console.log(`\n🔹 ${label}`)
  console.log(value)
}

// ███ PATRÓN 1: split / join (string ⇄ array) █████████████████████████████

// 1.1 Invertí una palabra. → 'ayak'
function reverse(s: string): string {
  // TODO  (split → reverse → join)
  return ''
}
// show('1.1 reverse', reverse('kaya'))

// 1.2 Contá las palabras de una frase. → 3
function wordCount(s: string): number {
  // TODO  (split por espacio → length; ojo el trim)
  return 0
}
// show('1.2 wordCount', wordCount('hello dear world'))

// 1.3 Pasá 'hello world' a 'Hello World' (capitalizar cada palabra).
function titleCase(s: string): string {
  // TODO  (split ' ' → map capitaliza → join ' ')
  return ''
}
// show('1.3 titleCase', titleCase('hello world'))

// ███ PATRÓN 2: búsqueda y conteo de caracteres ██████████████████████████

// 2.1 Contá las vocales. → 3 (en 'banana': a,a,a)
function countVowels(s: string): number {
  // TODO  (split → filter incluye en 'aeiou')
  return 0
}
// show('2.1 countVowels', countVowels('banana'))

// 2.2 ¿Es palíndromo? → true
function isPalindrome(s: string): boolean {
  // TODO
  return false
}
// show('2.2 palindrome', isPalindrome('reconocer'))  // true

// 2.3 La primera letra que NO se repite. 'aabbcdd' → 'c'
function firstUnique(s: string): string | null {
  // TODO  (contar con reduce → find la de count 1)
  return null
}
// show('2.3 firstUnique', firstUnique('aabbcdd'))

// ███ PATRÓN 3: transformar caracteres ████████████████████████████████████

// 3.1 Sacá todos los espacios. 'a b c' → 'abc'
function removeSpaces(s: string): string {
  // TODO  (split ' ' → join '' ; o replaceAll)
  return ''
}
// show('3.1 removeSpaces', removeSpaces('a b c'))

// 3.2 Contá cuántas veces aparece cada carácter. 'aab' → { a: 2, b: 1 }
function charFrequency(s: string): Record<string, number> {
  // TODO  (split → reduce)
  return {}
}
// show('3.2 charFrequency', charFrequency('aab'))

// 3.3 Capitalizá solo la primera letra. 'hello' → 'Hello'
function capitalize(s: string): string {
  // TODO  (charAt(0).toUpperCase() + slice(1))
  return ''
}
// show('3.3 capitalize', capitalize('hello'))

// ███ INTERMEDIOS ████████████████████████████████████████████████████████

// 4.1 ¿Son anagramas? 'listen' y 'silent' → true
//     (mismas letras, distinto orden)
function areAnagrams(a: string, b: string): boolean {
  // TODO  (split → sort → join → comparar)
  return false
}
// show('4.1 anagrams', areAnagrams('listen', 'silent'))

// 4.2 La palabra más larga de una frase. 'the quick brown fox' → 'quick'
function longestWord(s: string): string {
  // TODO  (split → reduce comparando length)
  return ''
}
// show('4.2 longestWord', longestWord('the quick brown fox'))

// 4.3 Comprimí caracteres repetidos: 'aaabbc' → 'a3b2c1'
function compress(s: string): string {
  // TODO  (recorrer y contar consecutivos)
  return ''
}
// show('4.3 compress', compress('aaabbc'))

// 4.4 ¿Cuántas veces aparece 'sub' dentro de 'str'? (sin solapar)
//     'ababab', 'ab' → 3
function countOccurrences(str: string, sub: string): number {
  // TODO  (split(sub).length - 1)
  return 0
}
// show('4.4 countOccurrences', countOccurrences('ababab', 'ab'))

// ===========================================================================
// SOLUCIONES (tapá hasta intentar)
// ===========================================================================
/*
1.1 s.split('').reverse().join('')
1.2 s.trim().split(/\s+/).length
1.3 s.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')

2.1 s.split('').filter((c) => 'aeiou'.includes(c)).length
2.2 s === s.split('').reverse().join('')
2.3 const freq = s.split('').reduce((acc, c) => { acc[c] = (acc[c]||0)+1; return acc }, {} as Record<string, number>)
    return s.split('').find((c) => freq[c] === 1) ?? null

3.1 s.split(' ').join('')   // o s.replaceAll(' ', '')
3.2 s.split('').reduce((acc, c) => { acc[c] = (acc[c]||0)+1; return acc }, {} as Record<string, number>)
3.3 s.charAt(0).toUpperCase() + s.slice(1)

4.1 const norm = (x: string) => x.split('').sort().join('')
    return norm(a) === norm(b)
4.2 s.split(' ').reduce((longest, w) => (w.length > longest.length ? w : longest), '')
4.3 // recorrer con índice, contar consecutivos:
    let res = '', count = 1
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) count++
      else { res += s[i] + count; count = 1 }
    }
    return res
4.4 str.split(sub).length - 1
*/
