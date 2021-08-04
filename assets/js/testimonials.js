$(document).ready(function() {


    $.getJSON("/testimonial/testimonials.json",
        function(data) {
            var testimonials = '';
            testimonials += '<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">'
            testimonials += '<div class="carousel-inner">'
            testimonials += '<div class="carousel-item active">'
            testimonials += '<div class = "text-center" > "Awesome creativity. What you have in your mind, Aydiv- Vidya`s Crafts brings it into the physical form. Great work. Pleasant service. May god help you reach great heights."</div>'
            testimonials += '<br>'
            testimonials += '<div class="text-center"><strong> - Rashi</strong> </div>'
            testimonials += '</div>'
            $.each(data, function(key, value) {
                testimonials += '<div class="carousel-item">'
                testimonials += '<div class="text-center">'
                if (value.image_1 != "" || value.image_2 != "") {
                    testimonials += '<a class="portfolio-box" href="' + value.image_1 + '" target="_blank">'
                    testimonials += '<img src="' + value.image_1 + '" style="width:90px"></a>'
                    testimonials += '<span class="ml-2">'
                    testimonials += '<a class="portfolio-box" href="' + value.image_2 + '" target="_blank">'
                    testimonials += '<img src="' + value.image_2 + '" style="width:90px"></a>'
                    testimonials += '</span>'
                }
                testimonials += '</div>'
                testimonials += '<div class = "text-center">'
                testimonials += value.reviews
                testimonials += '</div><br>'
                testimonials += '<div class="text-center" id="testimonialsCustomerContainer">'
                testimonials += '<strong> - ' + value.customers + '</strong>'
                testimonials += '</div>'
                testimonials += '</div>'
            });
            testimonials += '</div>'
            testimonials += '</div>'
            $('#testimonialContainer').append(testimonials);
        });

});