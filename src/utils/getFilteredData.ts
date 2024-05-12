export const getFilteredData = (params: any, sampleJdList: any) => {
  const { minimumBasePay, companyName, experience, role, location } = params;

  const filteredList = sampleJdList.filter((jd: any) => {
    let passMinimumBasePay = true;
    let passCompanyName = true;
    let minExperience = true;
    let selectedRole = true;
    let selectedLocation = true;

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

    return (
      passMinimumBasePay &&
      passCompanyName &&
      minExperience &&
      selectedRole &&
      selectedLocation
    );
  });

  return filteredList;
};
