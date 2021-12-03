const classmates = ['철수', '영희', '훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[2]
// '훈이'
classmates.includes('훈이')
// true
classmates.includes('둘리')
// false
classmates.push('코드')
// 4
classmates
// (4) ['철수', '영희', '훈이', '코드']
classmates.includes('코드')
// true
classmates.pop()
// '코드'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3