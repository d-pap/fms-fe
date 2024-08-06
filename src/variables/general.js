/**
 * table head data and table body data for Tables view
 *
 * Data for the tables shown on the table list tab.
 * The data is hard coded here.
 */
const thead = ["Driver ID", "Name", "Phone#", "Vehicle#", "Status"]
const tbody = [
  {
    className: "",
    data: ["2201", "Dakota Rice", "888-555-5551", "10002975", "On Road"],
  },
  {
    className: "",
    data: ["23", "Minerva Hooper", "888-555-5551", "10570025", "On Road"],
  },
  {
    className: "",
    data: ["21", "Sage Rodriguez", "888-555-5551", "10540025", "On Road"],
  },
  {
    className: "",
    data: ["31", "Philip Chaney", "888-555-5551", "1000525", "On Road"],
  },
  {
    className: "table-danger",
    data: ["110", "Doris Greene", "888-555-5551", "1000253", "In Maintenance"],
  },
  { className: "", data: ["401", "Mason Porter", "888-555-5551", "1000254", "On Road"] },
  {
    className: "table-warning",
    data: ["501", "Jon Porter", "888-555-5551", "1000255", "Available"],
  },
]

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody }
