$(window).on('load', function () {
    console.log("Window Loaded");
    var error_category = getErrorCategories();
    var validation_json = localization_json();
    var lang = new URLSearchParams(window.location.search).get('lang')
    setTimeout(function(){
        if (lang != null){
            var $registerInputs = $('#register input[type=text], #register input[type=email], #register select');
            $registerInputs.on('invalid', function () {
                if ($(this).get(0).validity.valueMissing) {
                    $(this).get(0).setCustomValidity(validation_message("valueMissing"));
                } else if ($(this).get(0).validity.patternMismatch){
                    $(this).get(0).setCustomValidity(validation_message("value128Characters"));
                }else if ($(this).get(0).validity.typeMismatch){
                    $(this).get(0).setCustomValidity(validation_message("invalidEmail"));
                }
            });

            $registerInputs.on('input, change', function () {
                $(this).get(0).setCustomValidity('');
            });
        }
    }, 5000);

    function validation_message(key){
        return validation_json[lang][error_category[key]]
    }
});