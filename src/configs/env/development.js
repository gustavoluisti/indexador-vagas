module.exports = (app) => {
    app.set('port', 9000)
    app.set('views', path.join(__dirname, './../../views'))
    app.set('view engine', 'hbs')
}