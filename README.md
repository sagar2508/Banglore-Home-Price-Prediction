# BangaloreHousePredictionModel
# House Price Prediction Model

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Model Explanation](#model-explanation)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project predicts house prices in Bangalore using various features such as location, square footage, number of bedrooms, and bathrooms. The model is built using machine learning algorithms and deployed using Flask for web interaction.

## Features
- Data preprocessing and cleaning
- Feature engineering
- Model training and evaluation
- Deployment using Flask with a web interface for user input

## Technologies Used
- Python
- Pandas
- NumPy
- Scikit-learn
- Flask
- HTML, CSS, JavaScript

## Features
- Data preprocessing and cleaning
- Feature engineering
- Model training and evaluation
- Deployment using Flask with a web interface for user input
- Technologies Used
- Python
- Pandas
- NumPy
- Scikit-learn
- Flask
- HTML, CSS, JavaScript

## BHP/
- │ Server/
- ├── server.py                # Flask application
- ├── artifacts/                   # Directory for storing the model
- │   ├── banglore_home_prices_model.pickle
- ├── Columns.json                 # JSON file for data columns
-  
- │
- ├── Client/                  # Static files for the website
- │  ├── app.css
-    ├── index.html
-    ├──app.jss
- │
- ├── notebooks/               # Jupyter notebook for data analysis and model training
- │   ├── HomePricePrediction.ipynb
- │
- ├── data/                    # Directory for datasets
- │   ├── Banglore.csv
-│
- └── README.md                # README file

## Model Explanation
The model uses a linear regression algorithm to predict house prices. The features used for training include location, square footage, number of bedrooms, and bathrooms. Data preprocessing includes handling missing values, encoding categorical features, and standardizing numerical features.

## Results
The model achieved accuracy of 84% on the test dataset. 

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any features, bug fixes, or enhancements.

## License
This project is licensed under the MIT License.

## Contact
- Sagar Kumar
- tanwarsagar936@gmail.com
