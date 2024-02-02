import React, { useEffect, useState } from "react";
import useMenuStore from "../../Utils/menuStore";
import useColorStore from "../../Utils/store";
import { Select, MenuItem } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axios from "axios";
import "./index.css";
import emailjs from "emailjs-com";
import dealersData from "./dealers.json";
import useImageStore from "../../Utils/imageStore";
import { captureScreenshot } from "../../functions";
import PDFDocument from "../PDFDoucment";
import { pdf } from "@react-pdf/renderer";
import { colorOptions as alureColorOptions } from '../../Constants/alure.js';
import { colorOptions as islandColorOptions } from '../../Constants/island.js';
import { colorOptions as atlantisColorOptions } from '../../Constants/atlantis.js';
import { colorOptions as signatureColorOptions } from '../../Constants/signature.js';
const defaultUser = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  streetAddress: "",
  city: "",
  state: "",
  postalZip: "",
  country: "",
};

const itemsModel = [
  {
    name: "Model 1",
  },
  {
    name: "Model 2",
  },
];

const Menu = ({ variants, path }) => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState(1);
  const initiallySelected = Object.keys(variants)[0];
  const { colors } = useColorStore();
  const [formErrors, setFormErrors] = useState({});
  const [dealers, setDealers] = useState([]);
  const [selectedModel, setSelectedModel] = useState(initiallySelected);
  const [options, setOptions] = useState(variants[initiallySelected].options);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { selectedImage, setSelectedImage } = useImageStore();
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const {
    updateSelection,
    selectedOptions,
    updateSelectionModel,
    selectionModel,
  } = useMenuStore();

  const [userForm, setUserForm] = useState({
    ...defaultUser,
    zipCode: "", // Add zip code field to the form
  });

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  // Handle zip code input change
  const handleZipCodeChange = (event) => {
    const { name, value } = event.target;
    setUserForm((prevUserForm) => ({
      ...prevUserForm,
      [name]: value,
    }));
  };

  //to handle single select
  const handleSingleSelectChange = (group, option) => {
    // // Update the selected option for the single-select group
    console.log(group, option);
    if (option === "default") {
      updateSelection({
        ...selectedOptions,
        [group]: {
          option: null,
          price: 0,
        },
      });
      return;
    }
    updateSelection({
      ...selectedOptions,
      [group]: {
        option,
        price: 0, // Set price to 0 since it's not used
      },
    });
  };

  useEffect(() => {
    let total = 0;
    //loop through selectedOptions and update selectedOptions
    Object.entries(selectedOptions).forEach((group) => {
      if (selectedOptions[group[0]] && selectedOptions[group[0]].length > 0) {
        selectedOptions[group[0]].map((option) => {
          total += 0;
        });
        return;
      }
      total += selectedOptions[group[0]]?.price || 0;
    });
    
  }, [selectedOptions]);

  //to handle multi select
  const handleMultiSelectChange = (heading, option) => {
    if (selectedOptions[heading].includes(option)) {
      updateSelection({
        ...selectedOptions,
        [heading]: selectedOptions[heading].filter((item) => item !== option),
      });
      return;
    }
    updateSelection({
      ...selectedOptions,
      [heading]: [...selectedOptions[heading], option],
    });
  };

  const handleUserFormChange = (event) => {
    const { name, value } = event.target;
    let error = "";
    if (value.trim() === "") {
      error = "This field is required";
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setUserForm((prevUserForm) => ({
      ...prevUserForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (userForm.postalZip.length !== 5) {
      setDealers([]);
      return;
    }

    dealersData.map(async (dealer) => {
      //allow cross origin

      axios.AxiosHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      };

      const response = await axios.get(
        `https://www.zipcodeapi.com/rest/js-oLYS0jS7sHiwBDTqvsWVg9KTgK2XzyjSKjBcvU1DBeSajHQkvujpWYb8QoqzJDci/distance.json/${parseInt(
          userForm.postalZip
        )}/${dealer.Zip}/km`
      );

      if (response.data.distance < 500) {
        setDealers((prevDealers) => [...prevDealers, dealer]);
      }
    });
  }, [userForm.postalZip]);

  const getPdfData = async () => {
    const canvas = document.querySelector(".print");
    const selectedOptions = useMenuStore.getState().selectedOptions;
    const selectedImage = useImageStore.getState().selectedImage;

    const pdf = await captureScreenshot(canvas, selectedOptions, selectedImage);
    return pdf.output("datauristring");
  };
  const getColorName = (path, colors) => {
    let selectedColors = {};
    if (path.includes('Alure')) {
      selectedColors = alureColorOptions;
    } else if (path.includes('Island')) {
      selectedColors = islandColorOptions;
    } else if (path.includes('Atlantis')) {
      selectedColors = atlantisColorOptions;
    } else if (path.includes('Signature')) {
      selectedColors = signatureColorOptions;
    }
    const mappedColors = {};
    for (const key in colors) {
      if (selectedColors[key]) {
        const colorName = selectedColors[key]
          .filter((col) => col.hex === colors[key])
          .map((color) => color.name);
        mappedColors[key] = colorName[0];
      }
    }
    return mappedColors;
  };


   
  const handleSubmit = async () => {
    console.log('userForm',userForm)
    setIsSubmitting(true);
    const colorName = getColorName('/Alure',colors)

    //25 Jan changes start
    const templateParams = {
      to_name: "Landau Dealership",
      varient: initiallySelected,
      user: userForm.email,
      
      dealer: userForm?.selectedDealer?.email || "",
      dealerName: userForm?.selectedDealer?.name || "",
      
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      phone: userForm.phone,
      email: userForm.email,
      address: userForm.address,
      streetAddress: userForm.streetAddress,
      city: userForm.city,
      state: userForm.state,
      postalZip: userForm.postalZip,
      country: userForm.country,
      primaryColor: colorName["Primary Fence"],
      secondaryColor: colorName["Secondary Fence"],
      exteriorColor: colorName["Exterior Rail"],
      interiorColor: colorName["Interior Options"],

      engine: selectedOptions["Select your Engine (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      construction: selectedOptions["Construction options (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      electronics: selectedOptions["Electronics / Lighting (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      appearance: selectedOptions["Appearance Options (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      miscOption: selectedOptions["Misc. Options (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      mooring: selectedOptions["Mooring Covers (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      trailer: selectedOptions["Trailer options (multi-select)"]
        ?.map((item, index) => `(${index + 1}) ${item}`)
        .join("     "),
      message_html: JSON.stringify({
        colors: colors,
      }),
      //attachment: pdfData,
    };
    //25 Jan changes ends

    //25 Jan changes start
    // Generate the PDF
  const blob = await pdf((
    <PDFDocument
      path={path}
      selectedOptions={selectedOptions}
      colors={colors}
      selectedImage={selectedImage}
      model={
        selectionModel ===
        'Please Select Model First and Its All Feild'
          ? Object.keys(variants)[0]
          : selectionModel
      }
    />
  )).toBlob();
      //25 Jan changes ends
    // Convert the Blob to Base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    // const requiredColors = ["Primary Fence", "Secondary Fence", "Exterior Rail", "Interior Option"];
    const requiredUserFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "address",
    ];

    // if (requiredColors.every((color) => colors[color])) {
      //25 Jan changes start
      // if (false) {
      //   alert("Please read and check the privacy terms.");
      // }
      if (requiredUserFields.every((field) => userForm[field])) {
        try {
          reader.onloadend = async () => {
            const base64data = reader.result;
        
            templateParams.attachment = base64data
        
            // Email sending logic
            // Make sure to place this inside the onloadend to ensure the PDF is ready
            try {
              // await emailjs.send("your_service_id", "your_template_id", templateParams, "your_user_id");
              // // Handle successful submission
               // Iterate through the recipients and send the email to each one
          await emailjs.send(
            "service_p5ahwlh",
            "template_hsi8loi",
            templateParams,
            "FqV1gx-mGzdAsNC7y"
          );
            } catch (error) {
              console.log(error);
              // Handle errors
            } finally {
              setIsSubmitting(false);
            }
          };

         
  
          console.log(templateParams);
  
          alert("Form submitted successfully");
          setUserForm(defaultUser);
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form. Please try again.");
        }
      } else {
        const missingFields = requiredUserFields.filter(
          (field) => !userForm[field]
        );
        alert(
          `Please provide the following user details: ${missingFields.join(", ")}`
        );
      }
      //25 Jan changes ends
  
      // Check if the privacy checkbox is checked
      
  
      setIsSubmitting(false);
    };

  const titles = ["Select Model", "Pick Options", "Fill and Send"];

  const handleFormLeft = () => {
    //setFormState((prev) => (prev > 1 ? prev - 1 : prev));

    if (formState > 1) {
      setFormState(formState - 1);
    }
  };

  const handleFormRight = () => {
    // setFormState((prev) => (prev < 3 ? prev + 1 : prev));

    if (formState < titles.length) {
      setFormState(formState + 1);
    }
  };

  return (
    <div className="menu-container">
      <div className="centered">
        {/* <div className="menu-header">Total: ${totalPrice.toFixed(2)}</div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <ChevronLeftIcon onClick={handleFormLeft} className="pointer" />
          <div className="menu-header-feature">{titles[formState - 1]}</div>
          <ChevronRightIcon onClick={handleFormRight} className="pointer" />
        </div>
      </div>

      {formState === 1 && (
        <div className="menu-options">
          <span className="menu-heading"></span>
          <Select
            value={selectedModel || "default"}
            onChange={(e) => {
              if (e.target.value === "default") return;
              setSelectedModel(e.target.value);
              setOptions(variants[e.target.value].options);
              updateSelectionModel(e.target.value);
              updateSelection(variants[e.target.value].initialOptions);
            }}
            sx={{ height: 40, width: "100%", mb: 2 }}
            MenuProps={{
              PaperProps: {
                style: {
                  width: "200px", // Set the desired width for the pop-up menu
                },
              },
            }}
          >
            <MenuItem value={"default"} sx={{ fontSize: 14 }}>
              <em>Select a model</em>
            </MenuItem>
            {Object.keys(variants).map((item, idx) => (
              <MenuItem key={idx} value={item} sx={{ fontSize: 12 }}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <div className="floor-plan-images-container">
            {variants[selectedModel].images.map((image, idx) => (
              <div
                key={idx}
                className={`floor-plan-image-container ${
                  selectedImage === image ? "selected" : ""
                }`}
              >
                <img
                  src={`/${image}`}
                  alt={`Floor Plan ${idx + 1}`}
                  className="floor-plan-image"
                  onClick={() => {
                    handleImageSelect(image);
                    setFormState(2);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {formState === 2 && (
        <div className="menu-items-container">
          <div className="menu-items">
            {Object.entries(options).map(([heading, items], index) => (
              <div className="menu-items-1" key={index}>
                <div className="menu-heading">
                  {heading.split("(")[0].trim()}
                </div>
                {heading?.includes("(single select)") ? (
                  <Select
                    value={selectedOptions[heading]?.option || "default"}
                    onChange={(e) =>
                      handleSingleSelectChange(heading, e.target.value)
                    }
                    sx={{ height: 40, width: "100%", mb: 2 }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          width: "200px", // Set the desired width for the pop-up menu
                        },
                      },
                    }}
                  >
                    <MenuItem
                      value={"default"}
                      sx={{
                        fontSize: 14,
                      }}
                    >
                      <em>Select an option</em>
                    </MenuItem>
                    {items?.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        value={item.name}
                        sx={{
                          fontSize: 12,
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <>
                    {items?.map((item, idx) => (
                      <div key={idx} className="menu-item">
                        <input
                          id={item.name + item.price}
                          type="checkbox"
                          checked={selectedOptions[heading]?.includes(
                            item.name
                          )}
                          onChange={(e) =>
                            handleMultiSelectChange(heading, item.name)
                          }
                        />
                        <label htmlFor={item.name + item.price}>
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>

          <button
            className="submit-button"
            onClick={handleFormLeft}
            style={{ marginRight: "5px" }}
          >
            Back
          </button>
          <button className="submit-button" onClick={handleFormRight}>
            Next
          </button>
        </div>
      )}
      {formState === 3 && (
        <div className="menu-items-container">
          {" "}
          <div className="centered">
            <div className="menu-header-info">User Information</div>
          </div>
          <div className="user-form">
            <div className="form-field">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userForm.firstName}
                onChange={handleUserFormChange}
                required
                placeholder="First Name"
              />
              {formErrors.firstName && (
                <div className="error-message">{formErrors.firstName}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userForm.lastName}
                onChange={handleUserFormChange}
                required
                placeholder="Last Name"
              />
              {formErrors.lastName && (
                <div className="error-message">{formErrors.lastName}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userForm.phone}
                onChange={handleUserFormChange}
                required
                placeholder="Phone Number"
              />
              {formErrors.phone && (
                <div className="error-message">{formErrors.phone}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userForm.email}
                onChange={handleUserFormChange}
                required
                placeholder="Email"
              />
              {formErrors.email && (
                <div className="error-message">{formErrors.email}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userForm.address}
                onChange={handleUserFormChange}
                required
                placeholder="Address"
              />
              {formErrors.address && (
                <div className="error-message">{formErrors.address}</div>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={userForm.streetAddress}
                onChange={handleUserFormChange}
                placeholder="Street Address"
              />
            </div>
            <div className="form-field">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={userForm.city}
                onChange={handleUserFormChange}
                placeholder="city"
              />
            </div>
            <div className="form-field">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={userForm.state}
                onChange={handleUserFormChange}
                placeholder="State"
              />
            </div>
            <div className="form-field">
              <label htmlFor="postalZip">Postal Zip</label>
              <input
                type="text"
                id="postalZip"
                name="postalZip"
                value={userForm.postalZip}
                // onChange={handleUserFormChange}
                onChange={handleZipCodeChange}
                placeholder="Postal Zip"
                minLength={5}
              />
            </div>
            <div className="form-field">
              <label>Dealers</label>
              {/* {filteredDealers.length > 0 ? ( */}
              <div>
                {dealers.length > 0 ? (
                  dealers.map((dealer, index) => (
                    <div key={index} className="dealer-radio">
                      <label
                        htmlFor={`dealer${index}`}
                        className="dealer-label"
                      >
                        <div className="dealer-info">
                          <div className="dealer-left">
                            <input
                              type="radio"
                              id={`dealer-radio${index}`}
                              name="selectedDealer"
                              value={dealer["Dealer Name"]}
                              onChange={(e) =>
                                setUserForm({
                                  ...userForm,
                                  selectedDealer: {
                                    email: dealer["E-Mail"],
                                    name: dealer["Dealer Name"],
                                  },
                                })
                              }
                            />
                          </div>
                          <div className="dealer-right">
                            <div className="info-dealer">
                              <div className="dealer-name">
                                {dealer["Dealer Name"]}
                              </div>
                              <div className="dealer-address">
                                {dealer["Address"]}, {dealer["City"]},{" "}
                                {dealer["State"]} {dealer["Zip"]}
                              </div>
                              <div className="dealer-contact">
                                Phone: {dealer["Phone #"]}
                                <br />
                                Website:{" "}
                                <a
                                  href={dealer["Web Address"]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {dealer["Web Address"]}
                                </a>
                                <br />
                                Email: {dealer["E-Mail"]}
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))
                ) : (
                  <span className="dealers-text">
                    {userForm.postalZip.length === 5
                      ? "No Dealers Near you"
                      : userForm.postalZip.length === 0
                      ? "Please Enter Postal code to get nearby dealers"
                      : "Please Enter 5 digit postal code"}
                  </span>
                )}
              </div>
              {/* ) : (
                <span>No Dealers near you</span>
              )} */}
            </div>

            <div className="form-field">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={userForm.country}
                onChange={handleUserFormChange}
              >
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="privacyCheckbox"
                  name="privacyCheckbox"
                  className="checkbox-input"
                  required
                />
                <label htmlFor="privacyCheckbox" className="checkbox-text">
                 I read and understood the <a href="https://landauboats.com/privacy/" target="_blank">privacy</a> terms.
                </label>
              
            </div>
          </div>
          <p className="mobile_note">
            All prices found on this boat builder and website are based on
            standard MSRP in US Dollars. Prices DO NOT include destination fees,
            prep, registration fees, taxes, trailer, dealer installed options,
            or any other applicable discounts or charges. Prices, materials,
            standard equipment and options are subject to change without notice.
            Please contact your nearest dealer to determine exact pricing at
            time of purchase.
          </p>
          <div className="final-btns">
            <button className="submit-button" onClick={handleFormLeft}>
              Back
            </button>
            <button
              disabled={isSubmitting}
              className="submit-button"
              onClick={handleSubmit}
              type="button"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
