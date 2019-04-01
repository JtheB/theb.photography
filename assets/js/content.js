let blogContent = document.getElementById("main");
let blogData = "";
for (let c = data.length; c > 0; c--) {
    blogData += "<article class=\"thumb\">\n" +
        `    <a href=\"images/fulls/${c}.jpg\" class=\"image\"><img src=\"images/thumbs/${c}.jpg\" alt=\"\" /></a>\n` +
        `    <h2>${data[c - 1].title}</h2>\n` +
        `    <p>${data[c - 1].subtitle}</p>\n` +
        "</article>";
}
blogContent.innerHTML = blogData.toString();

/* Reference HTML Snippet
<article class="thumb">
    <a href="images/fulls/01.jpg" class="image"><img src="images/thumbs/01.jpg" alt="" /></a>
    <h2>Magna feugiat lorem</h2>
    <p>Nunc blandit nisi ligula magna sodales lectus elementum non.</p>
</article>
 */
