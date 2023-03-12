// 0.45359237kg
//0.45359237 *1000 grms
//16 ounse
function inputdata() {
    let inputdata = document.getElementById('input').value
    if (inputdata == 0) {
        document.getElementById('grm').innerText = 0
        document.getElementById('kgm').innerText = 0
        document.getElementById('o').innerText = 0
    } else {
        document.getElementById('grm').innerText = inputdata * (0.45359237);
        document.getElementById('kgm').innerText = inputdata * (0.45359237) * 1000;
        document.getElementById('o').innerText = inputdata * 16;
    }


}