
class PlaceOfServiceData {
  static getPlaceOfServices() {
    let placeOfServiceArray = [];

        for (let n = 1; n <= 6; n++) {
          let element = {
            placeOfServiceId: n,
            placeOfService: `Place of Service ${n}`
          };

          placeOfServiceArray.push(element);
        }

        return placeOfServiceArray;
      }
}

export default PlaceOfServiceData;
