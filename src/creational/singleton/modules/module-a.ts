import { MyDatabaseClassic } from '../db/my-database-classic';

const db = MyDatabaseClassic.instance;

db.add({ name: 'Eliel', age: 24 });
db.add({ name: 'Daniel', age: 26 });
db.add({ name: 'Rafael', age: 32 });
db.add({ name: 'Samuel', age: 56 });
