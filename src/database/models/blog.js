'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    body: DataTypes.TEXT,
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    time: DataTypes.STRING
  }, {});
  blog.associate = function(models) {
    // associations can be defined here
  };
  return blog;
};