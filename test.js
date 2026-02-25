// test.js - 버그 있는 코드
function test() {
    console.log("debug");  // console.log 문제
    var x = 1;             // var 문제
    if (x == null) {       // == 문제
        console.log("null");
    }
}
