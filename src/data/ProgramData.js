
class ProgramData {
  static getServiceSubcategories() {
    let serviceSubcategoryArray = [];

    for (let n = 1; n <= 6; n++) {
      let element = {
        serviceSubcategoryId: n,
        serviceSubcategory: `Service Subcategory ${n}`
      };

      serviceSubcategoryArray.push(element);
    }

    return serviceSubcategoryArray;
  }

  static getFundingModels(serviceSubcategory) {
    let fundingModelArray = [];

    for (let n = 1; n <= 6; n++) {
      let element = {
        fundingModelId: n,
        fundingModel: `Funding Model ${n} (Subcategory ${serviceSubcategory})`
      };

      fundingModelArray.push(element);
    }

    return fundingModelArray;
  }

  static getProgramTypes() {
    return [
      {
        programTypeId: 1,
        programType: "Community"
      },
      {
        programTypeId: 2,
        programType: "Place of Service"
      },
    ];
  }
}

export default ProgramData;
