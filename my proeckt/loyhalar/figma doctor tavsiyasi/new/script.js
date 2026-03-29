const button = document.getElementById('btn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    // Tasodifiy rang yaratish
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    // Sarlavha rangini va matnini o'zgartirish
    title.style.color = "#" + randomColor;
    title.innerText = "JavaScript ishladi!";
});