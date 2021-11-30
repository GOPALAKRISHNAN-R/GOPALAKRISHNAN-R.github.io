/*
    Form js Developed on 30/10/2021.
*/
$(document).ready(function() {


    const FORM_NAME = 'CONTACT';
    var form = ''

    form += '<div class="row">'
    form += '<div class="col-lg-12">'
    form += '<h4 class="text-center">'
    form += FORM_NAME
    form += '</h4>'
    form += '<hr class="divider">'
    form += '</div>'
    form += '</div>'

    form += '<div class="row">'
    form += '<div class="col-lg-12" id="form">'

    form += '<form onsubmit="return sendEmail(this);">'
    form += '<div class="form-group">'
    form += '<label for="emailInput">Email address</label>'
    form += '<input type="email" name="emailInput" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" required>'
    form += '</div>'
    form += '<div class="form-group">'
    form += '<label for="subjectInput">'
    form += 'Subject'
    form += '</label>'
    form += '<input type="text" name="subject" class="form-control" id="subjectInput" placeholder="Subject" required>'
    form += '</div>'
    form += '<div class="form-group">'
    form += '<label for="messageTextArea">'
    form += 'Message'
    form += '</label>'
    form += '<textarea class="form-control" name="message" id="messageTextArea" rows="3">'
    form += '</textarea>'
    form += '</div>'
    form += '<button type="submit" name="submit" value="Submit">Send</button>'
    form += '</form>'

    form += '</div>'
    form += '</div>'


    $('#form').append(form);
});

function sendEmail(form) {
    window.open("mailto:giriprabhu.seshadri@ladderminds.com?subject=AvionWear%20" + form.subject.value + "&body=Message:" + form.message.value);
    return false; /* cancel submit or else page reloads */
}