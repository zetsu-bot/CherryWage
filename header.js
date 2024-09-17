document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memuat konten dari file eksternal
    function loadHeader() {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector('header').innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Memuat header saat dokumen siap
    loadHeader();
});
