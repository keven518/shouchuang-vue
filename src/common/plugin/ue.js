// in android

// scroll to active input

(function() {
  const ua = window.navigator.userAgent
  if (/Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua)) {
    window.addEventListener('resize', function() {
      if (!!document.activeElement && document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
})()

module.exports = {}
