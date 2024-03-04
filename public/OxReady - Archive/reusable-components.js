
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <nav class="menu-bar">
            <a href="oxready.html">
                <img src="Graphics/oxready-logo-white.png" alt="OxReady">
            </a>                
            <!-- Menu items -->
            <div class="menu-bar-links">
                <a href="oxready.html#why-oxready" class="hide-below-921">About</a>
                <a href="tutors.html" class="hide-below-921">Our Tutors</a>
                <a href="oxready.html#booking-form" class="button hide-below-550">Book an Interview</a>
            </div>
        </nav> 
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer class="footer">
            <div class="footer-content">
                <div class="logo-display">
                    <a href="#" class="footer-logo-a">
                        <img src="Graphics/oxready-logo-white.png" alt="OxReady" class="footer-logo">
                    </a>                
                    <p class="caption footer-long footer-medium">Oxbridge Admissions Preparation,<br/>from Current Oxbridge Students.</p>
                    <a href="mailto:inquiries@oxready.co.uk" class="email footer-short">inquiries@oxready.co.uk</a>                                
                    <div class="social-icons">                                            
                            <a href="https://twitter.com/oxready_tutors"><img src="Graphics/twitter-icon.png" alt=""></a>
                            <a href="https://instagram.com/oxready"><img src="Graphics/instagram-icon.png" alt=""></a>
                            <a href="https://www.facebook.com/oxready"><img src="Graphics/facebook-icon.png" alt=""></a>
                        </div>    
                    <p class="credit footer-long footer-medium">Website design by Alasdair Casperd, 2022</p>                
                </div>
                <div class="footer-categories">
                    <div class="footer-category">
                        <h1 class="footer-long">About Us</h1>
                        <h1 class="footer-medium">About</h1>
                        <div class="footer-links">
                            <a href="oxready.html#why-oxready" class="footer-long">Why Oxready?</a>
                            <a href="oxready.html#prices-section"1>Our Prices</a>
                            <a href="tutors.html">Our Tutors</a>
                            <a href="https://forms.gle/RBYh9huLtCWA5CBR8" class="footer-medium footer-short footer-tiny">Leave a Review</a>                        
                        </div>
                    </div>        
                    <div class="footer-category footer-long footer-medium">
                        <h1 class="footer-long">Social Media</h1>
                        <h1 class="footer-medium footer-short footer-tiny">Social</h1>
                        <div class="footer-links">
                            <a href="https://instagram.com/oxready">Instagram</a>
                            <a href="https://twitter.com/oxready_tutors">Twitter</a>
                            <a href="https://www.facebook.com/oxready">Facebook</a>                            
                        </div>
                    </div>   
                    <div class="footer-category footer-long footer-medium">
                        <h1>Contact</h1>
                        <div class="footer-links">
                            <a href="mailto:inquiries@oxready.co.uk">inquiries@oxready.co.uk</a>
                            <a href="https://forms.gle/RBYh9huLtCWA5CBR8">Leave a Review</a>                        
                        </div>
                    </div>        
                </div>
            </div>
        </footer>   
        `;
    }
}

customElements.define('oxready-footer', Footer)
customElements.define('oxready-header', Header)