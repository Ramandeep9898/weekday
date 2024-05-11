export const getFilteredData = (params, sampleJdList) => {
  const { minimumBasePay, companyName, experience, role } = params;

  const filteredList = sampleJdList.filter((jd) => {
    let passMinimumBasePay = true;
    let passCompanyName = true;
    let minExperience = true;
    let selectedRole = true;

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

    return (
      passMinimumBasePay && passCompanyName && minExperience && selectedRole
    );
  });

  return filteredList;
};
