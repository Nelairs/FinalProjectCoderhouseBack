import minimist from 'minimist';

const   options =   {
    alias:    {
        p:'port',
        m:'mode'
    },
    default:    {
        port:   8080,
        mode:   'dev'
    },
};

const   {port, mode} =   minimist(process.argv.slice(2), options);

console.log(port);

export  {port,  mode}