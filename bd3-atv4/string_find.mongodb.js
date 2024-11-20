const database = 'BD3-AV4-PEDRO-VASQUE';
const collection = 'Chat';

use(database);


db[collection].find({ contato: "Bruna", msg: { $regex: "alegria", $options: "i" } });
