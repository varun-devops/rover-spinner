# Loader Spinner

A flexible CSS loader spinner package that works seamlessly with React, Vite, Express, and other modern frameworks.

## Installation

Install via npm:

```bash
npm install loader-spinner



# Vanilla JavaScript (Vite, Express, etc.)
# <link rel="stylesheet" href="path/to/node_modules/loader-spinner/spinner.css">
# <script src="path/to/node_modules/loader-spinner/index.js"></script>
# <script>
#   const { createSpinner } = loaderSpinner;
#   const spinner = createSpinner();
#   document.body.appendChild(spinner);
# </script>

#  Import in JavaScript
# javascript
# Copy
# Edit
# import 'loader-spinner/spinner.css';
# import { createSpinner } from 'loader-spinner';

# const spinner = createSpinner();
# document.body.appendChild(spinner);




# For React projects (including those set up with Vite), import and use the provided component.

# jsx
# Copy
# Edit
# import React from 'react';
# import LoaderSpinner from 'loader-spinner/LoaderSpinner';

# function App() {
#   return (
#     <div>
#       <h1>Loading...</h1>
#       <LoaderSpinner />
#     </div>
#   );
# }

# export default App;