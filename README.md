# Materialize 1.0.0 - CSS and JavaScript (no jQuery)

Materialize 1.0.0 with JS (no jQuery). A walkthrough of features and a demo website. Based on Shaun Pelling's (The Net Ninja) walkthrough on YouTube. Shaun uses jQuery, I've relied on the Materialize 1.0.0 website documentation to only use JavaScript to initialise the functions. No need to load the jQuery framework.

[Materialize CSS 1.0.0 Website](https://materializecss.com/)

[Shaun Pelling (Net Ninja): Materialize 1.0.0 Walkthrough on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gGrbtvASEZSlFEYBnPkmff)

[Shaun Pelling (Net Ninja): Materialize 1.0.0 on GitHub](https://github.com/iamshaunjp/materialize-playlist)

## </> 'photo-ninja.html' by Shaun Pelling

[</> - photo-ninja.html](https://github.com/NaoiseGaffney/Materialize1.0.0/blob/master/assets/templates/photo-ninja.html)

* [i]: Using FontAwesome for the navigation icons. Using Google Font Icons for all other icons.
* .css{}: load `materialize.css` before my `photo-style.css`. I've downloaded the Materilize CSS 1.0.0, though a CDN can be used instead,

```
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

```
<head>
    ...
    <!-- font awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" type="text/css" href="/assets/styles/materialize.css">
    <link rel="stylesheet" type="text/css" href="/assets/styles/photo-style.css">
    <title>Photo Ninja</title>
</head>
```

* (Js): load `materialize.js` before my `photoMaterialze.js` (placed all Materialize CSS 1.0.0 JavaScript initialisation functions in this separate file, as opposed to having it in-line HTML). I've downloaded the Materialize JS, though a CDN can be used instead,

```
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

```
    ...
    <script type="text/javascript" src="/assets/scripts/materialize.js"></script>
    <script type="text/javascript" src="/assets/scripts/photoMaterialize.js"></script>
</body>
```

### Main Functions

* Navigation Bar for desktops/laptops and mobile devices (hamburger-menu).
* Photo Grid for photos and text, added `data-caption="..."` too.
* Parallax 1, street image.
* Services Tabs.
* Parallax 2, stars image.
* Contact Form with e-mail, message, and datepicker.
* Footer

```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- font awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" type="text/css" href="/assets/styles/materialize.css">
    <link rel="stylesheet" type="text/css" href="/assets/styles/photo-style.css">
    <title>Photo Ninja</title>
</head>

<body>

    <!-- navbar -->
    <header>
        <nav class="nav-wrapper transparent">
            <div class="container">
                <a href="https://ptd--gaffco.repl.co/index.html" target="_blank" class="brand-logo"><img
                        src="/assets/images/GaffCo - Background.png" height="55"></a>
                <a href="#" class="sidenav-trigger" data-target="mobile-links"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#photos">Photo's</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom"
                            data-tooltip="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a></li>
                    <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom"
                            data-tooltip="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a></li>
                    <li><a href="#" class="tooltipped btn-floating btn-small indigo darken-4" data-position="bottom"
                            data-tooltip="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a></li>
                </ul>
            </div>
        </nav>
        <!-- Nav for Mobile devices using the Hamburger-menu must be defined outside of <nav></nav> to work. -->
        <ul class="sidenav grey lighten-2" id="mobile-links">
            <li><a href="#">Photo's</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
    <!-- photo / grid -->
    <section class="container section scrollspy" id="photos">
        <div class="row">
            <div class="col s12 l4">
                <img src="/assets/images/portrait.jpg" alt="portrait" class="responsive-img materialboxed"
                    data-caption="A picture of a rapper.">
            </div>
            <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Portraits</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 l4 offset-l1 push-l7">
                <img src="/assets/images/city.jpg" alt="" class="responsive-img materialboxed"
                    data-caption="A picture of a cityscape.">
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
                <h2 class="indigo-text text-darken-4">Cityscapes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 l4">
                <img src="/assets/images/nature.jpg" alt="nature" class="responsive-img materialboxed"
                    data-caption="A picture of a tropical fish.">
            </div>
            <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Nature</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
            </div>
        </div>
    </section>

    <!-- parallax -->
    <div class="parallax-container">
        <div class="parallax">
            <img src="/assets/images/street.jpg" alt="stars" class="responsive-img">
        </div>
    </div>

    <!-- services / tabs -->
    <section class="section container scrollspy" id="services">
        <div class="row">
            <div class="col s12 l4">
                <h2 class="indigo-text text-darken-4">What I do...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
                <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
                    vitae
                    scelerisque erat ornare nec.</p>
            </div>
            <div class="col s12 l6 offset-l2">
                <!-- tabs -->
                <ul class="tabs">
                    <li class="tab col s6">
                        <a href="#photography" class="active indigo-text text-darken-4">Photography</a>
                    </li>
                    <li class="tab col s6">
                        <a href="#editing" class="indigo-text text-darken-4">Editing</a>
                    </li>
                </ul>
                <div id="photography" class="col s12">
                    <p class="flow-text indigo-text text-darken-4">Photography</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit
                        elit
                        nec, tincidunt orci.</p>
                    <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida
                        urna,
                        vitae scelerisque erat ornare nec.</p>
                </div>
                <div id="editing" class="col s12">
                    <p class="flow-text indigo-text text-darken-4">Editing</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit
                        elit
                        nec, tincidunt orci.</p>
                    <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida
                        urna,
                        vitae scelerisque erat ornare nec.</p>
                </div>
            </div>
        </div>
        </div>
    </section>

    <!-- parallax -->
    <div class="parallax-container">
        <div class="parallax">
            <img src="/assets/images/stars.jpg" alt="stars" class="responsive-img">
        </div>
    </div>


    <!-- contact form -->
    <section class="section container scrollspy" id="contact">
        <div class="row">
            <div class="col s12 l5">
                <h2 class="indigo-text text-darken-4">Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
                <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
                    vitae
                    scelerisque erat ornare nec.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
                    nec,
                    tincidunt orci.</p>
                <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
                    vitae
                    scelerisque erat ornare nec.</p>
            </div>
            <div class="col s12 l5 offset-l2">
                <form>
                    <div class="input-field">
                        <i class="material-icons prefix">email</i>
                        <input type="email" id="email">
                        <label for="email">Your Email</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">message</i>
                        <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">date_range</i>
                        <input type="text" id="date" class="datepicker">
                        <label for="date">Choose a date you need me for...</label>
                    </div>
                    <div class="input-field">
                        <p>Services required:</p>
                        <p>
                            <label>
                                <input type="checkbox">
                                <span>Photography</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox">
                                <span>Photo Editing</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field center">
                        <button class="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- footer -->
    <footer class="page-footer grey darken-3">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5>About Me</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit
                        elit
                        nec, tincidunt orci.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Connect</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="#">Facebook</a></li>
                        <li><a class="grey-text text-lighten-3" href="#">Twitter</a></li>
                        <li><a class="grey-text text-lighten-3" href="#">Linked In</a></li>
                        <li><a class="grey-text text-lighten-3" href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright grey darken-4">
            <div class="container center-align">&copy; 2018 Photo Ninja</div>
        </div>
    </footer>
    <!-- Compiled and minified JavaScript -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script> -->
    <script type="text/javascript" src="/assets/scripts/materialize.js"></script>
    <script type="text/javascript" src="/assets/scripts/photoMaterialize.js"></script>
</body>

</html>
```

## .css{} 'style.css' to Modify the Materialize CSS

[.css{} - photo-style.css](https://github.com/NaoiseGaffney/Materialize1.0.0/blob/master/assets/styles/photo-style.css)

For some reason the SpyScrolling is "jerky" which is why I've set the `html {
    scroll-behavior: smooth;
}` and ` let instanceScrollspy = M.ScrollSpy.init(elemsScrollspy, {
        throttle: 10
    });`.
    
To modify the colour of the 'DatePicker', the `!important` attributes must be used, or these modifications will be overridden.

```
/* Photo Ninja */

* {
    margin: 0;
    padding: 0;
}

/* Smooth scrolling when using Materialize ScrollSpy, though this applies to all scrolling. ScrollSpy 'throttle' is set to 10 too. */
html {
    scroll-behavior: smooth;
}

header {
    content: '';
    background: url("/assets/images/man.jpg");
    /* --- Broke out the background: elements to test/ensure they worked as planned. Also adds clarity. Added support for different browsers. --- */
    background-size: cover;
    background-position: center;
    min-height: 1000px;
}

nav>div>a {
    margin-top: 3px;
}

.sidenav {
    width: fit-content;
}

.section {
    padding-top: 4vw;
    padding-bottom: 4vw;
}

.tabs .indicator {
    background-color: rgb(26, 35, 126);
}

.tabs .tab a:focus,
.tabs .tab a:focus.active {
    background: transparent;
}

/* Date Display */
.datepicker-date-display {
    background-color: rgb(26, 35, 126);
}

.datepicker-day-button:focus {
    color: white !important;
    background-color: rgb(26, 35, 126);
}

.datepicker-done,
.datepicker-cancel,
.select-dropdown li>span,
.is-today {
    color: rgb(26, 35, 126) !important
}

td.is-selected,
.month-prev:active,
.month-prev:focus,
.month-next:active,
.month-next:focus {
    background-color: rgb(26, 35, 126) !important
}

td.is-selected.is-today {
    color: rgb(255, 255, 255) !important
}

@media screen and (max-width: 670px) {
    header {
        min-height: 500px;
    }
}
```

## (Js) 'photoMaterialize.js' to Initialise the Materialize Functions

[(Js) - photoMaterialize.js](https://github.com/NaoiseGaffney/Materialize1.0.0/blob/master/assets/scripts/photoMaterialize.js)

To initialise the Materialize CSS functions these JavaScript statements are used. If using default values, no options, `M.AutoInit()` can be used. `document.addEventListener("DOMContentLoaded", () => {
    /* M.AutoInit() });`. If options are required, don't use `M.AutoInit()`, use separate statements for each function, for example:
    
```
let elemsDatepicker = document.querySelectorAll(".datepicker");
    let instanceDatepicker = M.Datepicker.init(elemsDatepicker, {
        disableWeekends: true,
        yearRange: 3
    });
```
If not using `M.AutoInit()`, and not defining `options` for a function, remove `options` as a parameter for the function.

```
document.addEventListener("DOMContentLoaded", () => {
    /* M.AutoInit() */ /* Can't pass in options with M.AutoInit(), only use default values */
    
    let elemsSidenav = document.querySelectorAll(".sidenav");
    let instancesSidenav = M.Sidenav.init(elemsSidenav); // Remove "options" from (elems, options)
    let elemsMaterialboxed = document.querySelectorAll(".materialboxed");
    let instancesMaterialboxed = M.Materialbox.init(elemsMaterialboxed); // Remove "options" from (elems, options)
    let elemsParallax = document.querySelectorAll(".parallax");
    let instancesParallax = M.Parallax.init(elemsParallax); // Remove "options" from (elems, options)
    let elemsTabs = document.querySelectorAll(".tabs");
    let instanceTabs = M.Tabs.init(elemsTabs);
    let elemsTooltip = document.querySelectorAll(".tooltipped");
    let instanceTooltip = M.Tooltip.init(elemsTooltip);
    let elemsScrollspy = document.querySelectorAll(".scrollspy");
    let instanceScrollspy = M.ScrollSpy.init(elemsScrollspy, {
        throttle: 10
    });
    let elemsDatepicker = document.querySelectorAll(".datepicker");
    let instanceDatepicker = M.Datepicker.init(elemsDatepicker, {
        disableWeekends: true,
        yearRange: 3
    });
    let elemsModal = document.querySelectorAll(".modal");
    let instancesModal = M.Modal.init(elemsModal, {
        dismissible: false,
        inDuration: "200"
    });
});
```