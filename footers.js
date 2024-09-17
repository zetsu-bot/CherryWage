document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memuat konten dari file eksternal
    function loadContent(url, elementSelector) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector(elementSelector).innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Memuat footer dan newsletter area saat dokumen siap
    loadContent('footer.html', 'footer');
    loadContent('newsletter.html', '.newsletter-area-widget');
});
