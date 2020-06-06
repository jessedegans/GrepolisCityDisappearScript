var buttonSelector = document.querySelector("#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_captions_container > div.gp_page_caption.js-page-caption.js-page-caption-1 > div.gp_pc_middle");
function goafter1sec() {
    setTimeout(go, 200);
}
function go() {
    var e = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(1) > div.progressbar_bg > div > span.current"
        ),
        r = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(1) > div.progressbar_bg > div > span.max"
        ),
        a = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(2) > div.progressbar_bg > div > span.current"
        ),
        g = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(2) > div.progressbar_bg > div > span.max"
        ),
        i = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(3) > div.progressbar_bg > div > span.current"
        ),
        t = document.querySelector(
            "#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(3) > div.progressbar_bg > div > span.max"
        ),
        d = document.querySelector("#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(1)"),
        p = document.querySelector("#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(2)"),
        o = document.querySelector("#premium_exchange > div.game_border > div.gp_tab.tab_premium_exchange > div.gp_tab_page.js-page.js-page-1.game_body.active > div.resources_wrapper > div:nth-child(3)"),
        n = parseInt(r.innerText) - parseInt(e.innerText);
    n > 56 ? (console.log("hout kan!"), (d.style.backgroundColor = "green")) : (console.log("Hout te laag : " + n), (d.style.backgroundColor = "red"));
    var _ = parseInt(g.innerText) - parseInt(a.innerText);
    _ > 56 ? (console.log("Steen kan!"), (p.style.backgroundColor = "green")) : (console.log("Steen te laag : " + _), (p.style.backgroundColor = "red"));
    var c = parseInt(t.innerText) - parseInt(i.innerText);
    c > 56 ? (console.log("Zilver kan!"), (o.style.backgroundColor = "green")) : (console.log("Zilver te laag : " + c), (o.style.backgroundColor = "red"));
}
buttonSelector.addEventListener("click", goafter1sec);
