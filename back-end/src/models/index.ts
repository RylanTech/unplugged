import { Sequelize } from "sequelize";
import 'dotenv/config'
import { userFactory } from "./user";
import { subheadingFactory } from "./heading";
import { HomepageNotesFactory } from "./homepageNotes";
import { HeadingImageFactory } from "./headingImage";

const dbName = process.env.DB_NAME || '';
const username = process.env.DB_USER || '';
const password = process.env.DB_PASS || '';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

userFactory(sequelize);
subheadingFactory(sequelize)
HomepageNotesFactory(sequelize)
HeadingImageFactory(sequelize)

export const db = sequelize;