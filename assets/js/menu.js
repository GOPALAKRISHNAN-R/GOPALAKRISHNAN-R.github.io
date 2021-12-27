$(document).ready(function() {

    $.getJSON("/assets/data/menu.json",
        function(data) {

            $.each(data, function(key, value) {

                var menu = ''

                if (value.submenu.length == 0) {
                    menu += '<li class="nav-item"><a class="nav-link js-scroll-trigger" href="' + value.url + '">' + value.name + '</a></li>'
                } else {
                    menu += '<li class="nav-item dropdown">'
                    menu += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> '
                    menu += value.name
                    menu += ' </a>'
                    menu += ' <div class="dropdown-menu" aria-labelledby="navbarDropdown">'
                    menu += '<div class="row no-gutters">'
                    $.each(value.submenu, function(key, val) {
                        // if (val.id > 1) {
                        //     menu += '<div class="col-lg-2 col-md-6 col-sm-12 padding-0">'
                        //     menu += ' <span class="text-uppercase text-white ml-3">'
                        //     menu += '<a href="' + val.url + '">'
                        //     menu += val.name
                        //     menu += '</a>'
                        //     menu += '</span>'
                        //     menu += '</div>'
                        // } else {
                            menu += '<div class="col-lg-3 col-md-6 col-sm-12 padding-0">'
                            menu += ' <span class="text-uppercase text-white ml-3">'
                            menu += '<a href="' + val.url + '">'
                            menu += val.name
                            menu += '</a>'
                            menu += '</span>'
                            menu += '</div>'
                        // }
                    });
                    menu += '</div>'
                    menu += '</div>'
                    menu += '</li>'

                }
                $('#menu-content').append(menu)
            });

        });
});