var gulp = require('gulp');
var server = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    server.init({
        server: {
            baseDir: "./",
            notify: false,
		    open: true,
		    cors: true,
		    ui: false,
			middleware: function (req, res, next) {
	            res.setHeader('Access-Control-Allow-Origin', '*');
	            next();
            }
        }
    });

	gulp.watch("*.html").on("change", server.reload);
});
