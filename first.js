var b1 = document.getElementById('b1');
b1.addEventListener('mousemove', ()=>{
    var v = document.getElementById("h1");
    var x = v.innerHTML;
    x++;
    v.innerHTML = x;
});<link href="https://fonts.googleapis.com/css?family=Ruwudu:regular,500,600,700" rel="stylesheet" />
// let prevX = null;<link href="https://fonts.googleapis.com/css?family=Timmana:regular" rel="stylesheet" />
// document.addEventListener('mousemove', (event) => {
//     const currentX = event.clientX;
//     var h1 = document.getElementById("h1");
//     if (prevX !== null) {
//         if (currentX > prevX) {
//             var v = h1.innerHTML;
//             v++;
//             h1.innerHTML = v;
//         } else if (currentX < prevX) {
//             var v = h1.innerHTML;
//             v--;
//             h1.innerHTML = v;
//         }
//     }
//     prevX = currentX;
// });