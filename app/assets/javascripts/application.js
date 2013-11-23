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
    var red_flag
    var blue_flag
    var caster_flag
    var tournament_flag
    $("#red_team").keypress(function(){
        red_flag = true;
        if (caster_flag == true && blue_flag == true && tournament_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#blue_team").keypress(function()
    {
        blue_flag = true;
        if (red_flag == true && caster_flag == true && tournament_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#caster").keypress(function()
    {
        caster_flag = true;
        if (red_flag == true && blue_flag == true && tournament_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
    $("#tournament_name").keypress(function()
    {
        tournament_flag = true;
        if (red_flag == true && blue_flag == true && caster_flag == true)
        {
            $("#best_of").removeAttr("style");
        }
    })
}


ajax_voting = function(vote,cast){
    var msg = {Cast:{"id":cast,"vote":vote}};
$.ajax({
    type: 'POST',
    url: '/vote',
    dataType: 'json',
    data: msg,

    success: function(votevalue){
    total_id = "#total" + cast.toString()

    if (vote=="up")
    {
    $( "#downvote" + cast.toString()).removeClass( "btn-danger btn-success btn-info")
    $( "#upvote" + cast.toString()).removeClass( "btn-success btn-info").addClass( "btn-success")
    }
else
                {
                    $( "#upvote" + cast ).removeClass( "btn-success btn-info")
                    $( "#downvote" + cast ).removeClass( "btn-danger btn-info").addClass( "btn-danger")
                    }
if (votevalue < 0)
                {
                    $(total_id).removeAttr("style").attr("style","color:red");
                    }
else {
    $(total_id).removeAttr("style").attr("style","color:green");
    }
var votevalue_abs = Math.abs(votevalue)
$(total_id).html(votevalue_abs)

}
});
}
