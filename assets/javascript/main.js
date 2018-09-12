// Anytime collapse is clicked, it will hide and new collapse will open
$(".port-item").click(function() {
    $(".collapse").collapse("hide");
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});