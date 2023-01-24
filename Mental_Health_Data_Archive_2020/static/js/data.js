fetch('C:\Users\on080\OneDrive\Data Boot Camp\Final_Project\SAMHDA2020_df.json')
  .then(response => response.json())
  .then(data => {
    // do something with the data
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });