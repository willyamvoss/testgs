function testGS() {

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=EaciDcawpIo6DczhJ4UxrV8GVaLCeaq0ZhXQ0W1HlhDhUzHX3lutVYrQ37lCe0UkUfq_B1a3P5_HVITdruGLuutuHaEPjxqlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA9nm6Otddi9u5AmuHOYAPfQ1PSHoXlWKmx_HIfvxK4zUyPSTrQJCwPnUGnz7Htr4YwhJmzKs5imvJsw0wqpxiI&lib=MiXySotRqK2zVAKLs55KfTi-EsA0mI974"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status
        })
    
}

document.getElementById("btn").addEventListener("click",testGS)

