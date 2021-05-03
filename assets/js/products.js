$(document).ready(function() {
    $.getJSON("/offering/products/products.json",
        function(data) {
            var product = '';
            $.each(data, function(key, value) {

                product += '<div class="col-lg-4 col-sm-4 text-center">'
                product += '<div class="mt-5 mr-2 containers">'
                product += '<h4>' + value.product_name + '</h4>'
                product += '<a target="_blank" href="' + value.img + '">'
                product += '<img class="img-thumbnail edge work-shop" src="' + value.img + '">'
                product += '</a>'
                product += '<p class="text-center mt-3">'
                product += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">View</a></p>'
                product += '</div>'
                product += '</div>'

            });
            $('#product-container').append(product);
        });
    $.getJSON("/offering/products/uv-dosth-micro/uv-dosth-micro.json",
        function(data) {
            var product = '';
            $.each(data, function(key, value) {

                product += '<div class="col-lg-6 col-sm-6 text-center">'
                product += '<div class="mt-5 mr-2 containers">'

                product += '<a target="_blank" href="' + value.img + '">'
                product += '<img class="img-thumbnail edge work-shop" src="' + value.img + '">'
                product += '</a>'
                product += '</div>'
                product += '</div>'
                product += '<div class="col-lg-6 col-sm-6">'
                product += '<div class="mt-5 mr-2 containers">'
                product += '<h4 class="text-center">' + value.product_name + '</h4>'
                product += '<hr class="divider my-4" />'
                product += '<h6><b>Model No:</b> ' + value.model_no + '</h6>'
                product += '<h6><b>Capacity:</b> ' + value.capacity + '</h6>'
                product += '<h6><b>Lamps:</b> ' + value.lamps + '</h6>'
                product += '<h6><b>Dimensions:</b> ' + value.dimensions + '</h6>'
                product += '<h6><b>Operating Power:</b> ' + value.operating_power + '</h6>'
                product += '<h6><b>Input Voltage:</b> ' + value.input_voltage + '</h6>'
                product += '<h6><b>Power Cable:</b> ' + value.power_cable + '</h6>'
                product += '<h6><b>Output:</b> ' + value.output + '</h6>'
                product += '<p class="text-center mt-3">'
                product += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">Buy</a></p>'

                product += '</div>'
                product += '</div>'


            });
            $('#specific-container').append(product);
        });
    $.getJSON("/offering/products/uv-dosth-neo/uv-dosth-neo.json",
        function(data) {
            var product = '';
            $.each(data, function(key, value) {

                product += '<div class="col-lg-6 col-sm-6 text-center">'
                product += '<div class="mt-5 mr-2 containers">'

                product += '<a target="_blank" href="' + value.img + '">'
                product += '<img class="img-thumbnail edge work-shop" src="' + value.img + '">'
                product += '</a>'
                product += '</div>'
                product += '</div>'
                product += '<div class="col-lg-6 col-sm-6">'
                product += '<div class="mt-5 mr-2 containers">'
                product += '<h4 class="text-center">' + value.product_name + '</h4>'
                product += '<hr class="divider my-4" />'
                product += '<h6><b>Model No:</b> ' + value.model_no + '</h6>'
                product += '<h6><b>Capacity:</b> ' + value.capacity + '</h6>'
                product += '<h6><b>Lamps:</b> ' + value.lamps + '</h6>'
                product += '<h6><b>Dimensions:</b> ' + value.dimensions + '</h6>'
                product += '<h6><b>Operating Power:</b> ' + value.operating_power + '</h6>'
                product += '<h6><b>Input Voltage:</b> ' + value.input_voltage + '</h6>'
                product += '<h6><b>Power Cable:</b> ' + value.power_cable + '</h6>'
                product += '<h6><b>Output:</b> ' + value.output + '</h6>'
                product += '<p class="text-center mt-3">'
                product += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">Buy</a></p>'

                product += '</div>'
                product += '</div>'


            });
            $('#specific-container-neo').append(product);
        });
    $.getJSON("/offering/products/uv-dosth-pro/uv-dosth-pro.json",
        function(data) {
            var product = '';
            $.each(data, function(key, value) {

                product += '<div class="col-lg-6 col-sm-6 text-center">'
                product += '<div class="mt-5 mr-2 containers">'

                product += '<a target="_blank" href="' + value.img + '">'
                product += '<img class="img-thumbnail edge work-shop" src="' + value.img + '">'
                product += '</a>'
                product += '</div>'
                product += '</div>'
                product += '<div class="col-lg-6 col-sm-6">'
                product += '<div class="mt-5 mr-2 containers">'
                product += '<h4 class="text-center">' + value.product_name + '</h4>'
                product += '<hr class="divider my-4" />'
                product += '<h6><b>Model No:</b> ' + value.model_no + '</h6>'
                product += '<h6><b>Capacity:</b> ' + value.capacity + '</h6>'
                product += '<h6><b>Lamps:</b> ' + value.lamps + '</h6>'
                product += '<h6><b>Dimensions:</b> ' + value.dimensions + '</h6>'
                product += '<h6><b>Operating Power:</b> ' + value.operating_power + '</h6>'
                product += '<h6><b>Input Voltage:</b> ' + value.input_voltage + '</h6>'
                product += '<h6><b>Power Cable:</b> ' + value.power_cable + '</h6>'
                product += '<h6><b>Output:</b> ' + value.output + '</h6>'
                product += '<p class="text-center mt-3">'
                product += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">Buy</a></p>'

                product += '</div>'
                product += '</div>'


            });
            $('#specific-container-pro').append(product);
        });
});