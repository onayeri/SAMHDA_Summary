# SAMHDA Summary
---
## Project Overveiw

I am using the Substance Abuse and Mental Health Data Archive to retrieve client health level information in the United States. This information is found on the [SAMHDA website](https://www.datafiles.samhsa.gov/dataset/mental-health-client-level-data-2020-mh-cld-2020-ds0001) and the [SAMHDA Codebook](https://www.datafiles.samhsa.gov/sites/default/files/field-uploads-protected/studies/MH-CLD-2020/MH-CLD-2020-datasets/MH-CLD-2020-DS0001/MH-CLD-2020-DS0001-info/MH-CLD-2020-DS0001-info-codebook.pdf). Because this information is within a compact CSV file, I wanted to create an easier way to access the information regarding different marginalized groups and their associated mental health diagnosis. 

In this process I will be creating the following:
- Using Jupyter Notebook to utilize Pandas and Python to perform ETL on the SAMHDA CSV file
- Visual Studiocode: HTML, JavaScript, CSS, Google Chrome
- [Tableau Public](https://public.tableau.com/app/profile/olivia.nayeri/viz/MentalHealthDemographics/2020SubstanceAbuseandMentalHealthDemoDashboard#1)
---
## The Process

### HTML
This JavaScript code is using the D3.js library to manipulate the data and build a table on the webpage. It appears to be using data from a file called "data.js" and is using the D3.js library to select elements from the HTML page and manipulate them.

The code defines a function called "buildTable" that takes in data and creates a table in the HTML with that data. It first clears out any existing data in the table, then loops through each object in the data and appends a row for each object. It then loops through each field in the object and adds the value as a table cell in the row.

It also defines a function called "handleClick" that is triggered when the button with the id "filter-btn" is clicked. This function grabs the value of the input field with the id "datetime" and filters the data based on that value. If a date is entered, the function filters the table data to only keep the rows where the "datetime" value matches the filter value. If no date is entered, the function uses the original table data.

Finally, the code attaches an event listener to the button with the id "filter-btn" so that when it is clicked, it triggers the "handleClick" function. It also calls the "buildTable" function with the tableData from "data.js" to build the table when the page loads.

This is an HTML file for a website. It appears to be a webpage that discusses mental health demographics and allows the user to search a data archive for information about substance abuse and mental health in the United States. The webpage is using Bootstrap for its layout and design, and is using jQuery and a JavaScript file

## Next Steps

My next steps involve continueing the ETL process in Jupyter Notebook which will allow me to load the data in the javascript file. This will allow the HTML to properly link the created filter structures to the data and produce the information we are interested in veiwing. Once I do this successfully, I will most likey add the 2019 data. I think that I will merge the 2020 data and 2019 data in PostgreSQL and then use that new file as an upload to the javascript data file. 




