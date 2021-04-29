$(window).on('load', function () {
    console.log("Window Loaded");
    setTimeout(function(){
        var emailField = document.getElementById('email-address')
            , confirmEmailField = document.getElementById('confirm-email-address');

        var error_category = getErrorCategories();
        var validation_json = localization_json();
        var lang = new URLSearchParams(window.location.search).get('lang')
        lang = lang == null ? "en" : lang
        var $registerInputs = $('#register input[type=text], #register select');
        $registerInputs.on('invalid', function () {
            if ($(this).get(0).validity.valueMissing) {
                $(this).get(0).setCustomValidity(validation_json[lang][error_category["valueMissing"]]);
            } else {
                $(this).get(0).setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
            }
        });
        // $registerInputs.on('input, change', function () {
        //     $(this).get(0).setCustomValidity('');
        // });

        function validateEmail(){
            if(emailField.value.trim() != confirmEmailField.value.trim()) {
                confirmEmailField.setCustomValidity(validation_json[lang][error_category["confirmEmail"]]);
            } else {
                confirmEmailField.setCustomValidity('');
            }

            if(	emailField.validity.typeMismatch ) {
                emailField.setCustomValidity(validation_json[lang][error_category["invalidEmail"]]);
            } else {
                emailField.setCustomValidity('');
            }

            if( emailField.validity.patternMismatch ) {
                emailField.setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
            } else {
                emailField.setCustomValidity('');
            }
        }

        emailField.onchange = validateEmail;
        confirmEmailField.oninput = validateEmail;
    }, 2000);    
});