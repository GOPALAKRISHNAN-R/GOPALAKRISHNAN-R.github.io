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
                indexProductList += '<img class="card-img-top" src="' + value.imageUrl + '" alt="Card image cap">'
                indexProductList += '<div class="card-body">'
                indexProductList += '<h5 class="card-title">' + key + '</h5>'
                indexProductList += '<p class="card-text">Price : ₹.' + value.price + '</p>'
                indexProductList += '<a href="' + value.url + '" >Read More</a>'
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