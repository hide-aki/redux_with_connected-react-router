import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";
export interface ContactFormFields {
  firstName?: string;
  lastName?: string;
  email?: string;
}
interface ContactFormStyles {
  classes: {
    layout: any;
    paper: any;
    buttons: any;
    button: any;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3
      }
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit
    }
  });

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}: any) => {
  return (
    <TextField label={label} error={touched && error} {...input} {...custom} />
  );
};
const PureContactForm: React.SFC<
  InjectedFormProps<ContactFormFields> & ContactFormStyles
> = (props: InjectedFormProps<ContactFormFields> & ContactFormStyles) => {
  const { classes, handleSubmit } = props;
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            redux-form sample
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <div>
                <Field
                  name="firstName"
                  label="firstName"
                  component={renderTextField}
                  type="text"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Field
                  name="lastName"
                  label="lastName"
                  component={renderTextField}
                  type="text"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Field
                  name="email"
                  label="email"
                  component={renderTextField}
                  type="email"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Button
                  className={classes.buttons}
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
};

export const ContactForm = reduxForm({
  form: "contact"
})(withStyles(styles)(PureContactForm));
