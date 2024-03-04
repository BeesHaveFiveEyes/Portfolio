
// Scroll to element by ID

function scrollToSection(elementID) {
    if ($(`#${elementID}`).offset() != null) {
        $('html, body').animate({
            scrollTop: $(`#${elementID}`).offset().top - 60
        }, 300);
    }    
}

// Read URL Parameters

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

// Scroll on load

const target = getUrlParameter('scroll-to');

if (target != null)
{
    scrollToSection(scrollTarget);
}