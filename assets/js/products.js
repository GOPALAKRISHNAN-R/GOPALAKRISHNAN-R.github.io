/*
    Product json Developed on 26/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/products.json",
        function(data) {

            var indexProductList = ''
            let tornnado = ''

            $.each(data, function(key, value) {

                indexProductList += '<div class="col-lg-3 col-md-6 text-center mt-2">'
                indexProductList += '<div class="card" style="width: 16rem;">'
                indexProductList += '<a href="' + value.url + '" >'
                indexProductList += '<img class="card-img-top" src="' + value.imageUrl + '" alt="Card image cap">'
                indexProductList += '</a>'
                indexProductList += '<div class="card-body">'
                // indexProductList += '<a href="' + value.url + '" >'

                indexProductList += '<h5 class="card-title" >'
                indexProductList += '<a href="' + value.url + '" >'
                indexProductList += key
                indexProductList += '</a>'
                indexProductList += '</h5>'
                indexProductList += '<p class="card-text">M.R.P : ₹ <span class=text-decoration text-muted>'
                indexProductList += value.mrp
                indexProductList += '</span><strong> '
                indexProductList += value.price
                indexProductList += '</strong></p>'
                // indexProductList += '</a>'

                indexProductList += '<a href="' + value.buy + '" ><button>Buy</button></a>'
                indexProductList += '</div>'
                indexProductList += '</div>'
                indexProductList += '</div>'

            });

            //tornnado
            // if (key == "Tornnado") {

            // }

            $('#products-list').append(indexProductList);
        });

});