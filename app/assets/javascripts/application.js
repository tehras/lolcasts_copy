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
ajax_bo = function (best_of) {
    var checker = $("#best_of_hidden").val();
    if (checker != null) {
        $("#best_of_hidden").val("");
        $("#bo1").removeClass("btn-success");
        $("#bo3").removeClass("btn-success");
        $("#bo5").removeClass("btn-success");
        $("#bo7").removeClass("btn-success");
        while (previous > 0) {
            $("#link" + previous).attr("style", "display:none");
            previous--;
        }
    }
    $("#best_of_hidden").val(parseInt(best_of));
    $("#bo" + best_of).addClass("btn-success");
    var i = parseInt(best_of);
    var n = 1;
    previous = i;
    while (n < i + 1) {
        $("#link" + n.toString()).removeAttr("Style");
        if ($('#link' + n.toString()).val() != null) {
            formChecker('link'+ n.toString());
        }
        n++;
    }
}


ajax_match = function (match_type) {

    var checker = $("#match_type").val();
    if (checker != null) {
        $("#match_type").val("");
        $("#5v5").removeClass("btn-success");
        $("#3v3").removeClass("btn-success");
    }
    $("#match_type").val(match_type);
    $("#" + match_type).addClass("btn-success");
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
    callError("red_team", 2, 8);
    callError("blue_team", 2, 8);
    callError("tournament_name", 2, 8);
    callError("caster", 2, 14);

    function callError(error, range1, range2) {
        $("#" + error + "_field").keyup(function () {
            if ($("#" + error + "_field").val().length < range1 || $('#red_team_field').val().length >= range2) {
                $("#best_of").attr("Style", "display: none");
                $("#link1").attr("Style", "display: none");
                $("#link2").attr("Style", "display: none");
                $("#link3").attr("Style", "display: none");
                $("#link4").attr("Style", "display: none");
                $("#link5").attr("Style", "display: none");
                $("#link6").attr("Style", "display: none");
                $("#link7").attr("Style", "display: none");
                $("#" + error + "_error").removeAttr("Style");
                $("#" + error + "_error").attr("Style", "color:red");
                if (eval(error.concat("_flag")) == red_team_flag) {
                    red_team_flag = true;
                }
                else if (eval(error.concat("_flag")) == blue_team_flag) {
                    blue_team_flag = true;
                }
                else if (eval(error.concat("_flag")) == tournament_name_flag) {
                    tournament_name_flag = true;
                }
                else if (eval(error.concat("_flag")) == caster_flag) {
                    caster_flag = true;
                }
                else if (eval(error.concat("_flag")) == link1_flag) {
                    link1_flag = true;
                }
                else if (eval(error.concat("_flag")) == link2_flag) {
                    link2_flag = true;
                }
                else if (eval(error.concat("_flag")) == link3_flag) {
                    link3_flag = true;
                }
                else if (eval(error.concat("_flag")) == link4_flag) {
                    link4_flag = true;
                }
                else if (eval(error.concat("_flag")) == link5_flag) {
                    link5_flag = true;
                }
                else if (eval(error.concat("_flag")) == link6_flag) {
                    link6_flag = true;
                }
                else if (eval(error.concat("_flag")) == link7_flag) {
                    link7_flag = true;
                }
                else {

                }
            }
            else {
                $("#" + error + "_error").removeAttr("Style");
                $("#" + error + "_error").attr("Style", "color:green");
                if (eval(error.concat("_flag")) == red_team_flag) {
                    red_team_flag = true;
                }
                else if (eval(error.concat("_flag")) == blue_team_flag) {
                    blue_team_flag = true;
                }
                else if (eval(error.concat("_flag")) == tournament_name_flag) {
                    tournament_name_flag = true;
                }
                else if (eval(error.concat("_flag")) == caster_flag) {
                    caster_flag = true;
                }
                else if (eval(error.concat("_flag")) == link1_flag) {
                    link1_flag = true;
                }
                else if (eval(error.concat("_flag")) == link2_flag) {
                    link2_flag = true;
                }
                else if (eval(error.concat("_flag")) == link3_flag) {
                    link3_flag = true;
                }
                else if (eval(error.concat("_flag")) == link4_flag) {
                    link4_flag = true;
                }
                else if (eval(error.concat("_flag")) == link5_flag) {
                    link5_flag = true;
                }
                else if (eval(error.concat("_flag")) == link6_flag) {
                    link6_flag = true;
                }
                else if (eval(error.concat("_flag")) == link7_flag) {
                    link7_flag = true;
                }
                else {

                }
            }

        })
    }

    $("#red_team_field").keypress(function () {

        if (caster_flag == true && blue_team_flag == true && tournament_name_flag == true) {
            $("#best_of").removeAttr("style");
        }
    })
    $("#blue_team_field").keypress(function () {

        if (red_team_flag == true && caster_flag == true && tournament_name_flag == true) {
            $("#best_of").removeAttr("style");
        }
    })
    $("#caster_field").keypress(function () {

        if (red_team_flag == true && blue_team_flag == true && tournament_name_flag == true) {
            $("#best_of").removeAttr("style");
        }
    })
    $("#tournament_name_field").keypress(function () {

        if (red_team_flag == true && blue_team_flag == true && caster_flag == true) {
            $("#best_of").removeAttr("style");
        }
    })
}

