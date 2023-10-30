function run() {
    let htmlCode = document.getElementById
    ("html_code");
    let cssCode = document.getElementById
    ("css_code");
    let jsCode = document.getElementById("js_code");

    let output = document.getElementById("output");

   output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value +"</style>";
   output.contentWindow.eval(jsCode.value);
}