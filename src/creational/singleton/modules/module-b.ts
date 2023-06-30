import { MyDatabaseClassic } from '../db/my-database-classic';
import './module-a';

const db = MyDatabaseClassic.instance;

db.add({ name: 'João', age: 24 });
db.add({ name: 'Pedro', age: 26 });
db.add({ name: 'Tiago', age: 32 });
db.add({ name: 'Luci', age: 56 });

db.show();
