// 테스트용 버그 코드 - 수정됨
function test() {
    console.log("test");  // console.log 제거 필요
    var x = 1;  // var 대신 const 사용
    if(x == null) {  // == 대신 === 사용
        console.log("null");
    }
}
