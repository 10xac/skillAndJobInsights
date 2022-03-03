'use strict';

/**
 * data-graph service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-graph.data-graph');
