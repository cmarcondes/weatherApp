/*
  https://service.weeronline.cloud/geodata/v1/6/1/nl/52.360/4.893
  "latitude": 52.3606941,
  "longitude": 4.8938012,
  To get the city_id.
*/

export default function getPlace(lat, long) {
  return fetch(`https://service.weeronline.cloud/geodata/v1/6/1/nl/${lat}/${long}/`)
    .then((response)=>{
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .catch(function(error) { console.log(error); });
};