ajax_voting = function (vote, cast) {
    var msg = {Cast: {"id": cast, "vote": vote}};
    $.ajax({
        type: 'POST',
        url: '/vote',
        dataType: 'json',
        data: msg,

        success: function (votevalue) {
            total_id = "#total" + cast.toString()
            if (vote == "up") {
                $("#downvote" + cast.toString()).removeClass("btn-danger btn-success btn-info")
                $("#upvote" + cast.toString()).removeClass("btn-success btn-info").addClass("btn-success")
            }
            else {
                $("#upvote" + cast).removeClass("btn-success btn-info")
                $("#downvote" + cast).removeClass("btn-danger btn-info").addClass("btn-danger")
            }
            if (votevalue < 0) {
                $(total_id).removeAttr("style").attr("style", "color:red");
            }
            else {
                $(total_id).removeAttr("style").attr("style", "color:green");
            }
            var votevalue_abs = Math.abs(votevalue)
            $(total_id).html(votevalue_abs)

        }
    });
}

$(function () {

    //Custom Checkbox For Light Theme
    $("input").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        increaseArea: '20%'
    });


    //Custom Checkbox For Dark Theme
    $(".dark input").iCheck({
        checkboxClass: 'icheckbox_polaris',
        increaseArea: '20%'
    });


    //TextBox Focus Event
    $(".form-control").focus(function () {
        $(this).closest(".textbox-wrap").addClass("focused");
    }).blur(function () {
            $(this).closest(".textbox-wrap").removeClass("focused");
        });

});


