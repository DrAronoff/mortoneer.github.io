jQuery((function(t){var o=document.location.search.match(/title=([^&]+)?/),e=document.location.search.match(/item=([^&]+)?/);o=o&&o[1],e=e&&e[1],o=o&&decodeURIComponent(o),e=e&&decodeURIComponent(e);var a="data-mortoneer-form-load";t("[".concat(a,"]")).each((function(c,n){var m=t(n),r=m.attr(a);jQuery.get(r,"html").then((function(t){m.html(t),o&&e&&m.find("#item-list").append("".concat(o," ").concat(e)),m.addClass("form-vertical")}))}))}));