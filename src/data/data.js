const notes = new Array(15)
  .fill(1)
  .map((_, idx) => ({
    id: Date.now() + idx,
    title: `Note: ${idx}`
  }))

module.exports = notes