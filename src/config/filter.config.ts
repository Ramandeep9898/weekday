export const FILTER_CONFIG = [
  {
    type: "dropdown",
    name: "role",
    label: "Role",
    fields: [
      {
        label: "Frontend",
        value: "frontend",
      },
      {
        label: "Backend",
        value: "backend",
      },
      {
        label: "Designer",
        value: "designer",
      },
      {
        label: "Design Manger",
        value: "designManger",
      },
    ],

    required: false,
  },

  {
    type: "dropdown",
    name: "experience",
    label: "Experience",
    fields: [
      {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
    ],
    required: false,
  },
  {
    type: "dropdown",
    name: "location",
    label: "Location",
    fields: [
      {
        label: "Delhi NCR",
        value: "delhi ncr",
      },
      {
        label: "Mumbai",
        value: "mumbai",
      },
      {
        label: "Chennai",
        value: "chennai",
      },
      {
        label: "Bangalore",
        value: "bangalore",
      },
    ],
    required: false,
  },
  {
    type: "dropdown",
    name: "minimumBasePay",
    label: "Minimum Base Pay",
    fields: [
      {
        label: "0L",
        value: 0,
      },
      {
        label: "10L",
        value: 1000000,
      },
      {
        label: "20L",
        value: 2000000,
      },
    ],
    required: false,
  },
  {
    type: "chipDropdown",
    name: "remote",
    label: "Remote",
    fields: [
      {
        label: "Remote",
        value: "remote",
      },
      {
        label: "In-office",
        value: "inOffice",
      },
    ],
    required: false,
  },

  {
    type: "search",
    name: "companyName",
    label: "Search Company Name",
    placeholder: "Search Company Name",
    defaultValue: "",
    required: false,
  },
];
