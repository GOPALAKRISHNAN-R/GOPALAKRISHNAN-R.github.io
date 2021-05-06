$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;
    $.getJSON("/department/law/law.json",
        function(data) {
            $.each(data, function(key, value) {
                 var share_url = '<a href="' + value.share + '"><i class="fab fa-whatsapp"></i></a>';
                t.row.add([
                //     value.name,
                    value.dept,
                    share_url,
                //     value.intern_category
                ]).draw(false);
            });
        });
});