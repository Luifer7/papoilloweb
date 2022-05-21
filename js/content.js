


 const  cargarPeliculas = async () => {

    try {
        const res = await fetch(`https://apiluisdoleu.herokuapp.com/api/clientes/`);
        
            const datos = await res.json();

            let netflix = datos[0]
            let disney = datos[1]
            let hbo = datos[2]
            let stars = datos[3]
            let paramount = datos[4]
            let crunchy = datos[5]
            let deezer = datos[6]
            let spotify = datos[7]
            let yt = datos[8]
            let claro = datos[9]
            let prime = datos[10]


            // 0
            let preciosNetflix = document.getElementById('precios_netflix');
                preciosNetflix.innerHTML += `
                <tr> <th  scope="col">${netflix.cuenta}</th></tr>
                <tr> <th  scope="col">${netflix.name}</th></tr>
                <tr> <th  scope="col">${netflix.account}</th></tr>  
                <tr> <th  scope="col">${netflix.pass}</th></tr>
                <tr> <th  scope="col">${netflix.date}</th></tr>`

            // 1
            let preciosDisney = document.getElementById('precios_disney');
                preciosDisney.innerHTML += `
                <tr> <th  scope="col">${disney.cuenta}</th></tr>
                <tr> <th  scope="col">${disney.name}</th></tr>
                <tr> <th  scope="col">${disney.account}</th></tr>  
                <tr> <th  scope="col">${disney.pass}</th></tr>
                <tr> <th  scope="col">${disney.date}</th></tr>`
            
            // 2
            let preciosHbo = document.getElementById('precios_hbo');
                preciosHbo.innerHTML += `
                <tr> <th  scope="col">${hbo.cuenta}</th></tr>
                <tr> <th  scope="col">${hbo.name}</th></tr>
                <tr> <th  scope="col">${hbo.account}</th></tr>  
                <tr> <th  scope="col">${hbo.pass}</th></tr>
                <tr> <th  scope="col">${hbo.date}</th></tr>`

            // 3   
            let preciosStars = document.getElementById('precios_stars');
                preciosStars.innerHTML += `
                <tr> <th  scope="col">${stars.cuenta}</th></tr>
                <tr> <th  scope="col">${stars.name}</th></tr>
                <tr> <th  scope="col">${stars.account}</th></tr>  
                <tr> <th  scope="col">${stars.pass}</th></tr>
                <tr> <th  scope="col">${stars.date}</th></tr>`

            //4
            let preciosParamount = document.getElementById('precios_paramount');
                preciosParamount.innerHTML += `
                <tr> <th  scope="col">${paramount.cuenta}</th></tr>
                <tr> <th  scope="col">${paramount.name}</th></tr>
                <tr> <th  scope="col">${paramount.account}</th></tr>  
                <tr> <th  scope="col">${paramount.pass}</th></tr>
                <tr> <th  scope="col">${paramount.date}</th></tr>`
             
            //5    
            let preciosCrunchy = document.getElementById('precios_crunchy');
                preciosCrunchy.innerHTML += `
                <tr> <th  scope="col">${crunchy.cuenta}</th></tr>
                <tr> <th  scope="col">${crunchy.name}</th></tr>
                <tr> <th  scope="col">${crunchy.account}</th></tr>  
                <tr> <th  scope="col">${crunchy.pass}</th></tr>
                <tr> <th  scope="col">${crunchy.date}</th></tr>`
            
            // 6    
            let preciosDeezer = document.getElementById('precios_deezer');
                preciosDeezer.innerHTML += `
                <tr> <th  scope="col">${deezer.cuenta}</th></tr>
                <tr> <th  scope="col">${deezer.name}</th></tr>
                <tr> <th  scope="col">${deezer.account}</th></tr>  
                <tr> <th  scope="col">${deezer.pass}</th></tr>
                <tr> <th  scope="col">${deezer.date}</th></tr>`

            // 7
            let preciosSpotify = document.getElementById('precios_spotify');
                preciosSpotify.innerHTML += `
                <tr> <th  scope="col">${spotify.cuenta}</th></tr>
                <tr> <th  scope="col">${spotify.name}</th></tr>
                <tr> <th  scope="col">${spotify.account}</th></tr>  
                <tr> <th  scope="col">${spotify.pass}</th></tr>
                <tr> <th  scope="col">${spotify.date}</th></tr>`
            
             // 8
             let preciosYt = document.getElementById('precios_youtube');
                preciosYt.innerHTML += `
                <tr> <th  scope="col">${yt.cuenta}</th></tr>
                <tr> <th  scope="col">${yt.name}</th></tr>
                <tr> <th  scope="col">${yt.account}</th></tr>  
                <tr> <th  scope="col">${yt.pass}</th></tr>
                <tr> <th  scope="col">${yt.date}</th></tr>`


             // 9
             let preciosClaro = document.getElementById('precios_claro');
                preciosClaro.innerHTML += `
                <tr> <th  scope="col">${claro.cuenta}</th></tr>
                <tr> <th  scope="col">${claro.name}</th></tr>
                <tr> <th  scope="col">${claro.account}</th></tr>  
                <tr> <th  scope="col">${claro.pass}</th></tr>
                <tr> <th  scope="col">${claro.date}</th></tr>`


              // 10
            let preciosPrime = document.getElementById('precios_prime');
                preciosPrime.innerHTML += `
                <tr> <th  scope="col">${prime.cuenta}</th></tr>
                <tr> <th  scope="col">${prime.name}</th></tr>
                <tr> <th  scope="col">${prime.account}</th></tr>  
                <tr> <th  scope="col">${prime.pass}</th></tr>
                <tr> <th  scope="col">${prime.date}</th></tr>`
            

    } catch (error) {
        console.log(error)
    }


    }

    

    window.addEventListener('DOMContentLoaded', (event) => {
        cargarPeliculas();
     
    });