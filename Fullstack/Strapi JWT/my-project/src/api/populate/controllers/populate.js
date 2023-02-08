'use strict';

/**
 * A set of functions called "actions" for `populate`
 */

const {entityService} = require("@strapi/strapi").factories;

module.exports = {
  user: async (ctx, next) => {
    try {
      const data = await strapi.entityService.findMany("plugin::users-permissions.user", {
        populate: ['image', 'posts'],
        repeatableComponent: {
          populate: ['image']
        }
      })
      return data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
