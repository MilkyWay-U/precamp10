const profile = [
    { name: "철수", age: 8, school: "다람쥐초등학교" },    
    { name: "영희", age: 8, school: "다람쥐초등학교" },    
    { name: "훈이", age: 7, school: "토끼초등학교" }
]
// undefined
profile.length
// 3
profile[1]
// {name: '영희', age: 8, school: '다람쥐초등학교'}
profile[1].name
// '영희'
profile[2].school
// '토끼초등학교'
const fruits = [
       { number:  1, title: "레드향"　　　　},
       { number:  2, title: "샤인머스켓"　　},
       { number:  3, title: "산청딸기"　　　},
       { number:  4, title: "한라봉"　　　　},
       { number:  5, title: "사과"　　　　　},
       { number:  6, title: "애플망고"　　　},
       { number:  7, title: "딸기"　　　　　},
       { number:  8, title: "천혜향"　　　　},
       { number:  9, title: "과일선물세트"　},
       { number: 10, title: "귤"　　　　　 },
]
// undefined
fruits
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '산청딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '애플망고'}6: {number: 7, title: '딸기'}7: {number: 8, title: '천혜향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10[[Prototype]]: Array(0)
fruits[0].number+ " "+ fruits[0].title
// '1 레드향'
fruits[1].number+ " "+ fruits[1].title
// '2 샤인머스켓'
fruits[2].number+ " "+ fruits[2].title
// '3 산청딸기'
fruits[3].number+ " "+ fruits[3].title
// '4 한라봉'

for (let i = 0; i < fruits.length;i++){
    console.log(fruits[i].number+" "+ fruits[i].title)
}
// VM664:2 1 레드향
// VM664:2 2 샤인머스켓
// VM664:2 3 산청딸기
// VM664:2 4 한라봉
// VM664:2 5 사과
// VM664:2 6 애플망고
// VM664:2 7 딸기
// VM664:2 8 천혜향
// VM664:2 9 과일선물세트
// VM664:2 10 귤
// undefined

