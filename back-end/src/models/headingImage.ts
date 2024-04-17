import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class HeadingImage extends Model<InferAttributes<HeadingImage>, InferCreationAttributes<HeadingImage>> {
    declare headingImageId: number;
    declare headingImage: string;
}

export function HeadingImageFactory(sequelize: Sequelize) {
    HeadingImage.init({
        headingImageId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        headingImage: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
            tableName: 'headingImage',
            sequelize,
            collate: 'utf8_general_ci',
        })
}