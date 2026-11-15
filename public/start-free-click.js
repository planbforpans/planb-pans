// Google Ads conversion "Start free click" (Ad Grants account 916-558-2142).
// Fires when a visitor clicks through from the marketing site to start for free in
// the app (/signup, /intake, /try). It gives Maximize-conversions bidding an early
// signal while "Account created" (fired in the app) is still rare. Beacon transport
// so the hit survives the navigation. Nothing about any child is sent.
(function () {
  var SEND_TO = 'AW-18556430921/CSG5COu1zbgdEMnUspBF'
  var START = /^https:\/\/app\.planbforpans\.com\/(signup|intake|try)(?:[\/?#]|$)/
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null
    if (!a || !START.test(a.href) || typeof window.gtag !== 'function') return
    window.gtag('event', 'conversion', { send_to: SEND_TO, transport_type: 'beacon' })
  }, true)
})()
