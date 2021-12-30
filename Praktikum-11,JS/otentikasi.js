function valid(){
    let usn = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    if(usn == "Syifaraa" && pw == "0711"){
        alert('Selamat!')
        document.body.innerHTML="<h1> Selamat! Login Berhasil</h1>"
    }
    else{
        alert('Username atau Password yang anda Masukkan tidak valid. Ulangi')
    }
}
