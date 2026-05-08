const userDetails = require("./userDetails/userDetails.service.js");
const voucherDetails = require("./voucherDetails/voucherDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(userDetails);
  app.configure(voucherDetails);
    // ~cb-add-configure-service-name~
};
