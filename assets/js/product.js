$(document).ready(function() {

    $.getJSON("/product/product.json",
        function(data) {

            var product_container = '';

            product_container += '<div class="row g-0">'
            $.each(data, function(key, value) {
                product_container += '<div class="col-lg-4 col-md-6 col-sm-12">'
                product_container += '<a class="portfolio-box" href="'+value.img+'" title="Project Name">'
                product_container += '<img class="img-fluid" src="'+value.img+'" alt="..." />'
                product_container += '<div class="portfolio-box-caption">'
                product_container += '<div class="project-category text-white-50">Category</div>'
                product_container += '<div class="project-name"><a href="'+value.url+'">'+ value.product_name + '</a></div>'
                product_container += '</div>'
                product_container += '</a>'
                // product_container += '<div class="mt-2 shadow-sm p-3 bg-white mb-5 bg-body">'
                // product_container += '<h4>' + value.id + ') ' +'<a href="'+value.url+'">'+ value.product_name + '</a></h4>'
                // product_container += '<br/>'
                // product_container += '</div>'
                product_container += '</div>'
            });
            product_container += '</div>'
            $('#product-container').append(product_container);

        });


});