# Materialize 1.0.0 - CSS and JavaScript (no jQuery)

Materialize 1.0.0 with JS (no jQuery). A walkthrough of features and a demo website. Based on Shaun Pelling's (The Net Ninja) walkthrough on YouTube. Shaun uses jQuery, I've relied on the Materialize 1.0.0 website documentation to only use JavaScript to initialise the functions. No need to load the jQuery framework.

[Materialize CSS 1.0.0 Website](https://materializecss.com/)

[Shaun Pelling (Net Ninja): Materialize 1.0.0 Walkthrough on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gGrbtvASEZSlFEYBnPkmff)

[Shaun Pelling (Net Ninja): Materialize 1.0.0 on GitHub](https://github.com/iamshaunjp/materialize-playlist)


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