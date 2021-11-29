/*
    F35-Jsf js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/f35Jsf.json",
        function(data) {

            var f35 = '',
                details = '';

            $.each(data, function(key, value) {

                f35 += '<div class="zoom-box mt-2" id="' + value.id + '">'
                f35 += '<img class="zoom-img" src="' + value.url + '" width="300" height="150" />'
                f35 += '</div>'


            });

            details += '<h5 class="mb-4 mt-2">About this item</h5>'
            details += '<p><strong>Product : </strong>F35 JSF </p>'
            details += '<p><strong>Size : </strong>'+data[0].productDimensions+'</p>'
            details += '<p><strong>Weight : </strong>'+data[0].weight+'</p>'
            details += '<p><strong>Available : </strong>'+data[0].available+'</p>'
            details += '<p><strong>Number of Pieces : </strong>'+data[0].numberOfPieces+'</p>'
            details += '<p><strong>Manufacturer : </strong>'+data[0].manufacturer+' </p>'
            details += '<p><strong>Country Of Origin : </strong>'+data[0].countryOfOrigin+'</p>'
            details += '<p><strong>Price : </strong>'+data[0].price+'</p>'
            details += '<a href="'+data[0].buy+'" ><button>Buy</button></a>'


            $('#f35-catogary').append(f35);
            $('#f35-details').append(details)


            $(".zoom-img").jqZoom({
                selectorWidth: 30,
                selectorHeight: 30,
                viewerWidth: 400,
                viewerHeight: 300
            });
        });

});