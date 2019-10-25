$(function () {
    var priceRef0001 = 279.90;
    var priceRef0002 = 159.90;

    $(function () {
        $("#qtGroup").hide();
        $("#qtGroup2").hide();
    });
    //////////////////////////////////////////////////Article 1 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $("#addQuantity").click(function () {
        $("#nbArticle").val(function (i, val) {
            return val * 1 + 1;
        });
        $("#finalPrice1").text(function () {
            return Math.round((priceRef0001 * $("#nbArticle").val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $("#removeQuantity").click(function () {
        if ($("#nbArticle").val() > 1) {
            $("#nbArticle").val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $("#finalPrice1").text(function () {
            return Math.round((priceRef0001 * $("#nbArticle").val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------
    //panier +1 button début----------------------
    $("#addArticle").click(function () {
        $("#qtGroup").show();
        // $("#nbArticle").val(function (i, val) {
        //     return val * 1 + 1;
        // });
        // $("#finalPrice1").text(function (i, val) {
        //     return val * 1 + 1;
        // });
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup = $("#qtGroup");

    $("#addArticle").click(function () {
        $(".modal-body").show(qtGroup);
    });
    $("#removeArticle").click(function () {
        $(qtGroup).hide();
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////Article 2 début////////////////////////////////////////////////////

    //+ button début--------------------------------
    $("#addQuantity2").click(function () {
        $("#nbArticle2").val(function (i, val) {
            return val * 1 + 1;
        });
        $("#finalPrice2").text(function () {
            return Math.round((priceRef0002 * $("#nbArticle2").val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $("#removeQuantity2").click(function () {
        if ($("#nbArticle2").val() > 1) {
            $("#nbArticle2").val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $("#finalPrice2").text(function () {
            return Math.round((priceRef0002 * $("#nbArticle2").val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------
    //panier +1 button début----------------------
    $("#addArticle2").click(function () {
        $("#qtGroup2").show();
        // $("#nbArticle2").val(function (i, val) {
        //     return val * 1 + 1;
        // });
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup2 = $("#qtGroup2");

    $("#addArticle2").click(function () {
        $(".modal-body").show(qtGroup2);
    });
    $("#removeArticle2").click(function () {
        $(qtGroup2).hide();
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 2 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////Message panier vide début////////////////////////////////////////////////////

    // $("#addArticle, #addArticle2").click(function () {
    //     $("#emptyBasketMessage").hide();
    // });
    $("#emptyBasket").click(function () {
        $("#emptyBasketMessage").show();
        $("#qtGroup").hide();
        $("#qtGroup2").hide();
    });

    //////////////////////////////////////////////////Message panier vide fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////To pay début////////////////////////////////////////////////////







    //////////////////////////////////////////////////To pay fin////////////////////////////////////////////////////









});