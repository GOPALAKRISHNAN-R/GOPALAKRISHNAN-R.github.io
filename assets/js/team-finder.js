var teams = [];
var participant = '';

var team = '';
var participantList = [];

var count = 0;
var selectedCount = 0;

var totalTeam = '';
var selectedTeamMembers = [];

var totalSelectedTeamMembers = [];


$(function() {
    $.getJSON("/office-activity/team.json",

        function(data) {
            $("#viewScoreBoardDetails").hide();
            $("#hideScoreBoard").hide();

            $.each(data, function(key, value) {
                if (value.active) {
                    team += '<div class="col-lg-4 col-md-6 col-sm-12">'
                    team += '<div class="form-check form-check-inline">'
                    team += '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="' + value.name + '">'
                    team += '<label class="form-check-label" for="inlineCheckbox1">' + value.name + '</label>'
                    team += '</div>'
                    team += '</div>'
                    count += 1
                }
            });




            $("body").click(function(event) {
                let target = event.target.id;
                switch (target) {
                    case "selectTeam":
                        selectedTeamMembersFromList();
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

            function selectedTeamMembersFromList() {
                // body...
                selectedTeamMembers = $('input[type=checkbox]:checked').map(function(_, el) {
                    return $(el).val();
                }).get();
                $.each(selectedTeamMembers, function(index, value) {
                    participantList += '<option>'+(index+1)+') ' + value + '</option>'
                });

                $('#selected-team').append(participantList);

            }

            function generateTeam() {
                // selectedCount =1;
                // switch (selectedCount) {
                //     case 1:
                //         alert(selectedCount);
                //         break;
                // }

                var generateCount = parseInt($("#generateTeam option").filter(":selected").text(), 10);

                switch (generateCount) {
                    case 1:
                        generateCount /= selectedCount;
                        alert(generateCount);
                        break;
                    case 2:
                        alert(generateCount);
                        break;
                    case 3:
                        alert(generateCount);
                        break;
                }


            }

            totalTeam += '<label for="exampleFormControlSelect2">List of participants (' +
                count + ')</label>'
            selectedTeamMembers = '<label for="exampleFormControlSelect2">Selected participants (' + selectedCount + ')</label>'

            $('#selectedTeamMembers').append(selectedTeamMembers);
            $('#team-container').append(team);
            $('#totalTeamMembers').append(totalTeam);


        });

});