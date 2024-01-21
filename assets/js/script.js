const Home = {
    init: () => {
        Home.events.register();
    },
    events: {
        register: () => {
            console.log("Setup events...")
            document.addEventListener('DOMContentLoaded', Home.events.bodyLoaded);
            document.querySelectorAll("nav.top-nav>ul>li").forEach((li) => {
                li.addEventListener('mouseenter', Home.events.dropdown);
        
                li.addEventListener('mouseleave', Home.events.dropdown);
            });
        },
        bodyLoaded: (ev) => {
            const body = document.querySelector('body');
            body.style.setProperty('--body-padding-bottom', `${document.querySelector('header').clientHeight}px`);
            body.style.setProperty('--body-size', `${body.clientHeight}px`);
        },
        dropdown: (ev) => {
            const target = ev.target;
            const dropdown = target.querySelector(".dropdown");
            const eventType = ev.type;
            if(dropdown != null) {
                if(eventType == "mouseenter") {
                    document.querySelector("div.backdrop").style.display = 'block';
                }else {
                    document.querySelector("div.backdrop").style.display = 'none';
                }
            }
        }
    }
};

(() => {
    Home.init();
})();


var liItems = document.querySelectorAll('li');