function isEmpty(el) {
    return !$.trim(el.html())
}
ajax_query = function (choice) {
    var msg = {"choice": choice};
    $.ajax({
        type: 'POST',
        url: '/top',
        dataType: 'html',
        data: msg,
        success: function (response) {
            $('#dummy').html(response);
            if (choice == 'all') {
                $('#castTag').text("All Casts");
                $('#dataType').last().val('all');
                if ($('.countTotal').last().val() >= 15) {
                    $('#loadMoreBtn').attr('style', 'display:block');
                }
            }
            else if (choice == 'last7days') {
                $('#castTag').text("Last 7 Days");
                $('#dataType').last().val('7');
                if ($('.countTotal').last().val() >= 15) {
                    $('#loadMoreBtn').attr('style', 'display:block');
                }
            }
            else if (choice == 'last30days') {
                $('#castTag').text("Last 30 Days");
                $('#dataType').last().val('30');
                if ($('.countTotal').last().val() >= 15) {
                    $('#loadMoreBtn').attr('style', 'display:block');
                }
            }
        }
    });
}
function formFiller() {
    youtube_checker('link1');
    youtube_checker('link2');
    youtube_checker('link3');
    youtube_checker('link4');
    youtube_checker('link5');
    youtube_checker('link6');
    youtube_checker('link7');
    var link1_flag;
    var link2_flag;
    var link3_flag;
    var link4_flag;
    var link5_flag;
    var link6_flag;
    var link7_flag;

    function youtube_checker(link) {
        $('#' + link + '_field').keyup(function () {
            var linkTemp = 'dummy';
            if (link != 'link1') {
                linkTemp = $('#' + link + '_field').val().toLowerCase();
            }
            var return_value = youtube_parser($('#' + link + '_field').val());
            var return_value2 = twitch_parser($('#' + link + '_field').val());
            if (return_value == null && return_value2 == null && linkTemp != 'na') {
                $('#' + link + '_error').removeAttr('Style');
                $('#' + link + '_error').attr('Style', 'color:red');
                $('#' + link + '_error').text('*Not Correct! Ex(http://www.youtube.com/watch?v=XXXXXXXXXXX or http://www.twitch.tv/ZZZZZZZ/Y/XXXXXXX) - Type "NA" if game not available (Not for Game 1)')
                $('#submit').attr('Style', 'display:none');
            }
            else {
                if (return_value2 != null) {
                    $('#' + link + 'Hidden').val(return_value2);
                    $('#' + link + '_error').attr('Style', 'color:green');
                    $('#' + link + '_error').text('Success! Twitch with a link of ' + return_value2 + ' will be displayed!');
                }
                else {
                    $('#' + link + 'Hidden').val('//www.youtube.com/embed/' + return_value);
                    $('#' + link + '_error').attr('Style', 'color:green');
                    $('#' + link + '_error').text('Success! YouTube Video with a link of ' + return_value + ' will be displayed!');
                }
                var best_of = $("#best_of_hidden").val();
                if (eval(link.concat("_flag")) == link1_flag) {
                    link1_flag = true;
                }
                else if (eval(link.concat("_flag")) == link2_flag) {
                    link2_flag = true;
                }
                else if (eval(link.concat("_flag")) == link3_flag) {
                    link3_flag = true;
                }
                else if (eval(link.concat("_flag")) == link4_flag) {
                    link4_flag = true;
                }
                else if (eval(link.concat("_flag")) == link5_flag) {
                    link5_flag = true;
                }
                else if (eval(link.concat("_flag")) == link6_flag) {
                    link6_flag = true;
                }
                else if (eval(link.concat("_flag")) == link7_flag) {
                    link7_flag = true;
                }
                else {

                }

                if (best_of == 1) {
                    if (link1_flag == true) {
                        $('#submit').removeAttr('Style');
                    }
                }
                else if (best_of == 3) {
                    if (link1_flag == true && link2_flag == true && link3_flag == true) {
                        $('#submit').removeAttr('Style');
                    }
                }
                else if (best_of == 5) {
                    if (link1_flag == true && link2_flag == true && link3_flag == true && link4_flag == true && link5_flag == true) {
                        $('#submit').removeAttr('Style');
                    }
                }
                else if (best_of == 7) {
                    if (link1_flag == true && link2_flag == true && link3_flag == true && link4_flag == true && link5_flag == true && link6_flag == true && link7_flag == true) {
                        $('#submit').removeAttr('Style');
                    }
                }
                else {
                    $('#submit').attr('Style', 'display:none');
                }
            }
        })
    }

    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[7].length == 11) {
            return match[7];
        } else {
            return null;
        }
    }

    function twitch_parser(url) {
        var regExp = /^(https?:\/\/)?(.*twitch\.tv\/.*|.*twitch\.tv\/.*\/b\/.*)/i;
        var match = url.match(regExp);
        if (match != null) {
            var match1 = match[2].split('/');
            if (match1 != null) {
                var match2 = match1[3].split('?t=');
                if (match2[0].length == 7) {
                    return match[2];
                }
            }
        } else {
            return null;
        }
    }

}
formCheckerTop = function (){
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
callError("red_team", 2, 8);
callError("blue_team", 2, 8);
callError("tournament_name", 2, 8);
callError("caster", 2, 14);

function callError(error, range1, range2) {
        if ($("#" + error + "_field").val().length < range1 || $('#red_team_field').val().length >= range2) {
            $("#best_of").attr("Style", "display: none");
            $("#link1").attr("Style", "display: none");
            $("#link2").attr("Style", "display: none");
            $("#link3").attr("Style", "display: none");
            $("#link4").attr("Style", "display: none");
            $("#link5").attr("Style", "display: none");
            $("#link6").attr("Style", "display: none");
            $("#link7").attr("Style", "display: none");
            $("#" + error + "_error").removeAttr("Style");
            $("#" + error + "_error").attr("Style", "color:red");
            if (eval(error.concat("_flag")) == red_team_flag) {
                red_team_flag = true;
            }
            else if (eval(error.concat("_flag")) == blue_team_flag) {
                blue_team_flag = true;
            }
            else if (eval(error.concat("_flag")) == tournament_name_flag) {
                tournament_name_flag = true;
            }
            else if (eval(error.concat("_flag")) == caster_flag) {
                caster_flag = true;
            }
            else if (eval(error.concat("_flag")) == link1_flag) {
                link1_flag = true;
            }
            else if (eval(error.concat("_flag")) == link2_flag) {
                link2_flag = true;
            }
            else if (eval(error.concat("_flag")) == link3_flag) {
                link3_flag = true;
            }
            else if (eval(error.concat("_flag")) == link4_flag) {
                link4_flag = true;
            }
            else if (eval(error.concat("_flag")) == link5_flag) {
                link5_flag = true;
            }
            else if (eval(error.concat("_flag")) == link6_flag) {
                link6_flag = true;
            }
            else if (eval(error.concat("_flag")) == link7_flag) {
                link7_flag = true;
            }
            else {

            }
        }
        else {
            $("#" + error + "_error").removeAttr("Style");
            $("#" + error + "_error").attr("Style", "color:green");
            if (eval(error.concat("_flag")) == red_team_flag) {
                red_team_flag = true;
            }
            else if (eval(error.concat("_flag")) == blue_team_flag) {
                blue_team_flag = true;
            }
            else if (eval(error.concat("_flag")) == tournament_name_flag) {
                tournament_name_flag = true;
            }
            else if (eval(error.concat("_flag")) == caster_flag) {
                caster_flag = true;
            }
            else if (eval(error.concat("_flag")) == link1_flag) {
                link1_flag = true;
            }
            else if (eval(error.concat("_flag")) == link2_flag) {
                link2_flag = true;
            }
            else if (eval(error.concat("_flag")) == link3_flag) {
                link3_flag = true;
            }
            else if (eval(error.concat("_flag")) == link4_flag) {
                link4_flag = true;
            }
            else if (eval(error.concat("_flag")) == link5_flag) {
                link5_flag = true;
            }
            else if (eval(error.concat("_flag")) == link6_flag) {
                link6_flag = true;
            }
            else if (eval(error.concat("_flag")) == link7_flag) {
                link7_flag = true;
            }
            else {

            }
        }
}

$("#red_team_field").keypress(function () {

    if (caster_flag == true && blue_team_flag == true && tournament_name_flag == true) {
        $("#best_of").removeAttr("style");
    }
})
$("#blue_team_field").keypress(function () {

    if (red_team_flag == true && caster_flag == true && tournament_name_flag == true) {
        $("#best_of").removeAttr("style");
    }
})
$("#caster_field").keypress(function () {

    if (red_team_flag == true && blue_team_flag == true && tournament_name_flag == true) {
        $("#best_of").removeAttr("style");
    }
})
$("#tournament_name_field").keypress(function () {

    if (red_team_flag == true && blue_team_flag == true && caster_flag == true) {
        $("#best_of").removeAttr("style");
    }
})
}

