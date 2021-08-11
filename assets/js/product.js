$(document).ready(function() {

    $.getJSON("/product/product.json",
        function(data) {

            var product_container = '';

            product_container += '<div class="row">'
            $.each(data, function(key, value) {
                product_container += '<div class="col-lg-12 col-md-12 col-sm-12">'
                product_container += '<div class="mt-2 shadow-sm p-3 bg-white mb-5 bg-body">'
                product_container += '<h4>' + value.id + ') ' +'<a href="'+value.url+'">'+ value.product_name + '</a></h4>'
                product_container += '<br/>'
                product_container += '</div>'
                product_container += '</div>'
            });
            product_container += '</div>'
            $('#product-container').append(product_container);

        });


});