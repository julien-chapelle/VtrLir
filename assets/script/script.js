$(function () {

    $("#addQuantity").click(function () {
        $("#nbArticle").val(function (i, val) {
            return val * 1 + 1;
        });
    });

    $("#removeQuantity").click(function () {
        if ($("#nbArticle").val() > 1) {
            $("#nbArticle").val(function (i, val) {
                return val * 1 - 1;
            });
        }
    });


});