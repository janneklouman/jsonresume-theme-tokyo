var fs = require("fs");
var Handlebars = require("handlebars");

function render( resume ) {

	var css = fs.readFileSync( __dirname + "/style.css", "utf-8" );
	var tpl = fs.readFileSync( __dirname + "/resume.hbs", "utf-8" );

	return Handlebars.compile( tpl )({

		css: css,
		resume: resume

	});

}

function convertDates() {

    var map = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];


}

module.exports = {
	render: render
};
