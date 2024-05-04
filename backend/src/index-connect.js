import servidor from './resvidor'

// llamado a mi servidor
const main = () => {
    servidor.listen(servidor.get('port'));
    console.log(`Se abrio mi servidor desde el puerto ${servidor.get('port')}`)
};

main();