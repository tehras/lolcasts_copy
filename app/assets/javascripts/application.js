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
