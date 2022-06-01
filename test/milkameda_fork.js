const { ethers } = require("hardhat");
const CreamyABI = require('./creamy.abi.json'); 

describe("Milkomeda fork", function () {
  before(async function () {
    this.timeout(60000) 
  })
  beforeEach(async function () {
  })
  it("fork mode test", async function () {
    const creamyAddress = "0x1ECA2C766072534DFEE8793E54DC5b45d93a3e67"
    const CREAMY = new ethers.Contract(creamyAddress, CreamyABI, ethers.provider)
    console.log("symbol = ", await CREAMY.symbol()) // Works fine
    console.log("admin = ", await CREAMY.admin()) // Transaction ran out of gas
  })
})