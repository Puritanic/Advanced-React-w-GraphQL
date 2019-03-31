const { forwardTo } = require('prisma-binding');

const Query = {
    /**
     * @desc If you just want to forward a query to the exact same underlying prisma query, you can use forwardTo
     * which means that we don't have any custom logic for queries, just fetching or pushing items
     * This also means that queries are the same both on Prisma and on Yoga server
     * @see https://github.com/prisma/prisma-binding#forwardto
     */
    items: forwardTo('db'),
};

module.exports = Query;
