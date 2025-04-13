document.getElementById("login").addEventListener("submit", function(login) {
    login.preventDefault()
})
function register() {
    let nama = document.getElementById("username").value
    localStorage.setItem("username", nama)

    window.location.href='main-page/index.html'
    
    // let webSound = localStorage.getItem("webSound")
    // webSound.play()
    // webSound.volume = 0.5

    
}