$(document).ready(function() {
    $("#apply").click(function() {

        $(".alert").toggle();
    });

    $('#primary-skills').DataTable();
    $('#secondary-skills').DataTable();
    $('#location').DataTable();


});

// $('#contactForm .choose-div').click(function() {
//         $( this ).css("opacity", "0.7");
//         $( '#contactForm .choose-div-two' ).css("opacity", "1");

// });

// $('#contactForm .choose-div-two').click(function() {
//         $( this ).css("opacity", "0.7");
// $( '#contactForm .choose-div' ).css("opacity", "1");
// });


$("#primaryskillsText")
    .keyup(function() {
        var value = $(this).val();
        var comma = value.search(",");
        var primaryskills = '';

        if (comma > 1) {
            primaryskills += '<span class="badge rounded-pill bg-light text-dark mx-2">'

            for (let i = 0; i <= comma; i++) {
                if (comma != i) {
                    primaryskills += value[i]
                }

                if (comma == i) {
                    $(this).val("");
                }
            }
            primaryskills += '<button type = "button" class = "mx-1 btn-close" aria - label = "Close" ></button>'
            primaryskills += '</span>'

            $('#primary-skills').append(primaryskills);
        }

    }).keyup();

$("#secondaryskillsText")
    .keyup(function() {
        var value = $(this).val();
        var comma = value.search(",");
        var skills = '';

        if (comma > 1) {
            skills += '<span class="badge rounded-pill bg-light text-dark mx-2">'

            for (let i = 0; i <= comma; i++) {
                if (comma != i) {
                    skills += value[i]
                }

                if (comma == i) {
                    $(this).val("");
                }
            }
            skills += '<button id="close" type = "button" class = "mx-1 btn-close" aria - label = "Close"></button>'
            skills += '</span>'

            $('#secondary-skills').append(skills);
        }

    }).keyup();

$("#location")
    .keyup(function() {
        var value = $(this).val();
        var comma = value.search(",");
        var list = '';

        if (comma > 1) {
            list += '<span class="badge rounded-pill bg-light text-dark mx-2">'

            for (let i = 0; i <= comma; i++) {
                if (comma != i) {
                    list += value[i]
                }

                if (comma == i) {
                    $(this).val("");
                }
            }
            list += '<button id="close" type = "button" class = "mx-1 btn-close" aria - label = "Close"></button>'
            list += '</span>'

            $('#location-list').append(list);
        }

    }).keyup();

// window.onload = function(){
//     document.getElementById('close').onclick = function(){
//         alert('test');
//         this.parentNode.parentNode.parentNode
//         .removeChild(this.parentNode.parentNode);
//         return false;
//     };
// };

// http://jsfiddle.net/jensgram/fRUUd/35/
// future purpose
$('#test').click(function() {
    $('#out').text('');
    $('#rowclick2 tr').filter(':has(:checkbox:checked)').each(function() {
        // this = tr
        $tr = $(this);
        $('td', $tr).each(function() {
            // If you need to iterate the TD's
        });
        //get row values
        $('#out').append(this.id);
    });
});

