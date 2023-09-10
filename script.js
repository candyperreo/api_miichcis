document.addEventListener('DOMContentLoaded', function() {
    

    const URL = 'https://api.thecatapi.com/v1/images/search';

    // Función para cargar una nueva imagen de gato
    function loadCatImage() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const img = document.querySelector('img');
                img.src = data[0].url;
            });
    }

    // Llama a la función para cargar la imagen de gato al cargar la página
    loadCatImage();

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function () {
        // Llama a la función para cargar una nueva imagen de gato al hacer clic en el botón de restablecimiento
        loadCatImage();
    });

});
