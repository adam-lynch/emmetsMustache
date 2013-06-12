/**
 * emmetsMustache v0.01 https://github.com/adam-lynch/emmetsMustache
 * @author adam-lynch
 */

var emmetsMustache = new function(){
    emmet.require('textarea').setup();

    this.render = function(abbreviatedTemplate, model){
        return Mustache.render(emmet.expandAbbreviation( abbreviatedTemplate, {html: 'xhtml'} ), model);
    };

};