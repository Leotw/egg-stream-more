const RegistryClient = require('./registry_client');
const cluster = require('cluster-client');

module.exports = agent => {
  agent.registryClient = cluster(RegistryClient).create({});
  agent.beforeStart(async () => {
    await agent.registryClient.ready();
    agent.logger.info('registry client is ready');
  });
};
