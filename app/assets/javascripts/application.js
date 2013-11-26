// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bigtext
//= require_tree .

var previous
ajax_bo = function(best_of) {
    var checker = $("#best_of_hidden").val();
    if (checker != null)
    {
        $("#best_of_hidden").val("");
        $("#bo1").removeClass("btn-success");
        $("#bo3").removeClass("btn-success");
        $("#bo5").removeClass("btn-success");
        $("#bo7").removeClass("btn-success");
        while (previous > 0)
        {
            $("#link"+previous).attr("style","display:none");
            previous --;
        }
    }
    $("#best_of_hidden").val(parseInt(best_of));
    $("#bo"+best_of).addClass("btn-success");
    var i = parseInt(best_of);
    var n = 1;
    previous = i;
    while (n < i+1)
    {
        $("#link"+ n.toString()).removeAttr("Style");
        n++;
    }
    $("#submit").removeAttr("Style");
}

ajax_match = function(match_type){

    var checker = $("#match_type").val();
    if (checker != null){
        $("#match_type").val("");
        $("#5v5").removeClass("btn-success");
        $("#3v3").removeClass("btn-success");
    }
    $("#match_type").val(match_type);
    $("#"+match_type).addClass("btn-success");
    $("#red_team").removeAttr("style");
    $("#blue_team").removeAttr("style");
    $("#caster").removeAttr("Style");
    $("#tournament_name").removeAttr("Style");

    //VALIDATION

    var red_team_flag = false;
    var blue_team_flag = false;
    var tournament_name_flag = false;
    var caster_flag = false;
    var link1_flag = false;
    var link2_flag = false;
    var link3_flag = false;
    var link4_flag = false;
    var link5_flag = false;
    var link6_flag = false;
    var link7_flag = false;
    callError("red_team",2,8);
    callError("blue_team",2,8);
    callError("tournament_name",2,8);
    callError("caster",2,14);

    function callError(error,range1,range2){
        $("#"+error+"_field").keyup( function(){
            if( $("#"+error+"_field").val().length < range1 || $('#red_team_field').val().length >= range2 )
            {
                $("#"+error+"_error").removeAttr("Style");
                $("#"+error+"_error").attr("Style","color:red");
                if (eval(error.concat("_flag"))== red_team_flag)
                {
                    red_team_flag = true;
                }
                else if (eval(error.concat("_flag"))== blue_team_flag)
                {
                    blue_team_flag = true;
                }
                else if (eval(error.concat("_flag"))== tournament_name_flag)
                {
                    tournament_name_flag = true;
                }
                else if (eval(error.concat("_flag"))== caster_flag)
                {
                    caster_flag = true;
                }
                else if (eval(error.concat("_flag"))== link1_flag)
                {
                    link1_flag = true;
                }
                else if (eval(error.concat("_flag"))== link2_flag)
                {
                    link2_flag = true;
                }
                else if (eval(error.concat("_flag"))== link3_flag)
                {
                    link3_flag = true;
                }
                else if (eval(error.concat("_flag"))== link4_flag)
                {
                    link4_flag = true;
                }
                else if (eval(error.concat("_flag"))== link5_flag)
                {
                    link5_flag = true;
                }
                else if (eval(error.concat("_flag"))== link6_flag)
                {
                    link6_flag = true;
                }
                else if (eval(error.concat("_flag"))== link7_flag)
                {
                    link7_flag = true;
                }
                else {

                }
            }
            else
            {
                $("#"+error+"_error").removeAttr("Style");
                $("#"+error+"_error").attr("Style","color:green");
                if (eval(error.concat("_flag"))== red_team_flag)
                {
                    red_team_flag = true;
                }
                else if (eval(error.concat("_flag"))== blue_team_flag)
                {
                    blue_team_flag = true;
                }
                else if (eval(error.concat("_flag"))== tournament_name_flag)
                {
                    tournament_name_flag = true;
                }
                else if (eval(error.concat("_flag"))== caster_flag)
                {
                    caster_flag = true;
                }
                else if (eval(error.concat("_flag"))== link1_flag)
                {
                    link1_flag = true;
                }
                else if (eval(error.concat("_flag"))== link2_flag)
                {
                    link2_flag = true;
                }
                else if (eval(error.concat("_flag"))== link3_flag)
                {
                    link3_flag = true;
                }
                else if (eval(error.concat("_flag"))== link4_flag)
                {
                    link4_flag = true;
                }
                else if (eval(error.concat("_flag"))== link5_flag)
                {
                    link5_flag = true;
                }
                else if (eval(error.concat("_flag"))== link6_flag)
                {
                    link6_flag = true;
                }
                else if (eval(error.concat("_flag"))== link7_flag)
                {
                    link7_flag = true;
                }
                else {

                }
            }

        })
    }

    $("#red_team_field").keypress(function(){

        if (caster_flag == true && blue_team_flag == true && tournament_name_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#blue_team_field").keypress(function()
    {

        if (red_team_flag == true && caster_flag == true && tournament_name_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#caster_field").keypress(function()
    {

        if (red_team_flag == true && blue_team_flag == true && tournament_name_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#tournament_name_field").keypress(function()
    {

        if (red_team_flag == true && blue_team_flag == true && caster_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
}

