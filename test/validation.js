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
            console.log("...invalid")
            console.log($(this))
            console.log($(this).get(0).validity)
            if ($(this).get(0).validity.valueMissing) {
                console.log("value missing...")
                $(this).get(0).setCustomValidity(validation_json[lang][error_category["valueMissing"]]);
            } else if ($(this).get(0).validity.patternMismatch) {
                console.log("pattern ...")
                $(this).get(0).setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
            } else if ($(this).get(0).validity.typeMismatch) {
                console.log("type.....")
                $(this).get(0).setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
            }
        });
        $registerInputs.on('input, change', function () {
            console.log("input change.....")
            $(this).get(0).setCustomValidity('');
        });

        function validateEmail(){
            console.log("balidate email......")
            if(emailField.value.trim() != confirmEmailField.value.trim()) {
                console.log("if confirm email......")
                confirmEmailField.setCustomValidity(validation_json[lang][error_category["confirmEmail"]]);
            } else {
                console.log("else confirm  email......")
                confirmEmailField.setCustomValidity('');
            }

            // if(	emailField.validity.typeMismatch ) {
            //     emailField.setCustomValidity(validation_json[lang][error_category["invalidEmail"]]);
            // } else {
            //     emailField.setCustomValidity('');
            // }

            // if( emailField.validity.patternMismatch ) {
            //     emailField.setCustomValidity(validation_json[lang][error_category["value128Characters"]]);
            // } else {
            //     emailField.setCustomValidity('');
            // }
        }

        emailField.onchange = validateEmail();
        confirmEmailField.oninput = validateEmail();
    }, 2000);    
});