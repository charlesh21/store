var ECSWV = {
    head: null,
    addCSS: function (css) {
        var style = document.createElement('style');
        if (! this.head) {
            this.head = document.getElementsByTagName('head')[0];
        }
        style.innerHTML = css;
        this.head.appendChild(style);
        this.fixWidth();
        this.fixApp();
        setTimeout(function () {
            ECSWV.sendMSG('cssReady');
        }, 100);
        return true;
    },
    fixWidth: function () {
        var vp = document.querySelector('meta[name=viewport]');
        // Do not fix page scale and width when in these sites
        if (location.host === 'tw.user.mall.yahoo.com') {
            return;
        }

        if (location.href === 'about:blank') {
            return;
        }

        /*
        if (location.pathname.indexOf('/productdetail/') == 0) {
            return;
        }
         */

        if (!vp) {
            document.getElementsByTagName('html')[0].className += ' ECSWVPC';
            vp = document.createElement('meta');
            vp.setAttribute('name', 'viewport');
            vp.setAttribute('content', 'width=device-width,initial-scale=1');
            this.head.appendChild(vp);
        }
    },
    fixApp: function () {
        var appid = document.querySelector('#checkoutForm input[name=appid]');

        if (appid) {
            try {
                appid.value = '1';
            } catch(e) {
            }
        }
    },
    updateCart: function () {
        this.sendMSG('updateCart');
    },
    sendMSG: function (msg) {
        location.href = 'ecstorewebview://' + msg;
    }
}

try {
    document.getElementsByTagName('html')[0].className += ' ECSWV';
    window.onload = function () {
        ECSWV.sendMSG('domReady');
    }
} catch (E) {
    ECSWV.sendMSG('noDomReadyError');
}
