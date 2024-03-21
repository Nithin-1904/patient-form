import { Date, Text } from "./components";
import Heading from "./components/Heading";
import Options from "./components/Options";

export default function Home() {

  {/* Gender Options */}
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  {/* Marriage Options */}
  const martialOptions = [
    { value: "Single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
    { value: "Seperated", label: "Seperated" },
    { value: "others", label: "Others" },
  ];

  {/* Employment Options */}
  const employOptions = [
    { value: "Employed", label: "Employed" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Retired", label: "Retired" },
    { value: "Others", label: "Others" },
  ];

  return (
    <>
      {/* Container */}
      <div className="flex flex-col h-[70%] w-[90%] bg-white m-[5%] p-[2%] shadow-slate-300 shadow-lg rounded-lg">
        {/* Title Container */}
        <div className="m-9 flex flex-col gap-1">
          <h1 className="text-[3.5rem]  font-semibold">
            Hospital Application Form
          </h1>
          <p className="text-2xl text-gray-500 font-semibold">
            123 Street, Park Avenue, Denver-007
          </p>
        </div>

        <hr className="bg-gray-200 h-px ml-9 mr-9" />
        {/* <div className="grid grid-cols-2 gap-10 items-center m-14 p-1"> */}

        {/* Form Container */}
        <div className="bg-green-100 m-14 mt-9 p-1">
          <form>
            <div className="grid grid-cols-2 gap-10 items-center mx-11">
              <Text label="Doctor Name" name={true} type="text" />
              <Text label="Department" name={false} type="text" />
            </div>

            <Heading title="Patient Information" />

            <div className="mx-11">
              <div className="grid grid-cols-2 gap-10 items-center mb-9">
                <Text label="Patient Name" name={true} type="text" />
                <Date label="Date of Birth" />
              </div>

              <div className="grid grid-cols-2 gap-10 items-center mb-9">
                <Options label="Gender" options={genderOptions} />
                <Text label="Age" name={false} type="number" />
              </div>
              
              <Text
                label="Parent/Guardian Name"
                name={true}
                type="text"
                design="mb-9"
              />

              <div className="grid grid-cols-2 gap-10 items-center mb-9">
                {/* Contact Number */}
                <div className="flex-col">
                  <div className="mb-2">
                    <label className="text-xl font-semibold">
                      Phone Number
                    </label>
                  </div>
                  <input
                    type="tel"
                    className="p-3 rounded-md border-slate-300 border-2 w-full"
                    placeholder="000 000 0000"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>

                {/* Email */}
                <div className="flex-col">
                  <div className="mb-2">
                    <label className="text-xl font-semibold">E-mail</label>
                  </div>
                  <input
                    type="mail"
                    className="p-3 rounded-md border-slate-300 border-2 w-full"
                    placeholder="example123@abc.com"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>

              <Options label="Martial Status" options={martialOptions}  />
              <Options label="Employment Status" options={employOptions}  />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
