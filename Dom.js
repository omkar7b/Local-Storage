function ongetacall(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;


//Storing Data
localStorage.setItem('name', name);
localStorage.setItem('email', email);
localStorage.setItem('phone', phone);
localStorage.setItem('date', date);
localStorage.setItem('time', time);
}