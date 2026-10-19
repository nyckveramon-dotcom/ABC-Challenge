const abecedario = [
    { letra: 'A', palabra: 'Avión'},
    { letra: 'B', palabra: 'Barco' },
    { letra: 'C', palabra: 'Casa' },
    { letra: 'D', palabra: 'Dado' },
    { letra: 'E', palabra: 'Elefante' },
    { letra: 'F', palabra: 'Foca' },
    { letra: 'G', palabra: 'Gato' },
    { letra: 'H', palabra: 'Helado' },
    { letra: 'I', palabra: 'Isla' },
    { letra: 'J', palabra: 'Jirafa' },
    { letra: 'K', palabra: 'Koala' },
    { letra: 'L', palabra: 'Lápiz' },
    { letra: 'M', palabra: 'Mono' },
    { letra: 'N', palabra: 'Nube' },
    { letra: 'Ñ', palabra: 'Ñandú' },
    { letra: 'O', palabra: 'Oso' },
    { letra: 'P', palabra: 'Pelota' },
    { letra: 'Q', palabra: 'Queso' },
    { letra: 'R', palabra: 'Reloj' },
    { letra: 'S', palabra: 'Sol' },
    { letra: 'T', palabra: 'Tren' },
    { letra: 'U', palabra: 'Uva' },
    { letra: 'V', palabra: 'Vaca' },
    { letra: 'W', palabra: 'Wafle' },
    { letra: 'X', palabra: 'Xilófono' },
    { letra: 'Y', palabra: 'Yate' },
    { letra: 'Z', palabra: 'Zorro' }
];

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.getElementById("abc");

    abecedario.forEach(item => {
        // Crear tarjetas
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-frente">
                    <h2>${item.letra}</h2>
                </div>
                <div class="card-atras">
                    <img src="${item.imagen}" alt="${item.palabra}">
                    <p>${item.palabra}</p>
                </div>
            </div>
        `;
        tarjetas.appendChild(card);
    });
});



// VOLTEAR

//FILTRAR