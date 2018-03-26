vulcan-stepform package, creates a StepForm Vulcan component: `<Components.StepForm ... />`

Tested with Vulcan 1.8.9.

See form.jsx for an example of using the component

Props: the main prop is a `steps` prop containing an array of SmartForm props. See the [vulcan docs](http://docs.vulcanjs.org/forms.html) for SmartForm props.

Currently, the following props will be overwritten:

- `successCallback` except for the last step, to allow for redirection once the form submitted
- `submitLabel`
- `cancelCallback`
- `cancelLabel`

It's planned to implement a version that is not overwriting those props, when i have the time, and if some people use this package.
