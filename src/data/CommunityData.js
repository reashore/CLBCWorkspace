
class CommunityData {
  static getCpdAreas() {
    let cpdAreaArray = [];

    for (let n = 1; n <= 6; n++) {
      let element = {
        cpdAreaId: n,
        cpdArea: `CPD Area ${n}`
      };

      cpdAreaArray.push(element);
    }

    return cpdAreaArray;
  }
}

export default CommunityData;
