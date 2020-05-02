import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamFrom extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui erorr message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // renderInput(formProps) {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form className="form ui error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "StreamFrom",// purpose of this form
  // initialValues 
})(StreamFrom); // immediately invoke the reduxForm function use StreamCreate as an argment
