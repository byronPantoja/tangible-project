;(window.wpJsonpTemplateSections = window.wpJsonpTemplateSections || []).push([
  [18],
  {
    998: function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e(8)
      e(0),
        (t.default = function (n) {
          new Promise(function (n, t) {
            window.addEventListener('load', function () {
              n()
            })
          }).then(function () {
            var t = Object(i.a)(window, 'Y.Squarespace.Singletons.ShoppingCart', null)
            t &&
              (t.on('item-added', function (t) {
                n.classList.remove('hidden')
              }),
              t.after('load', function (t) {
                t.target.get('totalQuantity') > 0 && n.classList.remove('hidden')
              }))
          })
        })
    },
  },
])
