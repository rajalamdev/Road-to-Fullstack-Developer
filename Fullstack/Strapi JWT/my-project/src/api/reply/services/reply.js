'use strict';

/**
 * reply service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reply.reply');
