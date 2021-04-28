setTimeout($(function () {
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
}), 3000);
