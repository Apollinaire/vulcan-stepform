import React, { PureComponent } from 'react';
import { intlShape } from 'meteor/vulcan:i18n';
import { registerComponent, Components } from 'meteor/vulcan:core';
import PropTypes from 'prop-types';

class StepForm extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.totalSteps = this.props.steps.length;
    this.enhancedSteps = this.enhanceSteps(this.props.steps);

    this.state = { stepNumber: 0 };
  }

  enhanceSteps(steps) {
    return steps.map((step, index) => ({
      submitLabel:
        index === this.totalSteps - 1
          ? this.context.intl.formatMessage({ id: 'forms.submit' })
          : this.context.intl.formatMessage({ id: 'forms.next' }),
      cancelLabel:
        index === 0
          ? null
          : this.context.intl.formatMessage({ id: 'forms.previous' }),
      successCallback:
        index === this.totalSteps - 1
        ? null
        : () => this.goToNext(),
      cancelCallback: index === 0
      ? null
      : () => this.goToPrev(),
      key:'step'+index,
      ...step
    }));
  }

  goToNext() {
    //callback to go to next step
    this.setState(prevState => ({
      stepNumber: prevState.stepNumber + 1
    }));
    console.log('goToNext');
  }

  goToPrev() {
    //TODO : deal with field preloading -> must pass documentId
    //callback to go to previous Step
    this.setState(prevState => ({
      stepNumber: prevState.stepNumber - 1
    }));
    console.log('goToPrev');
  }

  render() {
    var formProps = this.enhancedSteps[this.state.stepNumber];
    return (
      <div>
        <Components.SmartForm {...formProps} />
      </div>
    );
  }
}

StepForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired
};

StepForm.contextTypes = {
  intl: intlShape
};

registerComponent('StepForm', StepForm);
