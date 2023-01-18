//this is meant to create the typing affect on the text
var typed = new typed('#typed', {
  strings: ["Mental Health Matters", "YOUR Mental Health Matters"],
  typeSpeed: 70
});

//this is to create the diagnosis dropdown 
/*const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault(); // prevent the form from submitting to a server
    // Get the selected value
    var selectedValue = document.getElementById("diagnosis-select").value;

    // Perform any necessary actions with the selected value
    console.log(selectedValue);
} */



// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

function handleClick() {
  // Grab the datetime value from the filter
  let year = d3.select("#year").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (year) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.year === year);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no year was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


// Grab the age value from the filter
let age = d3.select("#age").property("value");
let filteredData = tableData;

// Check to see if an age was entered and filter the
// data using that age.
if (age) {
  // Apply `filter` to the table data to only keep the
  // rows where the `age` value matches the filter value
  filteredData = filteredData.filter(row => row.age === age);
};






