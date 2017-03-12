"use strict"

window.addEventListener('DOMContentLoaded', main)

function main() {
  
  // Initiate counter
  var counters = document.querySelectorAll('[data-counter]')
  counters.forEach(function(el, index) {
    var endValue = el.innerHTML
    var suffix = el.getAttribute("data-counter-suffix")

    var options = {}
    if (suffix) { options['suffix'] = suffix }

    var anim = new CountUp(el, 0, endValue, 0, 2, options)
    anim.start()
  })

}