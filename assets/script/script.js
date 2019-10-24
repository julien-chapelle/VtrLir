$(function() {
    var nbArticle = 1;
    console.log(nbArticle);
    $('#categories1').hide();
    $('#addQuantity').click(function() {
        $('#nbArticle').val(nbArticle++);
        console.log(nbArticle);
    });
    $('#addArticle').click(function() {
        alert('Votre article à été ajouté au panier.')
    });
    $('.home').click(function() {
        $('#categories1').hide();
        $('#home').show();
    });
    $('.categories1').click(function() {
        $('#home').hide();
        $('#categories1').show();
    });
})