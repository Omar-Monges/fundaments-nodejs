const gulp = require('gulp')
const server = require('browser-sync')
gulp.task('build', (cb) => {
    console.log('Building web site')
    setTimeout(cb, 1200)
    // cb()
})

gulp.task('serve', () => {
    server.init({
        server: './www',
        port: 8000,
    })
    gulp.watch('www/*.html').on('change', server.reload)
})