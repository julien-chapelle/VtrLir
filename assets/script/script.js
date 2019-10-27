$(function () {

    //////////////////////////////////////////////////show/hide categorie début////////////////////////////////////////////////////

    $('#categories1').hide();
    $('#categories2').hide();
    $('#categories3').hide();
    
    $('.home').click(function () {
        $('#categories1').hide();
        $('#categories2').hide();
        $('#categories3').hide();
        $('#home').show();
    });
    $('.categories1').click(function () {
        $('#home').hide();
        $('#categories2').hide();
        $('#categories3').hide();
        $('#categories1').show();
    });
    $('.categories2').click(function () {
        $('#home').hide();
        $('#categories1').hide();
        $('#categories3').hide();
        $('#categories2').show();
    });
    $('.categories3').click(function () {
        $('#home').hide();
        $('#categories1').hide();
        $('#categories2').hide();
        $('#categories3').show();
    });

    //////////////////////////////////////////////////show/hide categorie fin////////////////////////////////////////////////////
   
    //////////////////////////////////////////////////VAR PRIX début////////////////////////////////////////////////////

    var priceRefwm001 = 2100;
    var priceRefwb002 = 3599;
    var priceRefwo003 = 2000;
    var priceRefea001 = 2200;
    var priceRefer002 = 1500;
    var priceRefey003 = 800;
    var priceRefcd001 = 1700;
    var priceRefct002 = 770;
    var priceRefct003 = 200;

    //////////////////////////////////////////////////VAR PRIX fin////////////////////////////////////////////////////

    $('#qtGroup').hide();
    $('#qtGroup2').hide();
    $('#qtGroup3').hide();
    $('#qtGroup4').hide();
    $('#qtGroup5').hide();
    $('#qtGroup6').hide();
    $('#qtGroup7').hide();
    $('#qtGroup8').hide();
    $('#qtGroup9').hide();
    $('#notif').hide();

    //////////////////////////////////////////////////JANTE Article 1 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity').click(function () {
        $('#nbArticle').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice1').text(function () {
            return Math.round((priceRefwm001 * $('#nbArticle').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity').click(function () {
        if ($('#nbArticle').val() > 1) {
            $('#nbArticle').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice1').text(function () {
            return Math.round((priceRefwm001 * $('#nbArticle').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup').show();
        $('#finalPrice1').text(priceRefwm001);
        $('hr').show();
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup = $('#qtGroup');
    $('#addArticle').click(function () {
        $('.modal-body').show(qtGroup);
    });
    $('#removeArticle').click(function () {
        $(qtGroup).hide();
        $('#nbArticle').val('1');
        $('#finalPrice1').text(priceRefwm001);
    });
    $('#nbArticle').focusout(function () {
        $('#finalPrice1').text(function () {
            return Math.round((priceRefwm001 * $('#nbArticle').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////JANTE Article 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////JANTE Article 2 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity2').click(function () {
        $('#nbArticle2').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice2').text(function () {
            return Math.round((priceRefwb002 * $('#nbArticle2').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity2').click(function () {
        if ($('#nbArticle2').val() > 1) {
            $('#nbArticle2').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice2').text(function () {
            return Math.round((priceRefwb002 * $('#nbArticle2').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle2').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup2').show();
        $('#finalPrice2').text(priceRefwb002);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup2 = $('#qtGroup2');
    $('#addArticle2').click(function () {
        $('.modal-body').show(qtGroup2);
    });
    $('#removeArticle2').click(function () {
        $(qtGroup2).hide();
        $('#nbArticle2').val('1');
        $('#finalPrice2').text(priceRefwb002);
    });
    $('#nbArticle2').focusout(function () {
        $('#finalPrice2').text(function () {
            return Math.round((priceRefwb002 * $('#nbArticle2').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////JANTE Article 2 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////JANTE Article 3 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity3').click(function () {
        $('#nbArticle3').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice3').text(function () {
            return Math.round((priceRefwo003 * $('#nbArticle3').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity3').click(function () {
        if ($('#nbArticle3').val() > 1) {
            $('#nbArticle3').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice3').text(function () {
            return Math.round((priceRefwo003 * $('#nbArticle3').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle3').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup3').show();
        $('#finalPrice3').text(priceRefwo003);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup3 = $('#qtGroup3');
    $('#addArticle3').click(function () {
        $('.modal-body').show(qtGroup3);
    });
    $('#removeArticle3').click(function () {
        $(qtGroup3).hide();
        $('#nbArticle3').val('1');
        $('#finalPrice3').text(priceRefwo003);
    });
    $('#nbArticle3').focusout(function () {
        $('#finalPrice3').text(function () {
            return Math.round((priceRefwo003 * $('#nbArticle3').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////JANTE Article 3 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////ECHAPPEMENT Article 1 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity4').click(function () {
        $('#nbArticle4').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice4').text(function () {
            return Math.round((priceRefea001 * $('#nbArticle4').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity4').click(function () {
        if ($('#nbArticle4').val() > 1) {
            $('#nbArticle4').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice4').text(function () {
            return Math.round((priceRefea001 * $('#nbArticle4').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle4').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup4').show();
        $('#finalPrice4').text(priceRefea001);
        $('hr').show();
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup4 = $('#qtGroup4');
    $('#addArticle4').click(function () {
        $('.modal-body').show(qtGroup4);
    });
    $('#removeArticle4').click(function () {
        $(qtGroup4).hide();
        $('#nbArticle4').val('1');
        $('#finalPrice4').text(priceRefea001);
    });
    $('#nbArticle4').focusout(function () {
        $('#finalPrice4').text(function () {
            return Math.round((priceRefea001 * $('#nbArticle4').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////ECHAPPEMENT Article 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////ECHAPPEMENT Article 2 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity5').click(function () {
        $('#nbArticle5').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice5').text(function () {
            return Math.round((priceRefer002 * $('#nbArticle5').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity5').click(function () {
        if ($('#nbArticle5').val() > 1) {
            $('#nbArticle5').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice5').text(function () {
            return Math.round((priceRefer002 * $('#nbArticle5').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle5').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup5').show();
        $('#finalPrice5').text(priceRefer002);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup5 = $('#qtGroup5');
    $('#addArticle5').click(function () {
        $('.modal-body').show(qtGroup5);
    });
    $('#removeArticle5').click(function () {
        $(qtGroup5).hide();
        $('#nbArticle5').val('1');
        $('#finalPrice5').text(priceRefer002);
    });
    $('#nbArticle5').focusout(function () {
        $('#finalPrice5').text(function () {
            return Math.round((priceRefer002 * $('#nbArticle5').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////ECHAPPEMENT Article 2 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////ECHAPPEMENT Article 3 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity6').click(function () {
        $('#nbArticle6').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice6').text(function () {
            return Math.round((priceRefey003 * $('#nbArticle6').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity6').click(function () {
        if ($('#nbArticle6').val() > 1) {
            $('#nbArticle6').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice6').text(function () {
            return Math.round((priceRefey003 * $('#nbArticle6').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle6').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup6').show();
        $('#finalPrice6').text(priceRefey003);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup6 = $('#qtGroup6');
    $('#addArticle6').click(function () {
        $('.modal-body').show(qtGroup6);
    });
    $('#removeArticle6').click(function () {
        $(qtGroup6).hide();
        $('#nbArticle6').val('1');
        $('#finalPrice6').text(priceRefey003);
    });
    $('#nbArticle6').focusout(function () {
        $('#finalPrice6').text(function () {
            return Math.round((priceRefey003 * $('#nbArticle6').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////ECHAPPEMENT Article 3 fin////////////////////////////////////////////////////
        //////////////////////////////////////////////////CARENAGE Article 1 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity7').click(function () {
        $('#nbArticle7').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice7').text(function () {
            return Math.round((priceRefcd001 * $('#nbArticle7').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity7').click(function () {
        if ($('#nbArticle7').val() > 1) {
            $('#nbArticle7').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice7').text(function () {
            return Math.round((priceRefcd001 * $('#nbArticle7').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle7').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup7').show();
        $('#finalPrice7').text(priceRefcd001);
        $('hr').show();
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup7 = $('#qtGroup7');
    $('#addArticle7').click(function () {
        $('.modal-body').show(qtGroup7);
    });
    $('#removeArticle7').click(function () {
        $(qtGroup7).hide();
        $('#nbArticle7').val('1');
        $('#finalPrice7').text(priceRefcd001);
    });
    $('#nbArticle7').focusout(function () {
        $('#finalPrice7').text(function () {
            return Math.round((priceRefcd001 * $('#nbArticle7').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////CARENAGE Article 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////CARENAGE Article 2 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity8').click(function () {
        $('#nbArticle8').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice8').text(function () {
            return Math.round((priceRefct002 * $('#nbArticle8').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity8').click(function () {
        if ($('#nbArticle8').val() > 1) {
            $('#nbArticle8').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice8').text(function () {
            return Math.round((priceRefct002 * $('#nbArticle8').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle8').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup8').show();
        $('#finalPrice8').text(priceRefct002);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup8 = $('#qtGroup8');
    $('#addArticle8').click(function () {
        $('.modal-body').show(qtGroup8);
    });
    $('#removeArticle8').click(function () {
        $(qtGroup8).hide();
        $('#nbArticle8').val('1');
        $('#finalPrice8').text(priceRefct002);
    });
    $('#nbArticle8').focusout(function () {
        $('#finalPrice8').text(function () {
            return Math.round((priceRefct002 * $('#nbArticle8').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////CARENAGE Article 2 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////CARENAGE Article 3 début////////////////////////////////////////////////////

    //+ button début--------------------------------

    $('#addQuantity9').click(function () {
        $('#nbArticle9').val(function (i, val) {
            return val * 1 + 1;
        });
        $('#finalPrice9').text(function () {
            return Math.round((priceRefct003 * $('#nbArticle9').val()) * 100) / 100;
        });
    });
    //+ button fin--------------------------------
    //- button début--------------------------------
    $('#removeQuantity9').click(function () {
        if ($('#nbArticle9').val() > 1) {
            $('#nbArticle9').val(function (i, val) {
                return val * 1 - 1;
            });
        }
        $('#finalPrice9').text(function () {
            return Math.round((priceRefct003 * $('#nbArticle9').val()) * 100) / 100;
        });
    });
    //- button fin--------------------------------

    //panier +1 button début----------------------
    $('#addArticle9').click(function () {
        $('#notif').fadeIn(0).fadeOut(3000);
        $('#qtGroup9').show();
        $('#finalPrice9').text(priceRefct003);
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup9 = $('#qtGroup9');
    $('#addArticle9').click(function () {
        $('.modal-body').show(qtGroup9);
    });
    $('#removeArticle9').click(function () {
        $(qtGroup9).hide();
        $('#nbArticle9').val('1');
        $('#finalPrice9').text(priceRefct003);
    });
    $('#nbArticle9').focusout(function () {
        $('#finalPrice9').text(function () {
            return Math.round((priceRefct003 * $('#nbArticle9').val()) * 100) / 100;
        });
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////CARENAGE Article 3 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////remise a 1 début////////////////////////////////////////////////////

    $('#emptyBasket').click(function () {
        $('#qtGroup').hide();
        $('#nbArticle').val('1');
        $('#qtGroup2').hide();
        $('#nbArticle2').val('1');
        $('#qtGroup3').hide();
        $('#nbArticle3').val('1');
        $('#qtGroup4').hide();
        $('#nbArticle4').val('1');
        $('#qtGroup5').hide();
        $('#nbArticle5').val('1');
        $('#qtGroup6').hide();
        $('#nbArticle6').val('1');
        $('#qtGroup7').hide();
        $('#nbArticle7').val('1');
        $('#qtGroup8').hide();
        $('#nbArticle8').val('1');
        $('#qtGroup9').hide();
        $('#nbArticle9').val('1');
    });

    //////////////////////////////////////////////////remise a 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////To pay début////////////////////////////////////////////////////







    //////////////////////////////////////////////////To pay fin////////////////////////////////////////////////////
});