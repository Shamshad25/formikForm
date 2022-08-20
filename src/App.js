import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "./App.css";

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [details, setDetails] = useState([]);

  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            dob: "",
            sex: "",
            mobile: "",
            gov: "",
            govId: "",
            guardian: "",
            guardianName: "",
            email: "",
            emergency: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            occupation: "",
            religion: "",
            marital: "",
            blood: "",
            nationality: "",
          }}
          onSubmit={(values) => {
            console.log("This is submit", values);
            setDetails(values);
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <h3 style={{ marginBottom: "20px" }}>Personal Details</h3>
            <div className="section-main">
              <label htmlFor="firstName">Name</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="Enter Name"
                style={{
                  padding: "5px",
                  width: "450px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />

              <label htmlFor="dob">Date of Birth or Age</label>
              <Field
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy or Age in Years"
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  width: "350px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />

              <label htmlFor="sex">Sex</label>
              <Field
                as="select"
                name="sex"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>

              <label htmlFor="mobile">Mobile</label>
              <Field
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile"
                style={{
                  padding: "5px",
                  width: "300px",
                  borderRadius: "5px",
                  marginRight: "180px",
                  marginBottom: "20px",
                }}
              />

              <label htmlFor="gov">Govt. issued ID</label>
              <Field
                as="select"
                name="gov"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "5px",
                  marginLeft: "30px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Select Govt ID</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="Voter">Voter Card</option>
              </Field>
              <Field
                id="govId"
                name="govId"
                placeholder="Enter Govt ID"
                style={{
                  padding: "5px",
                  width: "450px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <h3 style={{ marginBottom: "20px" }}>Contact Details</h3>
            <div className="contact">
              <label htmlFor="guardian">Guardians Details</label>
              <Field
                as="select"
                name="guardian"
                style={{
                  width: "100px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Enter Label</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
              </Field>
              <Field
                id="guardianName"
                name="guardianName"
                placeholder="Enter Guardian Name"
                style={{
                  padding: "5px",
                  width: "200px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter you email"
                style={{
                  padding: "5px",
                  width: "250px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
              <label htmlFor="emergency">Emergency Contact Number</label>
              <Field
                id="emergency"
                name="emergency"
                placeholder="Enter Emergency no"
                style={{
                  padding: "5px",
                  width: "300px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <h3 style={{ marginBottom: "20px" }}>Address Details</h3>
            <div className="address">
              <label htmlFor="address">Address</label>
              <Field
                id="address"
                name="address"
                placeholder="Enter Address"
                style={{
                  padding: "5px",
                  width: "350px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
              <label htmlFor="state">State</label>
              <Field
                as="select"
                name="state"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Enter state</option>
                <option value="WestBengal">West Bengal</option>
                <option value="Bihar">Bihar</option>
              </Field>

              <label htmlFor="city">City</label>
              <Field
                as="select"
                name="city"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Enter City</option>
                <option value="Alipur">Alipurduar</option>
                <option value="Kolkata">Kolkata</option>
              </Field>

              <label htmlFor="country">Country</label>
              <Field
                as="select"
                name="country"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Enter Country</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </Field>

              <label htmlFor="pincode">Pincode</label>
              <Field
                id="pincode"
                name="pincode"
                placeholder="Enter Pincode"
                style={{
                  padding: "5px",
                  width: "300px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <h3 style={{ marginBottom: "20px" }}>Other Details</h3>
            <div className="other">
              <label htmlFor="occupation">Occupation</label>
              <Field
                id="occupation"
                name="occupation"
                placeholder="Occupation"
                style={{
                  padding: "5px",
                  width: "250px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
              <label htmlFor="religion">Religion</label>
              <Field
                id="religion"
                name="religion"
                placeholder="Enter Religion"
                style={{
                  padding: "5px",
                  width: "250px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />

              <label htmlFor="marital">Marital Status</label>
              <Field
                as="select"
                name="marital"
                style={{
                  width: "200px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Marital stata</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </Field>

              <label htmlFor="blood">Blood Group</label>
              <Field
                as="select"
                name="blood"
                style={{
                  width: "150px",
                  padding: "5px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Field>

              <label htmlFor="nationality">Nationality</label>
              <Field
                id="nationality"
                name="nationality"
                placeholder="Enter Nationality"
                style={{
                  padding: "5px",
                  width: "250px",
                  borderRadius: "5px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>

            <div className="btn-box">
              <button type="submit" className="btn-cancel">
                Cancel{" "}
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    backgroundColor: "rgb(235, 229, 221)",
                  }}
                >
                  (ESC)
                </span>
              </button>
              <button type="submit" className="btn-save">
                Save{" "}
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    backgroundColor: "rgb(25, 150, 14)",
                  }}
                >
                  (X S)
                </span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      {details ? (
        <div className="details">
          {/* {details.map((data, i) => {
            return (
              <div key={i}>
                <h4>{data.sex}</h4>
              </div>
            );
          })} */}
        </div>
      ) : null}
    </>
  );
};

export default App;
