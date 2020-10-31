const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'https://cheerio.js.org/'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    $generator = $('meta[name="generator"]').attr('content');
    $desc = $('meta[name="description"]').attr('content');
    $kwd = $('meta[name="keywords"]').attr('content');
    $ogTitle = $('meta[property="og:title"]').attr('content');
    $oglocale = $('meta[property="og:locale"]').attr('content');
    $ogDescription = $('meta[property="og:description"]').attr('content');
    $ogSiteName = $('meta[property="og:site_name"]').attr('content');

    console.log('Meta tag Property : Value');
    console.log('Desc: '+$desc);
    console.log('generator: '+$generator);
    console.log('ogTitle: '+$ogTitle);
    console.log('oglocale: '+$oglocale);
    console.log('ogDescription: '+$ogDescription);
    console.log('ogSiteName: '+$ogSiteName);
});