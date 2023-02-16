var button1 = document.getElementById('commit')
var button2 = document.getElementById('cancel')
var arrayMovie = document.getElementsByName('movie');

button1.addEventListener("click", function () {
    var insertName = document.getElementById('inputName').value;
    alert(insertName + "님, 저와 " + countChecked() + "개의 취향이 같으시네요!");
})

button2.addEventListener("click", function () {
    for (var i = 0; i < arrayMovie.length; i++) {
        if (arrayMovie[i].checked == true) {
            arrayMovie[i].checked = false
            break;
        }
    }
    alert("취소되었습니다.")
})

function countChecked() {
    var checked_count = 0;

    for (var i = 0; i < arrayMovie.length; i++) {
        if (arrayMovie[i].checked == true) {
            checked_count += 1;
            break;
        }
    }
    return checked_count
}