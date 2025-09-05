function setCertData() {
    const name = localStorage.getItem('studentName') || 'Иван Иванов';
    document.getElementById('studentName').innerText = name;
    document.getElementById('avg').innerText = (averagePercent() || 0) + '%';
    document.getElementById('date').innerText = new Date().toLocaleDateString('ru-RU');
}
document.addEventListener('DOMContentLoaded', setCertData);