let students = ["철수", "영희", "훈이", "짱구", "유리"]

// slice는 어떤 배열의 begin부터 end까지 (end 미포함)에 대한 
// 얕은 복사본을 새로운 배열 객체로 반환함.
//  slice는 원본 배열은 바뀌지 않는다.
//  ex) 리스트명.slice(begin값, end값) -> [begin값]부터 [end-1값]까지의 얕은 복사!

newStudents=students.slice(0,3)
