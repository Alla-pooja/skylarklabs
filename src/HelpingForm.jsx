import React, { useEffect, useRef, useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  textfieldinput: {
    color: "white",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.7) !important",
    },
  },
  cssFocused: {
    borderColor: "rgba(255, 255, 255, 0.7) !important",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(255, 255, 255, 0.7) !important",
  },
  grid: {
    padding: "0px 10px !important",
  },
}));

// Utility functions for validation
const EmailValidation = (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
const PhoneValidation = (phone) => /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/.test(phone);

const CustomInputField = React.forwardRef(({ value, setValue, label }, ref) => {
  const classes = useStyles();
  return (
    <TextField
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label={label}
      variant="outlined"
      margin="dense"
      required
      fullWidth
      InputLabelProps={{ className: classes.cssLabel }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
        className: classes.textfieldinput,
      }}
    />
  );
});

const HelpingForm = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    lastname: "",
    contact: "",
    companyName: "",
    cntryName: "",
    businessChallenge: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkbox, setCheckbox] = useState(0);

  const refs = {
    fnameInput: useRef(null),
    lnameInput: useRef(null),
    emailInput: useRef(null),
    contactInput: useRef(null),
    companyNameInput: useRef(null),
    cntryNameInput: useRef(null),
  };

  const companyTypes = {
    0: "LAW_ENFORCEMENT",
    1: "FACTORIE",
    2: "DEFENSE",
    3: "APARTMENT_COMPEXES",
    4: "INSURANCE",
    5: "BANKS",
    6: "HOME",
    7: "HOTELS",
    8: "OTHER",
  };

  const toggleCheckbox = (index) => setCheckbox(index);

  const clearForm = () => setFormData({
    firstname: "",
    email: "",
    lastname: "",
    contact: "",
    companyName: "",
    cntryName: "",
    businessChallenge: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const { email, contact, firstname, lastname, companyName, cntryName, businessChallenge } = formData;

    if (EmailValidation(email)) {
      if (PhoneValidation(contact)) {
        const data = {
          email,
          business_phone: contact,
          phone: contact,
          first_name: firstname,
          last_name: lastname,
          company_name: companyName,
          country_name: cntryName,
          company_type: companyTypes[checkbox],
          message: businessChallenge,
        };

        setLoading(true);
        fetch("https://prodserver.skylarklabs.ai/skylarklabsblog/contact/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            clearForm();
            setLoading(false);
            toast.success("Request sent.");
          })
          .catch((err) => {
            setError("Something went wrong. Try again...");
            setLoading(false);
          });
      } else {
        toast.error("Invalid Phone Number.");
      }
    } else {
      toast.error("Invalid Email.");
    }
  };

  const handleInputChange = useCallback((key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <section ref={ref} id="contact" className="helpingwith_section modalbox-helpingwith">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="helpingwith_dis">
              <h2>Helping with security in your industry</h2>
            </div>
          </Grid>
          <Grid item xs={12}>
            <LoadingOverlay active={loading} spinner text="Sending Request...">
              <div className="helpingform">
                <form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Grid container spacing={3}>
                    {[
                      { label: "Email", key: "email", ref: refs.emailInput },
                      { label: "Enter your phone", key: "contact", ref: refs.contactInput },
                      { label: "First Name", key: "firstname", ref: refs.fnameInput },
                      { label: "Last Name", key: "lastname", ref: refs.lnameInput },
                      { label: "Company Name", key: "companyName", ref: refs.companyNameInput },
                      { label: "Country Name", key: "cntryName", ref: refs.cntryNameInput },
                    ].map(({ label, key, ref }) => (
                      <Grid item xs={12} sm={6} key={key} className={classes.grid}>
                        <CustomInputField
                          ref={ref}
                          value={formData[key]}
                          setValue={(value) => handleInputChange(key, value)}
                          label={label}
                        />
                      </Grid>
                    ))}

                    <Grid item xs={12}>
                      <div className="interested">
                        Please tell us more about what you are interested in?
                      </div>
                    </Grid>

                    {Object.keys(companyTypes).map((key) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <div className="custom_checkBox">
                          <input
                            checked={checkbox == key}
                            onChange={() => toggleCheckbox(Number(key))}
                            type="checkbox"
                            id={companyTypes[key]}
                          />
                          <label htmlFor={companyTypes[key]}>{companyTypes[key]}</label>
                        </div>
                      </Grid>
                    ))}

                    <Grid item xs={12}>
                      <div className="textarea_box">
                        <label>Tell us more about your business challenge</label>
                        <TextField
                          onChange={(e) => handleInputChange("businessChallenge", e.target.value)}
                          variant="outlined"
                          multiline
                          rows={4}
                          value={formData.businessChallenge}
                          label="Your Message"
                          required
                          fullWidth
                          InputLabelProps={{ className: classes.cssLabel }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                            },
                            className: classes.textfieldinput,
                          }}
                        />
                      </div>
                    </Grid>

                    {error && (
                      <Grid item xs={12}>
                        <p style={{ color: "red", fontSize: "14px", margin: "0px" }}>
                          {error}
                        </p>
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <button type="submit" className="btn">
                        Contact Us
                      </button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </LoadingOverlay>
          </Grid>
        </Grid>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </div>
    </section>
  );
});

export default HelpingForm;
