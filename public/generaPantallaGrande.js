document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn[href='#!']:last-child").addEventListener("click", function () {
        // Obtiene el contenido del contenedor del visor 3D
        const threeContainer = document.getElementById("three-container").innerHTML;

        // Crea una nueva ventana
        const nuevaVentana = window.open("", "_blank");

        // Escribe el contenido en la nueva ventana con los estilos necesarios
        nuevaVentana.document.write(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="author" content="HUISHA & INCA" />
  <link rel="canonical" href="https://gltf-viewer.donmccurdy.com/" />
  <title>${localStorage.getItem("horaSimulacion") + "h.glb"}</title>
  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="stylesheet" href="/css/3d.css" />
  <link rel="icon" href="./images/logo.png" type="image/png">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400" rel="stylesheet" />
  <script defer type="module" src="src/app.js"></script>
</head>
<body>
<!-- Main Content -->
<main>
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 align-items-center my-5">
 <!-- Contenedor para subir archivos -->
 <section id="three-container">
	<div class="viewer">
		<div class="wrap">
			<div class="dropzone">
				<div class="placeholder">
				</div>
				<div class="upload-btn">
					<input type="file" name="file-input[]" id="file-input" multiple="" />
					<label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="17"
							viewBox="0 0 20 17"
						>
							<path
								d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
							></path>
						</svg>
						<span></span>
					</label>
				</div>
			</div>
			<div class="spinner"></div>
		</div>
</main>

<script src="./tiempo.js"></script>
<script src="./generaPantallaGrande.js"></script>
</body>
</html>

   
	
		
        `);

        // Cierra el documento de la nueva ventana para que se renderice correctamente
        nuevaVentana.document.close();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Botón de "Ampliar"
    document.querySelector(".btn[href='#!']:last-child").addEventListener("click", function () {
        const threeContainer = document.getElementById("three-container").innerHTML;
        const nuevaVentana = window.open("", "_blank");

        nuevaVentana.document.write(`
            <html>
            <head>
                <title>Visor 3D Ampliado</title>
                <style>
                    body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4; }
                    .viewer { width: 100vw; height: 100vh; }
                </style>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <section id="three-container">${threeContainer}</section>
                <script src="three.min.js"></script>
                <script src="viewer.js"></script>
            </body>
            </html>
        `);
        nuevaVentana.document.close();
    });

    // Botón de "Descargar"
    document.getElementById("btn-descargar").addEventListener("click", function () {
        // Obtener el nombre del archivo desde localStorage
        const fileName = localStorage.getItem("horaSimulacion")+"h.glb";
        
        if (!fileName) {
            alert("No se ha encontrado el archivo a descargar.");
            return;
        }

        // Crear la URL de descarga (ajusta la ruta según la ubicación real de tus archivos)
        const filePath = `/models/${fileName}`;

        // Crear un enlace temporal para la descarga
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let imagen = document.getElementById("imagenSimulacion");
    let estado = parseInt(localStorage.getItem("horaSimulacion"));
    switch (estado) {
        case 1:  imagen.src = "./models/1h.png";  break;
        case 2:  imagen.src = "./models/2h.png";  break;
        case 3:  imagen.src = "./models/3h.png";  break;
        case 4:  imagen.src = "./models/4h.png";  break;
        case 5:  imagen.src = "./models/5h.png";  break;
        case 6:  imagen.src = "./models/6h.png";  break;
        case 7:  imagen.src = "./models/7h.png";  break;
        case 8:  imagen.src = "./models/8h.png";  break;
        case 9:  imagen.src = "./models/9h.png";  break;
        case 10: imagen.src = "./models/10h.png"; break;
        case 11: imagen.src = "./models/11h.png"; break;
        case 12: imagen.src = "./models/12h.png"; break;
        case 13: imagen.src = "./models/13h.png"; break;
        case 14: imagen.src = "./models/14h.png"; break;
        case 15: imagen.src = "./models/15h.png"; break;
        case 16: imagen.src = "./models/16h.png"; break;
        case 17: imagen.src = "./models/17h.png"; break;
        case 18: imagen.src = "./models/18h.png"; break;
        case 19: imagen.src = "./models/19h.png"; break;
        case 20: imagen.src = "./models/20h.png"; break;
        case 21: imagen.src = "./models/21h.png"; break;
        case 22: imagen.src = "./models/22h.png"; break;
        case 23: imagen.src = "./models/23h.png"; break;
        case 24: imagen.src = "./models/24h.png"; break;
        default:
            alert("No se cargó correctamente la imagen de la simulación");
            break;
    }

    let video = document.getElementById("videoSimulacion");

    let youtubeLinks = {
        1: "7BCFYzbv3vo",
        2: "By6IXCE8d4w",
        3: "Vc29BVr_cQQ",
        4: "zjXRKZ5Dtpg",
        5: "8BHnyd6rTh4",
        6: "iMi2Cszty-Q",
        7: "2IBzfTqf3ew",
        8: "Fr7jHzdUB-k",
        9: "hCoayjZ6WME",
        10: "IXetWa7vuUc",
        11: "h4qACvlJZ0c",
        12: "Zg_M0c83Hbc",
        13: "dvEsheyK6og",
        14: "ta8ihF__k_4",
        15: "cwgF5UZChTo",
        16: "dXP1zR98_Ko",
        17: "PAicSxcPR0g",
        18: "x5MF2_8yFaE",
        19: "yBt7qo_z3nw",
        20: "Z5fx_0w6k-A",
        21: "Q-t09FLGw3w",
        22: "KkxEMrP0JEE",
        23: "q5PvjIgk6sY",
        24: "uw-izpn9uhs"
    };
    
    
    if (estado >= 1 && estado <= 24) {
        let videoId = youtubeLinks[estado];
        if (videoId) {
            video.src = `https://www.youtube.com/embed/${videoId}`;
        } else {
            alert("No se encontró el video en YouTube para este estado");
        }
    } else {
        alert("No se cargó correctamente el video de la simulación");
    }
});