formChecker = function (link) {
    var link1_flag;
    var link2_flag;
    var link3_flag;
    var link4_flag;
    var link5_flag;
    var link6_flag;
    var link7_flag;
    var linkTemp = 'dummy';
    if (link != 'link1') {
        linkTemp = $('#' + link + '_field').val().toLowerCase();
    }
    var return_value = youtube_parser($('#' + link + '_field').val());
    var return_value2 = twitch_parser($('#' + link + '_field').val());
    if (return_value == null && return_value2 == null && linkTemp != 'na') {
        $('#' + link + '_error').removeAttr('Style');
        $('#' + link + '_error').attr('Style', 'color:red');
        $('#' + link + '_error').text('*Not Correct! Ex(http://www.youtube.com/watch?v=XXXXXXXXXXX or http://www.twitch.tv/ZZZZZZZ/Y/XXXXXXX) - Type "NA" if game not available (Not for Game 1)')
        $('#submit').attr('Style', 'display:none');
    }
    else {
        if (return_value2 != null) {
            $('#' + link + 'Hidden').val(return_value2);
            $('#' + link + '_error').attr('Style', 'color:green');
            $('#' + link + '_error').text('Success! Twitch with a link of ' + return_value2 + ' will be displayed!');
        }
        else {
            $('#' + link + 'Hidden').val('//www.youtube.com/embed/' + return_value);
            $('#' + link + '_error').attr('Style', 'color:green');
            $('#' + link + '_error').text('Success! YouTube Video with a link of ' + return_value + ' will be displayed!');
        }
        var best_of = $("#best_of_hidden").val();
        if (eval(link.concat("_flag")) == link1_flag) {
            link1_flag = true;
        }
        else if (eval(link.concat("_flag")) == link2_flag) {
            link2_flag = true;
        }
        else if (eval(link.concat("_flag")) == link3_flag) {
            link3_flag = true;
        }
        else if (eval(link.concat("_flag")) == link4_flag) {
            link4_flag = true;
        }
        else if (eval(link.concat("_flag")) == link5_flag) {
            link5_flag = true;
        }
        else if (eval(link.concat("_flag")) == link6_flag) {
            link6_flag = true;
        }
        else if (eval(link.concat("_flag")) == link7_flag) {
            link7_flag = true;
        }
        else {

        }

        if (best_of == 1) {
            if (link1_flag == true) {
                $('#submit').removeAttr('Style');
            }
        }
        else if (best_of == 3) {
            if (link1_flag == true && link2_flag == true && link3_flag == true) {
                $('#submit').removeAttr('Style');
            }
        }
        else if (best_of == 5) {
            if (link1_flag == true && link2_flag == true && link3_flag == true && link4_flag == true && link5_flag == true) {
                $('#submit').removeAttr('Style');
            }
        }
        else if (best_of == 7) {
            if (link1_flag == true && link2_flag == true && link3_flag == true && link4_flag == true && link5_flag == true && link6_flag == true && link7_flag == true) {
                $('#submit').removeAttr('Style');
            }
        }
        else {
            $('#submit').attr('Style', 'display:none');
        }
    }

}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        return match[7];
    } else {
        return null;
    }
}

function twitch_parser(url) {
    var regExp = /^(https?:\/\/)?(.*twitch\.tv\/.*|.*twitch\.tv\/.*\/b\/.*)/i;
    var match = url.match(regExp);
    if (match != null) {
        var match1 = match[2].split('/');
        if (match1 != null) {
            var match2 = match1[3].split('?t=');
            if (match2[0].length == 7) {
                return match[2];
            }
        }
    } else {
        return null;
    }
}






