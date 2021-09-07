const pagesGenerator = require('./plop-templates/pages/prompt')
const componentsGenerator = require('./plop-templates/components/prompt')

module.exports = function (plop) {
    plop.setGenerator("pages",pagesGenerator)
    plop.setGenerator("components",componentsGenerator)
};