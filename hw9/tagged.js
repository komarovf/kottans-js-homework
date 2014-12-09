console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
function html(args, a, b) {
    var r = (s) => s.replace("&", "&amp;")
                    .replace("'", "&#39;")
                    .replace('"', "&quot;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;");
                    
    return args[0]+r(a)+args[1]+r(b)+args[2];
}