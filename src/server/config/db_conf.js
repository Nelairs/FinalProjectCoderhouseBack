import  dotenv from 'dotenv';
import mongoose from 'mongoose';
import  path    from 'path';
import  {mode} from  '../utils/env.select.utils.js'

if(mode === 'prod'){
    dotenv.config({path:    path.resolve(process.cwd(), './.envprod')});
}else{
    dotenv.config({path:    path.resolve(process.cwd(), './.envdev')});
}   

dotenv.config({path:    path.resolve(process.cwd(), './.envdev')});

console.log('EL MODO ACTUAL ES:',   mode);

mongoose.connect(process.env.MONGO_URI, (err)   =>  {
    if(err){
        console.log('No se pudo conectar a MongoDB')
    }else{
        console.log('Conectado a MongoDB')
    }
});

export  default mongoose;