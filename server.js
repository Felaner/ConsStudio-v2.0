'use strict'

const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser')
// const flash = require('connect-flash');
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// const mysql = require('mysql2/promise');
// const csrf = require('csurf');

// БАЗА ДАННЫХ

// const sequelize = require('./utils/database')

// ПЕРЕПЕННЫЙ

// const varMiddleware = require('./middleware/variables');
// const userMiddleware = require('./middleware/user');
// const fileMiddleware = require('./middleware/file')
const errorHandler = require('./middleware/error');

const path = require('path');

const app = express();

// РОУТЫ

const homeRoute = require('./routes/home');
const servicesRoute = require('./routes/services');
const portfolioRoute = require('./routes/portfolio');
const contactsRoute = require('./routes/contacts');
const policyRoute = require('./routes/policy');

const landingRoute = require('./routes/services/landing');
const siteCardRoute = require('./routes/services/siteCard');
const corporateRoute = require('./routes/services/corporate');
const designRoute = require('./routes/services/design');
const storeRoute = require('./routes/services/store');
const blogRoute = require('./routes/services/blog');
const ecoSiteRoute = require('./routes/services/ecoSite');
const vitrinaRoute = require('./routes/services/vitrina');
const adaptiveDesignRoute = require('./routes/services/adaptiveDesign');
const reDesignRoute = require('./routes/services/reDesign');

const visualRoute = require('./routes/addServices/3dVisual');
const copyrightRoute = require('./routes/addServices/copyright');
const creating3dRoute = require('./routes/addServices/creating3d');
const creatingLogoRoute = require('./routes/addServices/creatingLogo');
const creatingSloganRoute = require('./routes/addServices/creatingSlogan');
const photographyRoute = require('./routes/addServices/photography');
const photomontageRoute = require('./routes/addServices/photomontage');
const videographyRoute = require('./routes/addServices/videography');

const keys = require('./keys');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: require('./utils/hbs-helpers')
});

// СЕССИЯ БАЗЫ ДАННЫХ

// const options = {
//     host: '127.0.0.1',
//     port: 3306,
//     user: keys.DATABASE_USER,
//     password: keys.DATABASE_PASS,
//     database: keys.DATABASE_NAME,
//     schema: {
//         tableName: 'sessions',
//         columnNames: {
//             session_id: 'session_id',
//             expires: 'expires',
//             data: 'data'
//         }
//     }
// };

// const connection = mysql.createPool(options);
// const sessionStore = new MySQLStore(options);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use(express.urlencoded({extended: true}));

// app.use(flash());

// НАСТРОЙКА СЕССИИ

// app.use(session({
//     key: 'session_cookie_name',
//     secret: 'session_cookie_secret',
//     store: sessionStore,
//     resave: true,
//     saveUninitialized: false,
//     path: '/',
//     cookie: {
//         maxAge: 60 * 60 * 1000
//     }
// }));

// MULTER для ЗАГРУЗКИ ФАЙЛОВ

// app.use(fileMiddleware.fields([
//     { name: 'example', maxCount: 1 },
// ]));

// app.use(userMiddleware);
// app.use(varMiddleware);

// ПОДКЛЮЧЕНИЕ РОУТОВ

app.use('/', homeRoute);
app.use('/services', servicesRoute);
app.use('/portfolio', portfolioRoute);
app.use('/contacts', contactsRoute);
app.use('/policy', policyRoute);

app.use('/landing', landingRoute);
app.use('/site-card', siteCardRoute);
app.use('/corporate', corporateRoute);
app.use('/design', designRoute);
app.use('/store', storeRoute);
app.use('/blog', blogRoute);
app.use('/eco-site', ecoSiteRoute);
app.use('/showcase', vitrinaRoute);
app.use('/adaptive-design', adaptiveDesignRoute);
app.use('/redesign', reDesignRoute);

app.use('/3D-visual', visualRoute);
app.use('/copyright', copyrightRoute);
app.use('/creating-3D-video', creating3dRoute);
app.use('/creating-logo', creatingLogoRoute);
app.use('/creating-slogan', creatingSloganRoute);
app.use('/photography', photographyRoute);
app.use('/photomontage', photomontageRoute);
app.use('/videography', videographyRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    } catch (e) {
        console.dir(e);
    }
}

start();