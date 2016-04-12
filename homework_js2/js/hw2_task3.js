var login = prompt("Enter your login");
var password;

if (login == "admin") {
    password = prompt("Enter your password");
    if (password == "passw0rd") {
        alert("Welcome home!");
    } else if (password == null ) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else {
    alert("Access denied");
}

