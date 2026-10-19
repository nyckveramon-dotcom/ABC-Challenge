const abecedario = [
    { letra: 'A', palabra: 'Asno', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.agro20.com.br%2Fuploads%2F2019%2F12%2FAsno-1-768x611.jpg&f=1&nofb=1&ipt=de9271d487a711155e539668070c61f4c0bc2cb245f5709c1f9c8e8947578f9c&ipo=images' },
    { letra: 'B', palabra: 'Ballena', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheanimalmap.com%2Fimages%2Fanimals%2Fhumpback_whale.webp&f=1&nofb=1&ipt=526997c5c79d5628959b865a2f2979dd682cc4ed38b2f9b528472ee948ae4e50&ipo=images' },
    { letra: 'C', palabra: 'Caballo', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chusmeando.com%2Fwp-content%2Fuploads%2F2024%2F04%2FCaballo-Espanol-1.webp&f=1&nofb=1&ipt=c7c2438dc0b882f77bf294f3f1921d00edf189ab4ad8aa7726abe8889cfb5c70&ipo=images' },
    { letra: 'D', palabra: 'Delfín', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheanimalmap.com%2Fimages%2Fanimals%2Fbottlenose_dolphin.webp&f=1&nofb=1&ipt=4fb5b9b1a274a3b6c2bf9f87dd662129e82a1b4fcd882315d7f92ad1daaec770&ipo=images' },
    { letra: 'E', palabra: 'Elefante', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fanimal-wildlife-africa-mammal-fauna-elephant-grassland-vertebrate-safari-indian-elephant-african-elephant-elephants-and-mammoths-1137755.jpg&f=1&nofb=1&ipt=a051b1fd7f4854495904f1baf9e0281a6bcb4a7a0eaf730eeaddd2e02b38941a&ipo=images' },
    { letra: 'F', palabra: 'Flamenco', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.expertoanimal.com%2Fes%2Fposts%2F7%2F4%2F2%2Fflamenco_de_james_phoenicoparrus_jamesi_26247_5_orig.jpg&f=1&nofb=1&ipt=5885a63e73966022ecbc55bf39750202818a87fcd60cd7c049314803269e9ea9&ipo=images' },
    { letra: 'G', palabra: 'Gato', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanimapedia.org%2Fwp-content%2Fuploads%2F2018%2F07%2Fgato-domestico-768x512.jpg&f=1&nofb=1&ipt=a26be624c7c412e8b17ee8ade6b7e1539712dfa4465c0429678daf55baf16c48&ipo=images' },
    { letra: 'H', palabra: 'Hipopótamo', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoescola.com%2Fwp-content%2Fuploads%2F2008%2F05%2Fhipopotamo-358966718.jpg&f=1&nofb=1&ipt=cf61fbeccdcd0bb3f533973f4c6fa5b426d4f40c668a95aafb9df442621ce0f3&ipo=images' },
    { letra: 'I', palabra: 'Iguana', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FInXPywNp2iRiE7btd29JKETH8oQ%3D%2F1500x1000%2Ffilters%3Afill(auto%2C1)%2Figuana2-b554e81fc1834989a715b69d1eb18695.jpg&f=1&nofb=1&ipt=0dff30b49cb3a5a3564b0bf19f9dca6e93878a3a4d9326a52bb7f33975505308&ipo=images' },
    { letra: 'J', palabra: 'Jirafa', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F--6nM3lQzEBw%2FUZO-h3ypVfI%2FAAAAAAAAAEA%2FfLcoAd5xNdw%2Fs1600%2Fanimales_0008_jirafa.jpg&f=1&nofb=1&ipt=79d8db1f3d9485fb2c56e7788eb930934da011b36dd8da1396b30cce7eebccaf&ipo=images' },
    { letra: 'K', palabra: 'Koala', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.australiangeographic.com.au%2Fwp-content%2Fuploads%2F2023%2F01%2Fshutterstock_2161919939.jpg&f=1&nofb=1&ipt=774b1e443073b816b9efe353edd08694d110495cea4ebf8ac6b60951d7785f83&ipo=images' },
    { letra: 'L', palabra: 'León', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F32798114%2Fpexels-photo-32798114%2Ffree-photo-of-leon-africano-panthera-leo-en-el-parque-transfronterizo-de-kgalagadi-cabo-norte-sudafrica.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&f=1&nofb=1&ipt=04654798a2b1407a97336233cc22510f28cf8610dce3938e49892b9240cff7d7&ipo=images' },
    { letra: 'M', palabra: 'Mono', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fmeme-faces-funny-pictures-1ws050k9loowv33a.jpg&f=1&nofb=1&ipt=b970f5e426a5e3e1c7bd7d2753156bd59d6f64ea7182dc2c7ecf22fbc86d44b0&ipo=images' },
    { letra: 'N', palabra: 'Nutria', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chronline.com%2Fuploads%2Foriginal%2F20230106-154327-news.230105.nutria.ivvs_8.jpg&f=1&nofb=1&ipt=1a8b090dc13de31097bcb4ceb0b94b189fb10e850670afba08ddc591ebff3e4f&ipo=images' },
    { letra: 'Ñ', palabra: 'Ñandú', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fayerwayer.com%2Fresizer%2Fv2%2FOG7VGOYKJJDIVAXDE2BGC3POVI.jpeg%3Fauth%3D0b9b9e2ec54e8d270af20836a20edb822df5bbf09b33ada5216579a208a2185c%26width%3D800%26height%3D600&f=1&nofb=1&ipt=25730889136648f20a8545cfea23499a2a98ef98f52812e405d1619347640a33&ipo=images' },
    { letra: 'O', palabra: 'Oso', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ecoavant.com%2Fuploads%2Fs1%2F23%2F39%2F34%2Fel-calentamiento-global-y-el-deshielo-del-artico-ponen-en-peligro-la-supervivencia-del-oso-polar.jpeg&f=1&nofb=1&ipt=437c5ca7fae6a7972e52741e7743949ff1ed76dcf9ce1d250764f69f6bae537c&ipo=images' },
    { letra: 'P', palabra: 'Perro', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.viraliking.com%2Fwp-content%2Fuploads%2F2022%2F06%2F9-de-las-mejores-razas-de-perros-familiares.jpg&f=1&nofb=1&ipt=0df939a81b69379e9829916c4fc1bc203af85b59bea6646ff3fbee2f987d57c3&ipo=images' },
    { letra: 'Q', palabra: 'Queso', imagen: 'https://i.pinimg.com/736x/83/40/08/834008f0da13d2f421dab8d062a6fa59.jpg' },
    { letra: 'R', palabra: 'Reloj', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NIPFw8XVWHgeowVNlQqrDXczMjh1i3z8UCXAc09h1u2DtP9alpCFGDM&s=10' },
    { letra: 'S', palabra: 'Sol', imagen: 'https://i.pinimg.com/474x/ea/42/35/ea42354efd8fcfd768f7e31524c4c820.jpg?nii=t' },
    { letra: 'T', palabra: 'Tren', imagen: 'https://i.pinimg.com/736x/2c/ad/3d/2cad3d7dc6a785077e616a7a893b5dd8.jpg' },
    { letra: 'U', palabra: 'Uva', imagen: 'https://i.pinimg.com/736x/42/b1/58/42b1586d445e99fb02053cf39291d6ce.jpg' },
    { letra: 'V', palabra: 'Vaca', imagen: 'https://i.pinimg.com/736x/aa/bf/cc/aabfcc9a35bae86447336a9fa3dc0bea.jpg' },
    { letra: 'W', palabra: 'Wafle', imagen: 'https://i.pinimg.com/236x/be/61/3e/be613eb0b8a4eb9a4b1f73b16f76d5b8.jpg' },
    { letra: 'X', palabra: 'Xilófono', imagen: 'https://i.pinimg.com/564x/d1/b4/3b/d1b43b54a6b8ae9ff1d38a25ed471758.jpg' },
    { letra: 'Y', palabra: 'Yate', imagen: 'https://i.pinimg.com/1200x/4b/ed/b1/4bedb19f93182cece52871f82a319336.jpg' },
    { letra: 'Z', palabra: 'Zorro', imagen: 'https://www.primeraescuela.com/imagestn/puzzles/alfabeto/z_zorra.png' }
];

document.addEventListener("DOMContentLoaded", () => {
    const tarjetasContenedor = document.getElementById("abc");
    const contadorTexto = document.getElementById("clickCounterValue");
    let letrasVistas = 0;

    abecedario.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Incluimos la imagen y la palabra dentro del reverso (card-atras)
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

        // Evento para voltear (ida y vuelta) y contar solo la primera vez
        card.addEventListener("click", () => {
            card.classList.toggle("volteada");

            if (card.classList.contains("volteada") && !card.dataset.contada) {
                card.dataset.contada = "true";
                letrasVistas++;
                if (contadorTexto) {
                    contadorTexto.textContent = letrasVistas;
                }
            }
        });

        tarjetasContenedor.appendChild(card);
    });
});