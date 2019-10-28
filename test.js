$(function () {

    //////////////////////////////////////Target parts début///////////////////////////////////////////////////////
    $('#carenageParts').hide();
    $('#wheelParts').hide();
    $('#exhaustParts').hide();

    $('#targetCarenage').mouseover(function () {
        $('#carenageParts').show();
    });
    $('#targetCarenage').mouseout(function () {
        $('#carenageParts').hide();
    });

    $('#targetWheel').mouseover(function () {
        $('#wheelParts').show();
    });
    $('#targetWheel').mouseout(function () {
        $('#wheelParts').hide();
    });

    $('#targetExhaust').mouseover(function () {
        $('#exhaustParts').show();
    });
    $('#targetExhaust').mouseout(function () {
        $('#exhaustParts').hide();
    });

    //////////////////////////////////////Target parts fin///////////////////////////////////////////////////////
    //////////////////////////////////////Text parts début///////////////////////////////////////////////////////
    $('#accueilText').show();
    $('#carenageText').hide();
    $('#wheelText').hide();
    $('#exhaustText').hide();

    $('#targetCarenage').mouseover(function () {
        $('#carenageText').show();
        $('#accueilText').hide();
    });
    $('#targetCarenage').mouseout(function () {
        $('#carenageText').hide();
        $('#accueilText').show();
    });

    $('#targetWheel').mouseover(function () {
        $('#wheelText').show();
        $('#accueilText').hide();
    });
    $('#targetWheel').mouseout(function () {
        $('#wheelText').hide();
        $('#accueilText').show();
    });

    $('#targetExhaust').mouseover(function () {
        $('#exhaustText').show();
        $('#accueilText').hide();
    });
    $('#targetExhaust').mouseout(function () {
        $('#exhaustText').hide();
        $('#accueilText').show();
    });






    //////////////////////////////////////Text parts début///////////////////////////////////////////////////////


});