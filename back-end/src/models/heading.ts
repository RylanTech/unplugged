import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class SubHeading extends Model<InferAttributes<SubHeading>, InferCreationAttributes<SubHeading>> {
    declare subheadingId: number;
    declare subheading: string;
}

export function subheadingFactory(sequelize: Sequelize) {
    SubHeading.init({
        subheadingId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subheading: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
            tableName: 'subheading',
            sequelize,
            collate: 'utf8_general_ci',
        })
}