$(window).on('load', function () {
    console.log("Window Loaded");
    setTimeout(function(){
        var error_category = getErrorCategories();
        var validation_json = localization_json();
        var lang = new URLSearchParams(window.location.search).get('lang')
        
        if (lang != null){
            var $registerInputs = $('#register input[type=text], #register select');
            $registerInputs.on('invalid', function () {
                if ($(this).get(0).validity.valueMissing) {
                    $(this).get(0).setCustomValidity(validation_json[lang][error_category["valueMissing"]]);
                } else {
                    $(this).get(0).setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
                }
            });

            $registerInputs.on('input, change', function () {
                $(this).get(0).setCustomValidity('');
            });
        }
    }, 5000);
});