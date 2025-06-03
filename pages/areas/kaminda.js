document.addEventListener('DOMContentLoaded', async function () {
    const area = "Kaminda";
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImZpcnN0X25hbWUiOiJLYXNoaW1hIiwibGFzdF9uYW1lIjoiWXV1a2kiLCJlbWFpbCI6Imthc2hpbWE1MkBnbWFpbC5jb20iLCJiaXJ0aF9kYXRlIjoiMjAwOC0wOC0wNVQwMzowMDowMC4wMDBaIiwicGhvbmUiOiIxNDk5NzY3OTMwMyIsImFkbWluIjowLCJpYXQiOjE3NDgzNTA3NTh9.L11DU4gCqt3xJyMlP3op0AvTt3PWTZU_1OIum1Yt258'
    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token
        }
    });
    const data = await response.json();
    console.log(data);

    for(var brinquedo of data.Resultado){
        console.log(brinquedo);
        
        const grid = document.querySelector(".rides-grid");
        grid.innerHTML = grid.innerHTML + `<div class="rides-grid">
            <div class="ride-card">
                <div class="ride-image" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVRfFxmJFGfbuyrDC6PHxHGon0e3XV0Mv9Q&s')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">${brinquedo.name}</h3>
                    <div class="ride-time">${brinquedo.waiting_time} min</div>  
                    <span class="ride-status status-busy">${brinquedo.status}</span>
                </div>
            </div>
        </div>` 
    }

});