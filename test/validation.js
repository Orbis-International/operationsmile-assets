console.log("Window Loaded");
var error_category = getErrorCategories();
var validation_json = localization_json();
var lang = new URLSearchParams(window.location.search).get('lang')
setTimeout(function(){
    if (lang != null){
        var $registerInputs = $('#register input[type=text], #register select');
        $registerInputs.on('invalid', function () {
            if ($(this).get(0).validity.valueMissing) {
                $(this).get(0).setCustomValidity(validation_message("valueMissing"));
            } else {
                $(this).get(0).setCustomValidity(validation_message("value128Characters"));
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