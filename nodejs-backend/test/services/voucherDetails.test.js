const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("voucherDetails service", async () => {
  let thisService;
  let voucherDetailCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("voucherDetails");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (voucherDetails)");
  });

  describe("#create", () => {
    const options = {"voucherName":"new value"};

    beforeEach(async () => {
      voucherDetailCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new voucherDetail", () => {
      assert.strictEqual(voucherDetailCreated.voucherName, options.voucherName);
    });
  });

  describe("#get", () => {
    it("should retrieve a voucherDetail by ID", async () => {
      const retrieved = await thisService.Model.findById(voucherDetailCreated._id);
      assert.strictEqual(retrieved._id.toString(), voucherDetailCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"voucherName":"updated value"};

    it("should update an existing voucherDetail ", async () => {
      const voucherDetailUpdated = await thisService.Model.findByIdAndUpdate(
        voucherDetailCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(voucherDetailUpdated.voucherName, options.voucherName);
    });
  });

  describe("#delete", async () => {
    it("should delete a voucherDetail", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const voucherDetailDeleted = await thisService.Model.findByIdAndDelete(voucherDetailCreated._id);
      assert.strictEqual(voucherDetailDeleted._id.toString(), voucherDetailCreated._id.toString());
    });
  });
});