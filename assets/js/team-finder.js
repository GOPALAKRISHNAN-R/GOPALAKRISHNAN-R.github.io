var teams = [];
var participant = '';

var team = '';
var participantList = [];

var count = 0;
var selectedCount = 0;

var totalTeam = '';
var selectedTeamMembers = [];

var totalSelectedTeamMembers = [];

var generateTeamList = '';

var resultIndex = [];

var result = 0;


var pId;

$(function() {
    $.getJSON("/office-activity/team.json",

        function(data) {
            $("#viewScoreBoardDetails").hide();
            $("#hideScoreBoard").hide();

            $.each(data, function(key, value) {
                if (value.active) {
                    team += '<div class="col-lg-3 col-md-6 col-sm-12">'
                    team += '<div class="form-check form-check-inline">'
                    team += '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="' + value.name + '">'
                    team += '<label class="form-check-label" for="inlineCheckbox1">' + value.name + '</label>'
                    team += '</div>'
                    team += '</div>'
                }
            });




            $("body").click(function(event) {
                let target = event.target.id;

                pId = event.target.parentElement.id;
                switch (target) {
                    case "selectTeam":
                        selectedTeamMembersFromList();
                        break;
                    case "addBtn" + pId:
                        var point = 5;
                        add(point, pId);
                        break;
                    case "subBtn" + pId:
                        var point = 5;
                        sub(point, pId);
                        break;
                    case "btnGenerate":
                        generateTeam();
                        break;
                    case "viewScoreBoard":
                        $("#viewScoreBoard").hide();
                        $("#hideScoreBoard").show();
                        $("#viewScoreBoardDetails").show();
                        break;
                    case "hideScoreBoard":
                        $("#viewScoreBoard").show();
                        $("#hideScoreBoard").hide();
                        $("#viewScoreBoardDetails").hide();
                }
            });

            function add(point, pId) {
                result = result + point;
                console.log(pId + "===" + result + "=" + result + "+" + point);
                $("#sum" + pId).html(result);
            }

            function sub(point, pId) {
                result = result - 5;
                console.log(pId + "===" + result + "=" + result + "+" + point);
                $("#sum" + pId).html(result);
            }




            function selectedTeamMembersFromList() {
                // body...
                selectedTeamMembers = $('input[type=checkbox]:checked').map(function(_, el) {
                    return $(el).val();
                }).get();
                $.each(selectedTeamMembers, function(index, value) {
                    participantList += '<option>' + (index + 1) + ') ' + value + '</option>'
                    count = index + 1;
                });

                $('#selected-team').append(participantList);

            }

            function generateTeam() {

                var generateCount = parseInt($("#generateTeam option").filter(":selected").text(), 10);
                if (generateCount == 1) {
                    $.each(selectedTeamMembers, function(index, value) {
                        generateTeamList += '<div class="col-lg-6 col-md-12 col-sm-12">'
                        generateTeamList += '<div class="card">'
                        generateTeamList += '<h5 class="card-header">' + value + '</h5>'
                        generateTeamList += '<div class="card-body">'
                        generateTeamList += '<p id=' + index + ' class="card-text"><button type="button" class="btn btn-success" id="addBtn' + index + '">+5</button><button type="button" class="btn btn-danger" id="subBtn' + index + '">-5</button> = <span id="sum' + index + '"></span></p>'
                        generateTeamList += '</div>'
                        generateTeamList += '</div>'
                        generateTeamList += '</div>'
                    });
                    $('#generate-card-team').append(generateTeamList);
                } else {
                    chunkArray(selectedTeamMembers, generateCount);
                }

            }


            function chunkArray(arr, n) {

                var chunkLength = Math.max(arr.length / n, 1);
                var chunks = [];
                for (var i = 0; i < n; i++) {
                    if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
                }
                for (var i = 0; i < n; i++) {
                    // console.log(i + "array " + chunks[i]);
                    generateTeamList += '<div class="col-lg-6 col-md-12 col-sm-12">'
                    generateTeamList += '<div class="card">'
                    generateTeamList += '<h5 class="card-header">Team ' + (i + 1) + '<span id='+i+'><button type="button" class="btn btn-success" id="addBtn' + i+ '">+5</button><button type="button" class="btn btn-danger" id="subBtn' + i + '">-5</button> = <span id="sum' + i + '"></span></span></h5>'

                    generateTeamList += '<div class="card-body">'
                    generateTeamList += '<p class="card-text">' + chunks[i] + '</p>'
                    generateTeamList += '</div>'
                    generateTeamList += '</div>'
                    generateTeamList += '</div>'
                    generateTeamList += '<br>'
                }
                $('#generate-card-team').append(generateTeamList);
                return chunks;
            }


            // function teamGenerate(count, countvalue) {
            //     var teamCount = count / countvalue;
            //     console.log(count + ':' + countvalue);
            // }

            $('#selectedTeamMembers').append(selectedTeamMembers);
            $('#team-container').append(team);
            $('#totalTeamMembers').append(totalTeam);


        });

});