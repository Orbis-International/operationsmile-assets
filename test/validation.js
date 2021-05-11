$(window).on('load', function () {
    setTimeout(function(){
        var emailField = document.getElementById('email-address')
            , confirmEmailField = document.getElementById('confirm-email-address');

        var error_category = getErrorCategories();
        var validation_json = localization_json();
        var lang = new URLSearchParams(window.location.search).get('lang')

        var $registerInputs = $('#register input[type=text],#register input[type=email], #register select');
            $registerInputs.on('invalid', function () {
                if ($(this).get(0).validity.valueMissing) {
                    $(this).get(0).setCustomValidity(validation_message("valueMissing"));
                } else if ($(this).get(0).validity.patternMismatch){
                    if ($(this).get(0).type == "email") {
                        $(this).get(0).setCustomValidity(validation_message("invalidEmail"));
                    } else {
                        $(this).get(0).setCustomValidity(validation_message("value128Characters"));
                    }
                }                    
            });

        $registerInputs.on('change', function () {
            $(this).get(0).setCustomValidity('');
        });

        function validation_message(key){
            return validation_json[lang][error_category[key]]
        }

        function validateEmail(){
            const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!re.test(emailField.value.trim())) {
                emailField.setCustomValidity(validation_message("invalidEmail"));
            }
            if(emailField.value.trim() != confirmEmailField.value.trim()) {
                confirmEmailField.setCustomValidity(validation_message("confirmEmail"));
            } else {
                confirmEmailField.setCustomValidity('');
            }

            // if(	emailField.validity.typeMismatch ) {
            //     emailField.setCustomValidity(validation_message("invalidEmail"));
            // } else {
            //     emailField.setCustomValidity('');
            // }

            // if( emailField.validity.patternMismatch ) {
            //     emailField.setCustomValidity(validation_message("value128Characters"));
            // } else {
            //     emailField.setCustomValidity('');
            // }
        }

        emailField.onchange = validateEmail;
        confirmEmailField.onchange = validateEmail;
        setErrorMessage(validation_message("value60000Characters"));

        function getErrorCategories(){
            return {
                "valueMissing": "Please fill out this field.",
                "value128Characters": "Please enter no more than 128 characters.",
                "confirmEmail": "Please enter the same email address again.",
                "invalidEmail": "Please enter a valid Email Address.",
                "value60000Characters": "Please enter no more than 60000 characters."
            }
        }

    }, 1000);
});