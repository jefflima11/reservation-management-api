const db = require('./src/config/db-connection');

(async () => {
    try {
        await db.authenticate();
        console.log('Conexão com o banco estabelecida com sucesso!');
    } catch (error) {
        console.error('Falha ao conectar com o banco:', error);
    } finally {
        await db.close();
    }
})();