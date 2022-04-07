# 733-project

## Questions to be answered

* What factors are most likely to cause forest fires?

* Which regions are most likely to have forest fires in each month? 

* What factors determine the burning time of the forest fires or the spread of the forest fires?


## Data sources

* https://firms.modaps.eosdis.nasa.gov/download/

* https://www.fs.usda.gov/rds/archive/Catalog/RDS-2013-0009.5

* https://www.ncdc.noaa.gov/cdo-web/

* https://earthdata.nasa.gov/learn/toolkits/wildfires

* https://cwfis.cfs.nrcan.gc.ca/datamart

* https://www2.gov.bc.ca/gov/content/safety/wildfire-status/about-bcws

* https://archive.ics.uci.edu/ml/datasets/forest+fires

* https://data-nifc.opendata.arcgis.com/search?collection=Dataset

* https://www.statcan.gc.ca/search/results/site-search?q=forest%20fire&fq=stclac:2&wb-srch-sub=search

## Impact of this project

The forest fires come at a huge financial and ecological cost. With the prediction of the worldwide forest fires, this disaster can either be prevented or reponded in a timely manner. As a result, we wish our model or statistical findings could help governments and communities sustainably manage the fires. And then improving the biodiversity and reducing the negative impacts of economic development. 

## Build Application
Need to download node js, npm and conda in order to run the application.

### Download model files

Download folder from https://drive.google.com/drive/folders/1fYc3QAgeyv9YObTFwgOR4DrwT7LAchBE?usp=sharing

Unzipping all zip files inside the folder.

### Run frontend application

In the terminal, use the following commands:

* cd fireforest-app

* npm install

* npm start

### Run backend application

Open another terminal, make sure current directory is at the root of the project directory. Then use the following commands:

* conda create --name project --file requirements.txt

* python app.py
