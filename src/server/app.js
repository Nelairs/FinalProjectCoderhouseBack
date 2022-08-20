/* eslint-disable no-undef */
import  router    from    './router/routes.js'
import express from 'express';
import  log4js  from    './log/log.config.js';
import  './config/db_conf.js';
import  {port,  mode} from  './utils/env.select.utils.js'

const app   =   express();
const __dirname =   './'

app.use(express.static( __dirname   +   '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:   true}));

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
 
app.use('/api', router);

app.get('/api',    (req,   res)    =>  {
    const   saveUrl =   req.url
    const   saveMethod  =   req.headers
    res.redirect('/api/productos')
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion: GET ${saveMethod}`);  
})

app.get('/',    (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers
    res.redirect('/api/productos')
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
})


const   server  =   app.listen(port,    ()  =>{

console.log(`Server started on http://localhost:${port}`);
});

server.on('error',  (err)   =>  console.log(err));