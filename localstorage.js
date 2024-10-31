function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username && password) {
        //SAVE IN LS
        localStorage.setItem("loggedInUser", JSON.stringify({ username,password }));

        document.getElementById("auth-buttons").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";
        document.getElementById("greeting").innerText = `Hello, ${username}!`;

        // close mw
        const loginModal = document.getElementById("loginModal");
        const modalInstance = bootstrap.Modal.getInstance(loginModal);
        modalInstance.hide();
    } else {
        alert("Please fill in both fields.");
    }
}

function logout() {
    //delete 
    localStorage.removeItem("loggedInUser");

    // update
    document.getElementById("auth-buttons").style.display = "block";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("greeting").innerText = "";
}

// check user sign in
document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        document.getElementById("auth-buttons").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";
        document.getElementById("greeting").innerText = `Hello, ${loggedInUser.username}!`;
    }
});
