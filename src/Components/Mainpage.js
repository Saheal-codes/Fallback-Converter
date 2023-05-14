import React, { useEffect, useState, useCallback } from "react";

export default function Converter() {
  const [unit, setunit] = useState("angle");
  const [list, setlist] = useState([]);
  const [form, setform] = useState({
    Quantity: "",
    From: "",
    To: "",
    Result: "",
  });

  const angle = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="radian">Radian</option>
      <option value="mil">Mil</option>
      <option value="grad">Grad</option>
      <option value="degree">Degree</option>
    </select>
  );

  const area = (key) => (
    <select
      name={key}
      className=" rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="sqmil">Square Millimeter</option>
      <option value="sqcent">Square Centimeter</option>
      <option value="sqmet">Square Meter</option>
      <option value="hec">Hectare</option>
      <option value="sqkil">Square Kilometer</option>
      <option value="sqinc">Square Inches</option>
      <option value="sqfeet">Square Feet</option>
      <option value="sqyards">Square Yards</option>
      <option value="acres">Acres</option>
      <option value="sqmile">Square Miles</option>
    </select>
  );

  const currency = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="AUD">Australian Dollar (AUD)</option>
      <option value="BGN">Bulgarian Lev (BGN)</option>
      <option value="BRL">Brazilian Real (BRL)</option>
      <option value="CAD">Canadian Dollar (CAD)</option>
      <option value="CHF">Swiss Franc (CHF)</option>
      <option value="CNY">Chinese Yuan Renminbi (CNY)</option>
      <option value="CZK">Czech Koruna (CZK)</option>
      <option value="DKK">Danish Krone (DKK)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="GBP">British Pound (GBP)</option>
      <option value="HKD">Hong Kong Dollar (HKD)</option>
      <option value="HRK">Croatian Kuna (HRK)</option>
      <option value="HUF">Hungarian Forint (HUF)</option>
      <option value="IDR">Indonesian Rupiah (IDR)</option>
      <option value="ILS">Israeli Shekel (ILS)</option>
      <option value="INR">Indian Rupee (INR)</option>
      <option value="ISK">Icelandic Krona (ISK)</option>
      <option value="JPY">Japanese Yen (JPY)</option>
      <option value="KRW">South Korean Won (KRW)</option>
      <option value="MXN">Mexican Peso (MXN)</option>
      <option value="MYR">Malaysian Ringgit (MYR)</option>
      <option value="NOK">Norwegian Krone (NOK)</option>
      <option value="NZD">New Zealand Dollar (NZD)</option>
      <option value="PHP">Philippine Peso (PHP)</option>
      <option value="PLN">Polish Zloty (PLN)</option>
      <option value="RON">Romanian Leu (RON)</option>
      <option value="RUB">Russian Ruble (RUB)</option>
      <option value="SEK">Swedish Krona (SEK)</option>
      <option value="SGD">Singapore Dollar (SGD)</option>
      <option value="THB">Thai Baht (THB)</option>
      <option value="TRY">Turkish Lira (TRY)</option>
      <option value="USD">US Dollar (USD)</option>
      <option value="ZAR">South African Rand (ZAR)</option>
      <option value="ARS">Argentine Peso (ARS)</option>
      <option value="CLP">Chilean Peso (CLP)</option>
      <option value="COP">Colombian Peso (COP)</option>
      <option value="EGP">Egyptian Pound (EGP)</option>
      <option value="GHS">Ghanaian Cedi (GHS)</option>
      <option value="IDR">Indonesian Rupiah (IDR)</option>
      <option value="KES">Kenyan Shilling (KES)</option>
      <option value="LBP">Lebanese Pound (LBP)</option>
      <option value="MAD">Moroccan Dirham (MAD)</option>
      <option value="NPR">Nepalese Rupee (NPR)</option>
      <option value="PEN">Peruvian Sol (PEN)</option>
      <option value="PKR">Pakistani Rupee (PKR)</option>
      <option value="QAR">Qatari Riyal (QAR)</option>
      <option value="SAR">Saudi Arabian Riyal (SAR)</option>
      <option value="TWD">Taiwan New Dollar (TWD)</option>
      <option value="TZS">Tanzanian Shilling (TZS)</option>
      <option value="UAH">Ukrainian Hryvnia (UAH)</option>
      <option value="UGX">Ugandan Shilling (UGX)</option>
      <option value="VND">Vietnamese Dong (VND)</option>
      <option value="ZMW">Zambian Kwacha (ZMW)</option>
    </select>
  );

  const energy = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="kWh">kWh</option>
      <option value="kVAh">kVAh</option>
      <option value="kVAr">kVAr</option>
      <option value="kV">kV</option>
      <option value="kW">kW</option>
      <option value="kW/m2">kW/m2</option>
      <option value="joules">Joules</option>
      <option value="kiljoules">Kilojoules</option>
      <option value="footpounds">Foot-Pounds</option>
    </select>
  );

  const length = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="nm">Nanometers</option>
      <option value="mic">Microns</option>
      <option value="mill">Millimeters</option>
      <option value="cent">Centimeters</option>
      <option value="met">Meters</option>
      <option value="kil">Kilometers</option>
      <option value="Inch">Inches</option>
      <option value="feet">Feet</option>
      <option value="yard">Yards</option>
      <option value="miles">Miles</option>
      <option value="naut">Nautical Miles</option>
    </select>
  );

  const speed = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="cms">Centimeters per second</option>
      <option value="ms">Meters per second</option>
      <option value="kmh">Kilometers per hour</option>
      <option value="mph">Miles per hour</option>
      <option value="fps">Feet per second</option>
      <option value="knt">Knots</option>
      <option value="mac">Mach</option>
    </select>
  );

  const temp = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="c">Celsius</option>
      <option value="f">Fahrenheit</option>
      <option value="k">Kelvin</option>
    </select>
  );

  const volume = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="miltr">Millilitres</option>
      <option value="cubcent">Cubic Centimetres</option>
      <option value="l">Litres</option>
      <option value="cubm">Cubic Metres</option>
      <option value="gall">Gallons(UK)</option>
      <option value="cubi">Cubic Inches</option>
      <option value="cubf">Cubic Feet</option>
      <option value="cuby">Cubic Yards</option>
      <option value="galls">Gallons(US)</option>
    </select>
  );

  const weight = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Carats">Carats</option>
      <option value="Milligrams">Milligrams</option>
      <option value="Centigrams">Centigrams</option>
      <option value="Decigrams">Decigrams</option>
      <option value="Hectograms">Hectograms</option>
      <option value="Kilograms">Kilograms</option>
      <option value="Metric Tonnes">Metric Tonnes</option>
      <option value="Ounces">Ounces</option>
      <option value="Pounds">Pounds</option>
      <option value="Stone">Stone</option>
    </select>
  );

  const alert = (
    <div className="rounded-md bg-yellow-50 p-4 w-6 h-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Please Fill The Input!
          </h3>
        </div>
      </div>
    </div>
  );

  const keymap = {
    angle,
    area,
    length,
    temperature: temp,
    volume,
    weightandmass: weight,
    currency,
    energy,
    speed,
  };

  const results = [];

  useEffect(() => {
    switch (unit) {
      case "angle":
        setform((prev) => {
          return { ...prev, From: "radian", To: "degree" };
        });
        break;
      case "area":
        setform((prev) => {
          return {
            ...prev,
            From: "hec",
            To: "acres",
          };
        });
        break;
      case "length":
        setform((prev) => {
          return { ...prev, From: "kil", To: "naut" };
        });
        break;
      case "temperature":
        setform((prev) => {
          return { ...prev, From: "c", To: "f" };
        });
        break;
      case "volume":
        setform((prev) => {
          return { ...prev, From: "gall", To: "l" };
        });
        break;
      case "weightandmass":
        setform((prev) => {
          return { ...prev, From: "Kilograms", To: "Pounds" };
        });
        break;
      case "currency":
        setform((prev) => {
          return { ...prev, From: "EUR", To: "INR" };
        });
        break;
      case "energy":
        setform((prev) => {
          return { ...prev, From: "kiljoules", To: "footpounds" };
        });
        break;
      case "speed":
        setform((prev) => {
          return { ...prev, From: "mph", To: "kmh" };
        });
        break;
    }
  }, [unit]);

  const resulthandler = useCallback(() => {
    // common conversion

    if (form.From === "Kilograms" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2.20462 };
      });
    } else if (form.From === "Pounds" && form.To === "Kilograms") {
      console.log({ form });
      setform((prevform) => {
        console.log({ prevform });
        return { ...prevform, Result: prevform.Quantity * 0.45359237 };
      });
    }
    // carats
    else if (form.From === "Carats" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 200 };
      });
    } else if (form.From === "Milligrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.005 };
      });
    } else if (form.From === "Carats" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 20 };
      });
    } else if (form.From === "Centigrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.05 };
      });
    } else if (form.From === "Carats" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2 };
      });
    } else if (form.From === "Decigrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.5 };
      });
    } else if (form.From === "Carats" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.002 };
      });
    } else if (form.From === "Hectograms" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 500 };
      });
    } else if (form.From === "Carats" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0002 };
      });
    } else if (form.From === "Kilograms" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 5000 };
      });
    } else if (form.From === "Carats" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000002 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 5000000 };
      });
    } else if (form.From === "Carats" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.007055 };
      });
    } else if (form.From === "Ounces" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 141.7475 };
      });
    } else if (form.From === "Carats" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000441 };
      });
    } else if (form.From === "Pounds" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2267.962 };
      });
    } else if (form.From === "Carats" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000031 };
      });
    } else if (form.From === "Stone" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 31751.47 };
      });
    }
    // milligrams
    else if (form.From === "Milligrams" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Centigrams" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Milligrams" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.01 };
      });
    } else if (form.From === "Decigrams" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100 };
      });
    } else if (form.From === "Milligrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000035 };
      });
    } else if (form.From === "Ounces" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 28349.52 };
      });
    } else if (form.From === "Milligrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000002 };
      });
    } else if (form.From === "Pounds" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 453592.4 };
      });
    } else if (form.From === "Milligrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000157473044 };
      });
    } else if (form.From === "Stone" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 6350293 };
      });
    }
    //centigrams
    else if (form.From === "Centigrams" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Decigrams" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Centigrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000353 };
      });
    } else if (form.From === "Ounces" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2834.952 };
      });
    } else if (form.From === "Centigrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000022 };
      });
    } else if (form.From === "Pounds" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 45359.24 };
      });
    } else if (form.From === "Centigrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000002 };
      });
    }
    // decigrams
    else if (form.From === "Decigrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.003527 };
      });
    } else if (form.From === "Ounces" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 283.4952 };
      });
    } else if (form.From === "Decigrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00022 };
      });
    } else if (form.From === "Pounds" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4535.924 };
      });
    } else if (form.From === "Decigrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000016 };
      });
    } else if (form.From === "Stone" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63502.93 };
      });
    }

    // hectograms
    else if (form.From === "Hectograms" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Kilograms" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Hectograms" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Hectograms" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 3.527396 };
      });
    } else if (form.From === "Ounces" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.283495 };
      });
    } else if (form.From === "Hectograms" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.220462 };
      });
    } else if (form.From === "Pounds" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4.535924 };
      });
    } else if (form.From === "Hectograms" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.015747 };
      });
    } else if (form.From === "Stone" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63.50293 };
      });
    }

    // Kilograms
    else if (form.From === "Kilograms" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000 };
      });
    } else if (form.From === "Kilograms" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 35.27396 };
      });
    } else if (form.From === "Ounces" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.02835 };
      });
    } else if (form.From === "Kilograms" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.157473 };
      });
    } else if (form.From === "Stone" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 6.350293 };
      });
    }

    // metrictonnes
    else if (form.From === "Metric Tonnes" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 35273.96 };
      });
    } else if (form.From === "Ounces" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000028 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2204.623 };
      });
    } else if (form.From === "Pounds" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000454 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 157.473 };
      });
    } else if (form.From === "Stone" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00635 };
      });
    }

    // Ounce
    else if (form.From === "Ounces" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0625 };
      });
    } else if (form.From === "Pounds" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 16 };
      });
    } else if (form.From === "Ounces" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.004464 };
      });
    } else if (form.From === "Stone" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 224 };
      });
    }

    // Pounds
    else if (form.From === "Pounds" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.071429 };
      });
    } else if (form.From === "Stone" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 14 };
      });
    }

    // Angle - Radian
    else if (form.From === "radian" && form.To === "mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1018.591 };
      });
    } else if (form.From === "mil" && form.To === "radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000981747 };
      });
    } else if (form.From === "radian" && form.To === "grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63.6619 };
      });
    } else if (form.From === "grad" && form.To === "radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.015707 };
      });
    } else if (form.From === "radian" && form.To === "degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 57.29577 };
      });
    }    else if (form.From === "degree" && form.To === "radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.01745 }
      })
    }
    else if (form.From === "mil" && form.To === "grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0625 };
      });
    } else if (form.From === "grad" && form.To === "mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 16 };
      });
    } else if (form.From === "mil" && form.To === "degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.05625 };
      });
    } else if (form.From === "degree" && form.To === "mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 17.7777 };
      });
    } else if (form.From === "grad" && form.To === "degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.9 };
      });
    } else if (form.From === "degree" && form.To === "grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1.1111 };
      });
    }

    //

  }, [form]);

  const handleresult = () => {
    setlist((prev) => {
      return [...prev, form];
    });
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setform({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    resulthandler();
  }, [form.Quantity, form.To, form.From]);

  const switcher = useCallback(() => {
    let latest;
    setform((prev) => {
      console.log({ ...prev, From: prev.To, To: prev.From });
      latest = { ...prev, From: prev.To, To: prev.From };
      return latest;
    });
  }, [resulthandler]);

  // Function to convert weight from one unit to another

  return (
    <div className="bg-zinc-950 h-screen p-20 ">
      {/* First div */}
      <div className="lg:flex justify-between items-end flex-row">
        <h1 className="text-7xl text-white font-bold pr-10">
          Online Unit Converter
        </h1>
        <div>
          <select
            name="unit"
            className="rounded-full px-14 py-3 border-orange-600 border-4 bg-zinc-950 text-white text-xl font-bold"
            onChange={(e) => {
              setunit(e.target.value);
            }}
            value={unit}
          >
            <option value="angle">Angle</option>
            <option value="area">Area</option>
            <option value="currency">Currency</option>
            <option value="energy">Energy</option>
            <option value="length">Length</option>
            <option value="speed">Speed</option>
            <option value="temperature">Temperature</option>
            <option value="volume">Volume</option>
            <option value="weightandmass">Weight and Mass</option>
          </select>
        </div>
        <button
          className=" bg-orange-600 text-black text-lg px-10 rounded-3xl font-bold "
          onClick={handleresult}
        >
          Save Result
        </button>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {/* Table Div */}
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-zinc-900 rounded-xl">
            <table className="min-w-full divide-y divide-gray-500">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left font-semibold text-white sm:pl-0"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 font-semibold text-white"
                  >
                    From
                  </th>
                  <th></th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 font-semibold text-white"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-3 text-right font-semibold text-white"
                  >
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="text-white">
                    {/* Main Input */}
                    <input
                      className="Maininput block text-sm font-medium leading-6 text-white mr-10 mt-6 mb-6 rounded-md px-8 py-2 b border-2 border-slate-400 bg-zinc-900"
                      onChange={inputHandler}
                      name="Quantity"
                      value={form.Quantity}
                      type="number"
                      min="0"
                      step="1"
                      autoFocus
                      // onInput={validateinput}
                    />
                  </td>
                  <td>{keymap[unit]("From")}</td>
                  <td>
                    <button
                      className="rounded-full bg-white p-3 border-orange-600 border-2"
                      onClick={switcher}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="">{keymap[unit]("To")}</td>
                  <td>
                    <input
                      htmlFor="Result"
                      className="font-medium leading-6  my-6 rounded-md px-8 py-2 block ml-auto"
                      value={form.Result}
                      name="Result"
                      readOnly
                    />
                  </td>
                </tr>
                {/* Make a row for the data that will be saved from the clicking the save results button */}
                {list.map((listitem) => {
                  return (
                    <tr className="text-white">
                      <td>{listitem.Quantity}</td>
                      <td>{listitem.From}</td>
                      <td></td>
                      <td>{listitem.To}</td>
                      <td className="font-bold">{listitem.Result}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
