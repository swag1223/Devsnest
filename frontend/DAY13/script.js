const button = document.querySelector(".btn");
const content = document.querySelector('.content');


button.addEventListener("click", inspire);

async function inspire(e) {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    content.innerHTML = data.content;
    console.log(data);

}
