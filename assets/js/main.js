//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="index.html" class="brand-logo"><img src="assets/images/signature.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="https://github.com/vishalbehl" target="blank">Projects</a></li>
    <!--<li><a class="white-text" href="research.html">Research</a></li>-->
        <li><a class="white-text" href="education.html">Education</a></li>
        <li><a class="white-text" href="https://medium.com/@vishalbehl17" target="blank">Blog</a></li>
        <li><a class="white-text" href="" target="_blank">My Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li>_</li>
<li>.</li>
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="https://github.com/vishalbehl">Projects</a></li>
<li><a href="research.html">Research</a></li>
<li><a href="education.html">Education</a></li>
<li><a href="index.html">Blog</a></li>
<li><a href="" target="_blank">My Resume</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-6 pt-3" >
      <div class="col-sm-12 col-md-10 ml-lg-4">
        <a class="webintern-footer-logo col-12 d-none d-md-inline-block" href="index.html">
          <center><img src="assets/images/signature.png"style="width: 220px;"/></center>
        </a>
        <div class="simple-text text-center dark padding-sm">
          <p >
            "Security is always too much untill the day it is not enough"
          </p>
        <div class="empty-space xs-25 sm-25"></div>
      </div>
    </div>
    
    <!-- Social media icons for footer -->
    
    <div>
    <div class="social-icons">

        <a class="social-icon twitter" href="https://twitter.com/vishal_behl_" target="_blank" rel="author">
            <i class="fab fa-twitter"></i>
        </a>

        <a class="social-icon facebook" href="https://www.facebook.com/people/V%C3%AFsh%C3%A3l-B%C3%A9hl/100011531447385/" target="_blank" rel="author">
            <i class="fab fa-facebook"></i>
        </a>

        <a class="social-icon linkedin" href="https://www.linkedin.com/in/vishal-behl/" target="_blank" rel="author">
            <i class="fab fa-linkedin-in"></i>
        </a>

        <a class="social-icon medium" href="https://medium.com/@vishalbehl17" target="_blank" rel="author">
            <i class="fab fa-medium-m"></i>
        </a>

        <a class="social-icon instagram" href="https://www.instagram.com/vishal_behl_?r=nametag" target="_blank" rel="author">
            <i class="fab fa-instagram"></i>
        </a>

        <a class="social-icon github" href="https://github.com/vishalbehl" target="_blank" rel="author">
            <i class="fab fa-github"></i>
        </a>

    </div>
</div>

<!--
<div class="social-icons-footer mx-lg-auto">
  <a class="social-icon-footer facebook" href="https://www.facebook.com/people/V%C3%AFsh%C3%A3l-B%C3%A9hl/100011531447385/" target="_blank" rel="author">
    <i class="fab fa-facebook"></i>
      </a>
  <a class="social-icon-footer linkedin" href="https://www.linkedin.com/in/vishal-behl/" target="_blank" rel="author">
    <i class="fab fa-linkedin-in"></i>
      </a>
  <a class="social-icon-footer twitter" href="https://www.twitter.com/in/vishal_behl_/" target="_blank" rel="author">
    <i class="fab fa-twitter"></i>
        </a>    
  <a class="social-icon-footer medium" href="https://medium.com/@vishalbehl17" target="_blank" rel="author">
    <i class="fab fa-medium-m"></i>
      </a>
  <a class="social-icon-footer instagram" href="https://www.instagram.com/vishal_behl_?r=nametag" target="_blank" rel="author">
    <i class="fab fa-instagram"></i>
      </a>
  <a class="social-icon-footer github" href="https://github.com/vishalbehl" target="_blank" rel="author">
    <i class="fab fa-github"></i>
      </a>
  </div>
-->
  <div class="col-12 text-center">
  <p><a href=" " class="col-sm-12 text-white">contact@vishalbehl.com</a></p>
  </div>

  </div>

      <div class="col-sm-6 col-md-5 pt-3 footer-2 mx-auto">

        <!-- footer_title -->
        <h4 class="webintern_footer_title h5">
          <small>Get In Touch</small>
        </h4>
        <!-- TT-SUBSCRIBE -->

      <div class="contact-form">
          <form>
              <fieldset class="form-group text-center">
                  <input type="text" class="form-control" id="inputName" placeholder="Enter Name" required>
              </fieldset>
              <fieldset class="form-group text-center">
                  <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" required>
              </fieldset>
              <fieldset class="form-group text-center">
                  <textarea class="form-control" id="Message" placeholder="Message" required></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right text-center">
                  <button type="button" class="send-btn btn btn-lg">Send</button>
              </fieldset>
          </form>
      </div>
        <div class="empty-space marg-lg-b30"></div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="tt-copy">
  <div class="container col-sm-6">
   <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
  </div>
</div> -->

</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

var checkbox = document.querySelector("input[name=theme]");
if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a);

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
}
