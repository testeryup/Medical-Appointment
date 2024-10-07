document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.pageYOffset > 100) { // Hiện nút khi cuộn xuống 100px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none'; // Ẩn nút khi cuộn lên đầu trang
        }
    });
    
    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt mà
        });
    });
});

