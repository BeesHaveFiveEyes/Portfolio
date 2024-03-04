$(".navigation-menu").html(
    `<div class="text">        
        <a href="index.html" class="website-title">Alasdair Casperd</a>        
        <div class="navigation-hierarchy">
            <a href="index.html">Alasdair Casperd</a>
            <span class="icon" style="font-size: 0.1em"><span class="material-symbols-outlined">chevron_right</span></span>
            <p>${$("title").html()}</p>
        </div>        
        <div class="link-group">            
            <a href="index.html">Featured</a>
            <a href="index.html?scroll-to=iOS_Apps">Apps</a>
            <a href="web-design.html">Web Design</a>
            <!-- <a href="index.html?scroll-to=Other_Projects">Other</a> -->
            <a href="mailto:hello@alasdaircasperd.com?subject=Contact">Contact</a>   
        </div>                          
    </div>`
)

$(document).scroll(function () {
    $('.full-width-navigation-menu').each(function () {        
        if($(document).scrollTop() > 10) {
            $(this).css("background-color", "var(--nav-background");
            $(this).css("opacity", "100%");
            $(this).addClass("underlined");
            // $("body").get(0).style.setProperty("--nav-background", "hotpink");
        }
        else {
            $(this).css("background-color", "transparent");
            $(this).css("opacity", "40%");
            $(this).removeClass("underlined");
        }
    });
});