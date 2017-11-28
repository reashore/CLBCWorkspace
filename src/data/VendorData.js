
class VendorData {
  static getVendors() {
    let vendorsArray = [];

    for (let n = 1; n <= 6; n++) {
      let element = {
        vendorId: n,
        name: `Vendor Name ${n}`,
        ocgNumber: `OCG Number ${n} `,
        managingQsArea: `Managing QS Area ${n}`,
        primaryAddress: `Primary Address ${n}`
      };

      vendorsArray.push(element);
    }

    return vendorsArray;
  }
}

export default VendorData;
