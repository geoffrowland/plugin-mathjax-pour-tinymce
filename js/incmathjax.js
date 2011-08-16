(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "http://cdn.mathjax.org/mathjax/latest/MathJax.js";

  var config = 'MathJax.Hub.Config({' +
                 'tex2jax: {inlineMath: [ ["$","$"], ["\\(","\\)"] ], displayMath: [ ["$$","$$"], ["\\[","\\]"] ]},'+
                 'extensions: ["tex2jax.js"],' +
                 'jax: ["input/TeX","output/HTML-CSS"]' +
               '});' +
               'MathJax.Hub.Startup.onload();';

  if (window.opera) {script.innerHTML = config}
               else {script.text = config}

  document.getElementsByTagName("head")[0].appendChild(script);
})();
