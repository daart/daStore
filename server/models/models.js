import pkg from "sequelize";
import { sequelize } from '../db.js';

const { DataTypes } = pkg

export const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER",
    },
});

export const Cart = sequelize.define("Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export const CartItem = sequelize.define("CartItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export const Item = sequelize.define("Item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export const ItemInfo = sequelize.define("ItemInfo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "item description should be here",
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

export const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

export const Brand = sequelize.define("Brand", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

export const Rating = sequelize.define("Rating", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export const CategoryBrand = sequelize.define('CategoryBrand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Category.hasMany(Item);
Item.belongsTo(Category);

Brand.hasMany(Item);
Item.belongsTo(Brand);

Item.hasMany(Rating);
Rating.belongsTo(Item);

Item.hasMany(ItemInfo);
ItemInfo.belongsTo(Item);

Category.belongsToMany(Brand, { through: CategoryBrand});
Brand.belongsToMany(Category, { through: CategoryBrand});