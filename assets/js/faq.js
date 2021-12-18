$(document).ready(function() {


    $.getJSON("/faq/faq.json",
        function(data) {
            var faq = '';
            faq += '<div class="col-lg-12 col-md-12 col-sm-12">'
            faq += '<div class="accordion" id="accordionExample">'

            $.each(data, function(key, value) {

                faq += '<div class="card">'
                faq += '<div class="card-header" id="headingOne">'
                faq += '<h2 class="mb-0">'
                faq += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="'+value.data_target+'" aria-expanded="true" aria-controls="'+value.div_id+'">'
                faq += value.question
                faq += '</button>'
                faq += '</h2>'
                faq += '</div>'
                faq += '<div id = "'+value.div_id+'" class = "collapse" aria-labelledby = "'+value.aria_labelledby+'" data-parent = "#accordionExample" >'
                faq += '<div class="card-body">'
                faq += value.answer
                faq += '</div>'
                faq += '</div>'
                faq += '</div >'


            });
            faq += '</div>'
            faq += '</div>'
             $('#faqContainer').append(faq);

        });

$.getJSON("/faq/faq_clip.json",
        function(data) {
            var faq = '';
            faq += '<div class="col-lg-12 col-md-12 col-sm-12">'
            faq += '<div class="accordion" id="accordionExample">'

            $.each(data, function(key, value) {

                faq += '<div class="card">'
                faq += '<div class="card-header" id="headingOne">'
                faq += '<h2 class="mb-0">'
                faq += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="'+value.data_target+'" aria-expanded="true" aria-controls="'+value.div_id+'">'
                faq += value.question
                faq += '</button>'
                faq += '</h2>'
                faq += '</div>'
                faq += '<div id = "'+value.div_id+'" class = "collapse" aria-labelledby = "'+value.aria_labelledby+'" data-parent = "#accordionExample" >'
                faq += '<div class="card-body">'
                faq += value.answer
                faq += '</div>'
                faq += '</div>'
                faq += '</div >'


            });
            faq += '</div>'
            faq += '</div>'
             $('#faqContainerClip').append(faq);

        });


});