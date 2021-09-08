var team = '',
    selectedTeamMembers = [],
    participants = [],
    participantsIndex = {},
    generateTeamList = '',
    resultTable = '';

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
            $('#team-container').append(team);
        });
});

$("#btnGenerate").click(function() {
    var generateCount = parseInt($("#generateTeam option").filter(":selected").text(), 10);
    selectedTeamMembers = $('input[type=checkbox]:checked').map(function(_, el) {
        return $(el).val();
    }).get();
    chunkArray(selectedTeamMembers, generateCount);
});

function chunkArray(arr, n) {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];


    for (var i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
        generateTeamList += '<div class="col-lg-6 col-md-12 col-sm-12">'
        generateTeamList += '<div class="card">'
        generateTeamList += '<h5 class="card-header">Team ' + alphabet[i] + '<span id=' + i + '>'
        generateTeamList += '<button type="button" class="btn btn-success" id="addBtn" onclick="addScore(' + i + ', 5)">+5</button>'
        generateTeamList += '<button type="button" class="btn btn-danger" id="subBtn" onclick="addScore(' + i + ', -5)">-5</button>'
        generateTeamList += '<button type="button" class="btn btn-success" id="addBtn" onclick="addScore(' + i + ', 10)">+10</button>'
        generateTeamList += '<button type="button" class="btn btn-danger" id="subBtn" onclick="addScore(' + i + ', -10)">-10</button> ='

        generateTeamList += '<span id="sum' + i + '">0</span></span></h5>'

        generateTeamList += '<div class="card-body">'
        generateTeamList += '<p class="card-text">' + chunks[i] + '</p>'
        generateTeamList += '</div>'
        generateTeamList += '</div>'
        generateTeamList += '</div>'
        generateTeamList += '<br>'
        resultTable += '<tr><th scope="row">' + (i + 1) + '</th>'
        resultTable += '<td>Team ' + alphabet[i] + '</td>'
        resultTable += '<td><span id="tablesum' + i + '"></span></td>'
        resultTable += '</tr>'

    }

    $('#result-table').append(resultTable);
    $('#generate-card-team').append(generateTeamList);


    return chunks;
}

$("#viewScoreBoard").click(function() {
    $("#viewScoreBoard").hide();
    $("#hideScoreBoard").show();
    $("#viewScoreBoardDetails").show();

});

$("#hideScoreBoard").click(function() {
    $("#viewScoreBoard").show();
    $("#hideScoreBoard").hide();
    $("#viewScoreBoardDetails").hide();
});

function addScore(index, point) {
    try {
        var scoreSpan = $("#sum" + index);
        var currentScore = parseInt(scoreSpan.text()) + point;
        var tableSpan = $("#tablesum" + index);

        $(scoreSpan).html(currentScore);
        $(tableSpan).html(currentScore);

    } catch (err) {
        alert('Error occured: ' + err.message);
    }
}