function validasi() {
    var nama = document.getElementById("nama");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var konfirmasi_password = document.getElementById("konfirmasi_password");
    var alamat_website = document.getElementById("alamat_website");

    var namaError = document.getElementById("namaError");
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var konfirmasiPasswordError = document.getElementById("konfirmasiPasswordError");
    var alamatWebsiteError = document.getElementById("alamatWebsiteError");

    var valid = true;


    if (nama.value.trim() === "") {
        namaError.textContent = "Nama Lengkap tidak boleh kosong!";
        namaError.style.color = "red";
        valid = false;
    } else {
        namaError.textContent = "";
    }


    if (username.value.trim() === "") {
        usernameError.textContent = "Username tidak boleh kosong!";
        usernameError.style.color = "red";
        valid = false;
    } else if (username.value.trim().length < 6) {
        usernameError.textContent = "Username minimal 6 karakter!";
        usernameError.style.color = "red";
        valid = false;
    } else {
        usernameError.textContent = "";
    }


    if (email.value.trim() === "") {
        emailError.textContent = "Email tidak boleh kosong!";
        emailError.style.color = "red";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
        emailError.textContent = "Alamat email tidak valid!";
        emailError.style.color = "red";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password tidak boleh kosong!";
        passwordError.style.color = "red";
        valid = false;
    } else if (password.value.trim().length < 6) {
        passwordError.textContent = "Password minimal 6 karakter!";
        passwordError.style.color = "red";
        valid = false;
    } else {
        passwordError.textContent = "";
    }


    if (konfirmasi_password.value.trim() === "") {
        konfirmasiPasswordError.textContent = "Konfirmasi password tidak boleh kosong!";
        konfirmasiPasswordError.style.color = "red";
        valid = false;
    } else if (konfirmasi_password.value.trim() !== password.value.trim()) {
        konfirmasiPasswordError.textContent = "Konfirmasi password tidak sama dengan password!";
        konfirmasiPasswordError.style.color = "red";
        valid = false;
    } else {
        konfirmasiPasswordError.textContent = "";
    }


    if (alamat_website.value.trim() === "") {
        alamatWebsiteError.textContent = "Alamat website tidak boleh kosong!";
        alamatWebsiteError.style.color = "red";
        valid = false;
    } else if (!/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*?$/.test(alamat_website.value.trim())) {
        alamatWebsiteError.textContent = "Alamat website tidak valid!";
        alamatWebsiteError.style.color = "red";
        valid = false;
    } else {
        alamatWebsiteError.textContent = "";
    }

    return valid;
}
