$(window).on('load', function () {
    console.log("Window Loaded");
    setTimeout(function(){
        function loadDoc() {
            console.log("load doc")
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               console.log(this.responseText);
              }else{
                console.log("nope")
              }
            };
            xhttp.open("GET", "ajax_info.txt", true);
            xhttp.send();
        }
        
        loadDoc();
        console.log("*******Validation error messages**********");
        var $registerInputs = $('#register input[type=text]');
        $registerInputs.on('invalid', function () {
            if ($(this).get(0).validity.valueMissing) {
                $(this).get(0).setCustomValidity('Please fillll out this field.');
            } else {
                $(this).get(0).setCustomValidity('Please enter no more than 128 characters.');
            }
        });

        $registerInputs.on('input, change', function () {
            $(this).get(0).setCustomValidity('');
        });
    }, 5000);
});