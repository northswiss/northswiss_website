fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@northswiss')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
    var res = data.items; //This is an array with the content. No feed, no info about author etc..
    var posts = res.filter(function (item) { return item.categories.length > 0; }); // That's the main trick* !
    // Functions to create a short text out of whole blog's content
    function toText(node) {
        var tag = document.createElement('div');
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    }
    function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength ?
            text.slice(startingPoint, maxLength) :
            text;
    }
    // Put things in right spots of markup
    var output = '';
    posts.forEach(function (item) {
        output += "\n         <li class=\"blog__post\">\n            <a href=\"" + item.link + "\" target=\"_blank\">\n               <div class=\"blog__content\">\n                 <h3 class=\"blog__title\">" + shortenText(item.title, 0, 100) + "</h3>\n               </div>\n            </a>\n         </li>";
    });
    document.querySelector('.blog__slider').innerHTML = output;
});
