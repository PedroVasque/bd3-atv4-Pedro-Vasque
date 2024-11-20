const database = 'BD3-AV4-PEDRO-VASQUE';

const collection = 'Chat';

use(database);

db[collection].find({ contato: "Pedro" }).sort({ data_hora: -1 });


