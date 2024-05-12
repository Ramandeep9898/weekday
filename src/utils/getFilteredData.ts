export const getFilteredData = (params: any, sampleJdList: any) => {
  const { minimumBasePay, companyName, experience, role, location, remote } =
    params;
  let remoteList = [];
  let remoteVal: any;
  if (remote) {
    remoteList = remote.split(",");
    for (let item of remoteList) {
      if (item === "Remote") {
        remoteVal = "remote";
      }
    }
  }

  const filteredList = sampleJdList.filter((jd: any) => {
    let passMinimumBasePay = true;
    let passCompanyName = true;
    let minExperience = true;
    let selectedRole = true;
    let selectedLocation = true;
    let remoteValue = true;

    if (minimumBasePay !== undefined && jd.minJdSalary !== null) {
      const minJdSalary = jd.minJdSalary !== null ? jd.minJdSalary * 83 : 0;
      const selectedMinBasePay = parseInt(minimumBasePay);
      passMinimumBasePay = minJdSalary >= selectedMinBasePay;
    }

    if (companyName !== undefined) {
      passCompanyName = jd.companyName
        .toLowerCase()
        .includes(companyName.toLowerCase());
    }

    if (experience !== undefined) {
      const minExp = jd.minExp !== null ? parseInt(jd.minExp) : 0;
      minExperience = minExp <= experience;
    }

    if (role !== undefined) {
      selectedRole = jd.jobRole.toLowerCase().includes(role.toLowerCase());
    }

    if (location !== undefined) {
      selectedLocation = jd.location
        .toLowerCase()
        .includes(location.toLowerCase());
    }

    if (remoteVal) {
      remoteValue = jd.location.toLowerCase().includes(remoteVal.toLowerCase());
    }

    return (
      passMinimumBasePay &&
      passCompanyName &&
      minExperience &&
      selectedRole &&
      selectedLocation &&
      remoteValue
    );
  });

  return filteredList;
};
