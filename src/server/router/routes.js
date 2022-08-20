import  log4js  from    '../log/log.config.js';
import * as dbMethods from '../DAOs/dbMethods.js'
import { Router } from 'express';


let arrayProd   =   [];



const   router  =   Router();



router.get('/productos',   (req,   res)    =>{

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    
    dbMethods.getProd()
        .then(function(v)   {
            arrayProd = [];
            arrayProd =   v; 
            res.status(200).send(arrayProd)
        })
        .catch(function(v)  {
            // console.log('error');
            const   loggerFileError  =   log4js.getLogger('fileError');
            loggerFileError.error(`Error en metodo DB`)
        });

    

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
    
});

router.get('/productos/form',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    res.status(200);
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
});

router.post('/productos',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.postProd(arrayObj)
        .then(()    =>   {
            
            res.status(200).redirect('/api/productos');
        })
        .catch(()    =>     {
            // console.log('error');
            const   loggerFileError  =   log4js.getLogger('fileError');
            loggerFileError.error(`Error en metodo DB`)


        });
    

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 
});

router.post('/productos/put',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.putProd(arrayObj);

    res.status(200).redirect('/api/productos');

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 

});

router.post('/productos/delete',    (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.deleteProd(arrayObj);

    res.status(200).redirect('/api/productos');

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 
  
});

router.get('*', (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers['access-control-request-method']

    res.status(404);
    
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    const   loggerFileWarn  =   log4js.getLogger('fileWarn');
    loggerConsole.warn(`La URL es: ${saveUrl} Tipo de peticion:  ${saveMethod}`); 
    loggerFileWarn.warn(`La URL es: ${saveUrl} Tipo de peticion:  ${saveMethod}`)

})

export default   router;