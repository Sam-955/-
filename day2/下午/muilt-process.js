// var input = document.getElementById('number')
function fibonacci(n){
    return n<=2 ?1:fibonacci(n-1)+fibonacci(n-2)
}
console.log(this)
var onmessage=function(event){ // 不能用函数声明
    var number = event.data
    console.log('分线程接收到主线程发送的数据')
    var result=fibonacci(number)
    postMessage(result)
    console.log("分线程向主线程返回数据"+result)}
    // var upper=event.datatoUpperCase() // 通过event.data获得发送来的数据
    // postMessage(upper)// 将获取到的数据发送到主线程


// document.getElementById("btn").onclick=function (){
//     var number=input.value
//     var result=fibonacci(number)
//     alert(result)
// }

