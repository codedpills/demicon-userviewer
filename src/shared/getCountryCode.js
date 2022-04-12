const countryList = {
  australia: "AU",
  brazil: "BR",
  canada: "CA",
  switzerland: "CH",
  germany: "DE",
  denmark: "DK",
  spain: "ES",
  finland: "FI",
  France: "FR",
  "united kingdom": "GB",
  ireland: "IE",
  iran: "IR",
  norway: "NO",
  netherlands: "NL",
  "new zealand": "NZ",
  turkey: "TR",
  us: "United States",
};

export function getCountryCode(country) {
  return countryList[country];
}