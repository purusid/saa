function init() {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 5000);
    }, 2000);
}

function scrolldown() {
    document.getElementById('icon-grid-container').scrollIntoView();
}

function showhide(btnElement) {
    expandElement(btnElement.parentElement.querySelector('.foldable-section-contents'), 'collapsed');
}

function expandElement(elem, collapseClass) {
    elem.style.height = '';
    elem.style.transition = 'none';

    const startHeight = window.getComputedStyle(elem).height;

    elem.classList.toggle(collapseClass);
    const height = window.getComputedStyle(elem).height;

    elem.style.height = startHeight;

    requestAnimationFrame(() => {
        elem.style.transition = '';

        requestAnimationFrame(() => {
            elem.style.height = height
        })
    })

    elem.addEventListener('transitionend', () => {
        elem.style.height = '';
        elem.removeEventListener('transitionend', arguments.callee);
    });
}

if (!"serviceWorker" in navigator) {
    console.log('no serviceworker access')
} else {
    console.log('serviceworker access')
}

/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then(reg => {
        if (reg.installing) {
            console.log('Service worker installing');
            alert('website saved to cache');
            loaction.reload();
        } else if (reg.waiting) {
            console.log('Service worker installed');
            location.reload();
        } else if (reg.active) {
            console.log('Service worker active');
        }
    }).catch(function (error) {
        console.log('Registration failed with ' + error)
    });
}*/
