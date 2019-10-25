$(function () {

    $('#categories1').hide();
    $('.home').click(function () {
        $('#categories1').hide();
        $('#home').show();
    });
    $('.categories1').click(function () {
        $('#home').hide();
        $('#categories1').show();
    });


    var priceRef0001 = 2100;
    var priceRef0002 = 3599;
    var priceRef0003 = 2000;
    // var priceRef0004 = 2000;
    // var priceRef0005 = 2000;
    // var priceRef0006 = 2000;
    // var priceRef0007 = 2000;
    // var priceRef0008 = 2000;
    // var priceRef0009 = 2000;

    $("#qtGroup").hide();
    $("#qtGroup2").hide();
    $('#qtGroup3').hide();
    // $('#qtGroup4').hide();
    // $('#qtGroup5').hide();
    // $('#qtGroup6').hide();
    // $('#qtGroup7').hide();
    // $('#qtGroup8').hide();
    // $('#qtGroup9').hide();
    $('#notif').hide();
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
        $('#notif').fadeIn(0).fadeOut(3000);
        $("#qtGroup").show();
        $('#finalPrice1').text(priceRef0001);
        $('hr').show();
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup = $("#qtGroup");
    $("#addArticle").click(function () {
        $(".modal-body").show(qtGroup);
    });
    $("#removeArticle").click(function () {
        $(qtGroup).hide();
        $('#nbArticle').val('1');
        $('#finalPrice1').text(priceRef0001);
    });
    $('#nbArticle').focusout(function () {
        $("#finalPrice1").text(function () {
            return Math.round((priceRef0001 * $("#nbArticle").val()) * 100) / 100;
        });
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
        $('#notif').fadeIn(0).fadeOut(3000);
        $("#qtGroup2").show();
        $('#finalPrice2').text(priceRef0002);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup2 = $("#qtGroup2");
    $("#addArticle2").click(function () {
        $(".modal-body").show(qtGroup2);
    });
    $("#removeArticle2").click(function () {
        $(qtGroup2).hide();
        $('#nbArticle2').val('1');
        $('#finalPrice2').text(priceRef0002);
    });
    $('#nbArticle2').focusout(function () {
        $("#finalPrice2").text(function () {
            return Math.round((priceRef0002 * $("#nbArticle2").val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 2 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////Article 3 début////////////////////////////////////////////////////
    
    //+ button début--------------------------------

    $("#addQuantity3").click(function () {
        $("#nbArticle3").val(function (i, val) {
            return val * 1 + 1;
        });
        $("#finalPrice3").text(function () {
            return Math.round((priceRef0003 * $("#nbArticle3").val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $("#removeQuantity3").click(function () {
        if ($("#nbArticle3").val() > 1) {
            $("#nbArticle3").val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $("#finalPrice3").text(function () {
            return Math.round((priceRef0003 * $("#nbArticle3").val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $("#addArticle3").click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $("#qtGroup3").show();
        $('#finalPrice3').text(priceRef0003);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup3 = $("#qtGroup3");
    $("#addArticle3").click(function () {
        $(".modal-body").show(qtGroup3);
    });
    $("#removeArticle3").click(function () {
        $(qtGroup3).hide();
        $('#nbArticle3').val('1');
        $('#finalPrice3').text(priceRef0003);
    });
    $('#nbArticle3').focusout(function () {
        $("#finalPrice3").text(function () {
            return Math.round((priceRef0003 * $("#nbArticle3").val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 3 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////Message panier vide début////////////////////////////////////////////////////

    $("#emptyBasket").click(function () {
        $("#emptyBasketMessage").show();
        $("#qtGroup").hide();
        $('#nbArticle').val('1');
        $("#qtGroup2").hide();
        $('#nbArticle2').val('1');
        $("#qtGroup3").hide();
        $('#nbArticle3').val('1');
        // $("#qtGroup4").hide();
        // $('#nbArticle4').val('1');
        // $("#qtGroup5").hide();
        // $('#nbArticle5').val('1');
        // $("#qtGroup6").hide();
        // $('#nbArticle6').val('1');
        // $("#qtGroup7").hide();
        // $('#nbArticle7').val('1');
        // $("#qtGroup8").hide();
        // $('#nbArticle8').val('1');
        // $("#qtGroup9").hide();
        // $('#nbArticle9').val('1');
    });

    //////////////////////////////////////////////////Message panier vide fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////To pay début////////////////////////////////////////////////////







    //////////////////////////////////////////////////To pay fin////////////////////////////////////////////////////
});