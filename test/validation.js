$(window).on('load', function () {
    console.log("Window Loaded");
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = './localization.js';
    document.getElementsByTagName('head')[0].appendChild(newScript);
    var validation_json = localization_json();
    setTimeout(function(){
        console.log(validation_json);
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