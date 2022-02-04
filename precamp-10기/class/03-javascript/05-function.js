const refresh = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token
}



// 화살표 함수 설명
// 함수 표현식: 
    // const hello = function(){
        // alert("안녕하세요")
// }
// 화살표 함수 : 
    // const hello = () => {
        // alert("안녕하세요")
    // }

    // 화살표 함수를 쓸 때 =>는 function()의 역할과 비슷함. 그래서 귀찮을 땐 걍 function() 쓰지말고
    // => 써라 귀찮음이 많은 닝겐아