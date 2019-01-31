const axios = require('axios');
//select tag from html for svg
const USER_NAME = 'fireinjun'
const svMainRX = /^<svg(.|\n|\r)+?.*\/svg>/gmi
//select text to remove x and y formatting titles
const textTagRX = /<text(.|\n|\r)+?\/text>/g
// select svg tag for xmlns
const svTagRX = /^<svg.?/
// Where we're querying for the data
const API=`https://github.com/users/${USER_NAME}/contributions`
// Add this so SVG is renderable
const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" '


const test = () => {
  axios
    .get(API)
    .then(res => {
      if (res.status === 200) {
        let rawData = res.data
        let sortedData = rawData.match(svMainRX).toString();
        let finalImg = sortedData.replace(svTagRX, svgStr).replace(textTagRX,'').trim()
        // let removeText = addTag
        console.log(finalImg);
        return finalImg
       }
      return rem;
    })
    .catch(err => {
      console.error(err);
    });
};
test();
// 'li[class=orange]'
// const html = '<h3 class="title">I have a bunch of questions on how to behave when contributing to open source</h3>'
// const h3 = cheerio.load(html)
// console.log(h3.text())

// .remove( [''] )
