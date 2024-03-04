
// Create sidebar

$('.section').each(function() {        
    const sectionID = $(this).attr('id')    
    $(".sidebar-contents").append($('<div></div>')
        .attr({ class : "sidebar-link" })
        .attr({ id : sectionID })
        .text(`${$(this).attr('id')}`.replaceAll("_", " "))
        .click(function(){
            scrollToSection(sectionID)
        })
    )       
});

// Scroll to section

function scrollToSection(sectionID) {
    if ($(`#${sectionID}.section`).offset() != null) {
        $('html, body').animate({
            scrollTop: $(`#${sectionID}.section`).offset().top - 60
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

// Handle scrolling

$(document).scroll(function () {    
    highlightCurrentSection();
    manageSidebarFooterOffset();
});

// Highlight the current section in the sidebar

function highlightCurrentSection() {
    
    var currentSection;

    $('.section').each(function () {
        // if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        if($(this).position().top >= $(document).scrollTop()) {
            if (currentSection == null) {
                currentSection = $(this);
            }            
        }
    });

    $(".sidebar-contents").children(".sidebar-link").each(function() {
        if ($(this).attr('id') == currentSection.attr('id')) {
            $(this).addClass('active');
            $(this).css("font-weight", 600);
        }
        else {
            $(this).removeClass('active');
            $(this).css("font-weight", 200);
        }
    })
}

// Offset siderbar position to account for footer

function manageSidebarFooterOffset() {

    var scrollPosition = window.scrollY + window.innerHeight;
    var footerTopPosition = $('.footer').offset().top;

    console.log(footerTopPosition - scrollPosition);

    if (scrollPosition > footerTopPosition) {
        $(".sidebar-contents").css("top",  `${120 + footerTopPosition - scrollPosition}px`);        
    }
    else {
        $(".sidebar-contents").css("top", "120px");        
    }
}


// Scroll on load

const scrollTarget = getUrlParameter('scroll-to');

if (scrollTarget != null)
{
    scrollToSection(scrollTarget);
}

// Highlight the current section on load

highlightCurrentSection();