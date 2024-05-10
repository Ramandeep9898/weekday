export const FILTER_CONFIG = [
  {
    type: "dropdown",
    name: "role",
    label: "Role",
    departments: [
      {
        key: "engineering",
        department: "ENGINEERING",
        fields: [
          {
            label: "Frontend",
            value: "frontend",
          },
          {
            label: "Backend",
            value: "backend",
          },
        ],
      },

      {
        key: "design",
        department: "Design",
        fields: [
          {
            label: "Designer",
            value: "designer",
          },
          {
            label: "Design Manger",
            value: "designManger",
          },
        ],
      },
    ],
    required: false,
  },

  {
    type: "dropdown",
    name: "numberOfEmployees",
    label: "Number of Employees",
    fields: [
      {
        label: "1-10",
        value: "1-10",
      },
      {
        label: "11-20",
        value: "11-20",
      },
      {
        label: "21-50",
        value: "21-50",
      },
      {
        label: "51-100",
        value: "51-100",
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
    type: "chipDropdown",
    name: "remote",
    label: "Remote",
    fields: [
      {
        label: "Remote",
        value: "remote",
      },
      {
        label: "Hybrid",
        value: "hybrid",
      },
      {
        label: "In-office",
        value: "inOffice",
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
        value: "0L",
      },
      {
        label: "10L",
        value: "10L",
      },
      {
        label: "20L",
        value: "20L",
      },
    ],
    required: false,
  },
  {
    type: "search",
    name: "searchCompanyName",
    label: "Search Company Name",
    placeholder: "Search Company Name",
    defaultValue: "",
    required: false,
  },
];
