const { Service } = require("feathers-mongoose");
const FindService = require("../../utils/abstracts/FindService");
const MixedService = FindService(Service);

exports.VoucherDetails = class VoucherDetails extends MixedService {
  
};