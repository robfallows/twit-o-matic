import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // process.env.ROOT_URL = 'http://127.0.0.1:3000';
  ServiceConfiguration.configurations.remove({
    service: 'twitter'
  });
  ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: Meteor.settings.public.twitter.consumerKey,
    secret: Meteor.settings.twitter.consumerSecret,
    loginStyle: 'popup'
  });
});
