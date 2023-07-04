function show_header() {
    var hr = "<hr>";
    var w = "<h1>whoxer</h1>"
    var header_o = "<header>";
    var header_c = "</header>";
    var home = "<li><a href='../index.html'>| home |</a></li>";
    var mstd = "<li><a href='https://mastodon.social/@wh0x3r'>| mastodon |</a></li>";
    var gith = "<li><a href='https://github.com/whoxer'>| github |</a></li>";

    document.getElementById('header').innerHTML += hr + header_o + w +
    "<nav>" + "<ul class='cabeçalho'>" + home + mstd + gith + "</ul>" +
    "</nav>" + header_c + hr;
}







/* 


    document.write(
        hr,
        "<h1>whoxer</h1>",
        header_o,
        "<nav>",
        "<ul>",
        home,
        mstd,
        gith,
        "</ul>",
        "</nav>",
        header_c,
        hr
    );
*/ 