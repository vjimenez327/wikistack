var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    urlTitle: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

module.exports = {
  Page: Page,
  User: User
};
