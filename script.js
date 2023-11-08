
document.addEventListener('DOMContentLoaded', () =>{
    let isIndex = false;
    let isDept = false;
    if(document.title === 'Home'){
        isIndex = true;
    }
    else{
        isDept = true;
    }
    if(isIndex){
        const searchIcon = document.getElementById('sbutton');
        searchIcon.addEventListener('click', () => {
            const searchData = document.getElementById('sbar').value;
            const [courseCode, dept] = searchData.split('-').map(str => str.toUpperCase());
            window.location.href = `${dept}.html?code=${courseCode}`;
        });
    }
    if(isDept){
        const urlParams = new URLSearchParams(window.location.search);
        const courseCode = urlParams.get('code');
        const courseRow = document.getElementById(courseCode);
        if (courseRow) {
            courseRow.classList.add('highlighted');
            courseRow.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                courseRow.classList.remove('highlighted');
            }, 5000);
        }
    }
});


let form = getElementById('request-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', '/submit');
    request.send(formData);
    
});