// generate 6 bcrypt password hashing
let password = '123456';
$('#generate').click(function (e) {
    // generate random number
    let hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    $('#password_input').val(hash);
    console.log('sdada');
    e.preventDefault();
});
function Copy() {
    var Url = document.getElementById("password_input");
    Url.innerHTML = window.location.href;
    console.log(Url.innerHTML)
    Url.select();
    document.execCommand("copy");
}
