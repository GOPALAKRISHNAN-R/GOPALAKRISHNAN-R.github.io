/*
    F SE Tiger II js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/fSETigerII.json",
        function(data) {

            var fSe = '',
             description = '',
                details = '';

            $.each(data, function(key, value) {

                fSe += '<div class="zoom-box mt-2" id="' + value.id + '">'
                fSe += '<img class="zoom-img" src="' + value.url + '" width="300" height="150" />'
                fSe += '</div>'


            });

            description += data[0].desc

            details += '<h5 class="mb-4 mt-2">About this item</h5>'
            details += '<p><strong>Product : </strong>F-5E Tiger II </p>'
            details += '<p><strong>Size : </strong>'+data[0].productDimensions+'</p>'
            details += '<p><strong>Available : </strong>'+data[0].available+'</p>'
            details += '<p><strong>Manufacturer : </strong>'+data[0].manufacturer+' </p>'
            details += '<p><strong>Country Of Origin : </strong>'+data[0].countryOfOrigin+'</p>'
             details += '<p>M.R.P. : <span class="text-muted text-decoration"> ₹.'+data[0].mrp+'</span></p>'
            details += '<p>Price : ₹.<strong>'+data[0].price+'</strong></p>'
            details += '<p>You save :<strong> ₹.'+(data[0].mrp-data[0].price)+'('+(data[0].mrp-data[0].price)/100+'%)</strong> </p>'
            details += '<a href="'+data[0].buy+'" ><button>Buy</button></a>'


            $('#fSe-catogary').append(fSe);
            $('#fSe-details').append(details);
             $('#description').append(description);



            $(".zoom-img").jqZoom({
                selectorWidth: 30,
                selectorHeight: 30,
                viewerWidth: 400,
                viewerHeight: 300
            });
        });

});