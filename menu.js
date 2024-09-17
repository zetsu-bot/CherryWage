document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memuat konten dari file eksternal
    function loadMenu() {
        fetch('menu.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector('.navbar-area').innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Memuat menu saat dokumen siap
    loadMenu();
});
