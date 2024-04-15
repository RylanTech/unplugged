import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class HomepageNotes extends Model<InferAttributes<HomepageNotes>, InferCreationAttributes<HomepageNotes>> {
    declare homepageNotesId: number;
    declare homepageNotesTitle: string;
    declare homepageNotesBody: string;
}

export function HomepageNotesFactory(sequelize: Sequelize) {
    HomepageNotes.init({
        homepageNotesId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        homepageNotesTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        homepageNotesBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
            tableName: 'homepageNotes',
            sequelize,
            collate: 'utf8_general_ci',
        })
}