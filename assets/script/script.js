$(function () {

    $("#qtGroup").hide();
    $("#qtGroup2").hide();

    //////////////////////////////////////////////////Article 1 début////////////////////////////////////////////////////

    //+ button début--------------------------------
    $("#addQuantity").click(function () {
        $("#nbArticle").val(function (i, val) {
            return val * 1 + 1;
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
    });
    //- button fin--------------------------------
    //panier +1 button début----------------------
    $("#addArticle").click(function () {
        $("#qtGroup").show();
        $("#nbArticle").val(function (i, val) {
            return val * 1 + 1;
        });
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup = $("#qtGroup");
    $("#addArticle").click(function () {
        $("body").prepend(qtGroup);
    });
    $("#removeArticle").click(function () {
        $(qtGroup).remove();
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 1 fin////////////////////////////////////////////////////
    //////////////////////////////////////////////////Article 2 début////////////////////////////////////////////////////

    //+ button début--------------------------------
    $("#addQuantity2").click(function () {
        $("#nbArticle2").val(function (i, val) {
            return val * 1 + 1;
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
    });
    //- button fin--------------------------------
    //panier +1 button début----------------------
    $("#addArticle2").click(function () {
        $("#qtGroup2").show();
        $("#nbArticle2").val(function (i, val) {
            return val * 1 + 1;
        });
    });
    //panier +1 button fin----------------------
    //show / hide Qt début----------------------
    var qtGroup2 = $("#qtGroup2");
    $("#addArticle2").click(function () {
        $("body").prepend(qtGroup2);
    });
    $("#removeArticle2").click(function () {
        $(qtGroup2).remove();
    });
    //show / hide Qt fin----------------------

    //////////////////////////////////////////////////Article 2 fin////////////////////////////////////////////////////






});