import React from 'react';
import {
  registerComponent,
  Components,
  getFragment,
  getCollection,
  withCurrentUser
} from 'meteor/vulcan:core';

import Users from 'meteor/vulcan:users';
import { collection as Projects } from 'meteor/lfg-projects';

const FormUser = props => {
  const step0 = {
    collection: Users,
    fields: [
      '_id',
      'createdAt',
      'firstName',
      'lastName',
      'birthDate',
      'email',
      'title',
      'phoneNumber',
      'status'
    ],
    documentId: props.currentUser._id
  };

  const step1 = {
    collection: Projects,
    fields: [
      '_id',
      'userId',
      'slug',
      'displayName',
      'details',
      'iteration',
      'motto'
    ]
  };

  const steps = [step0, step1];

  return <Components.StepForm steps={steps} />;
};

registerComponent('FormUser', FormUser, withCurrentUser);
