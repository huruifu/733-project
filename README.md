# 733-project

## Questions to be answered

* How to predict the fire size class? (classification)

* What will be the reasons for recent fires if occurred? (classification)

* What will be the most likely monthly frequency of fires for each state? (regression)


## Data sources

* https://www.fs.usda.gov/rds/archive/Catalog/RDS-2013-0009.5

* https://www.ncdc.noaa.gov/cdo-web/

* https://sedac.ciesin.columbia.edu/data/collection/gpw-v4

* https://www.weatherbit.io/account/dashboard


## Impact of this project

The forest fires come at a huge financial and ecological cost. With the prediction of the worldwide forest fires, this disaster can either be prevented or reponded in a timely manner. As a result, we wish our model or statistical findings could help governments and communities sustainably manage the fires. And then improving the biodiversity and reducing the negative impacts of economic development. 

## Application

* url: https://fireforest-app.herokuapp.com/

## Dataset
* url: https://1sfu-my.sharepoint.com/:f:/g/personal/yca432_sfu_ca/Enl8hA9-srRKhYWOTltd7y4BzyL8VOQ_2bPEf38X2gsdWw?e=5Jb3I0 (Need SFU office 365 account)

## File Guide 

* fire.ipynb (fire data EDA)
* fire_reason_predict.ipynb (What will be the reasons for recent fires if occurred?)
* fire 

* firesize_model.ipynb: fire size class prediction EDA and model constructions. (input dataset: etl_filtered_v1.zip)
* firesize_addition.ipynb: fire size class prediction density plots and other rebalanced techniques implemented. (input dataset: etl_filtered_v1.zip)

* monthly.ipynb : monthly fire frequency prediction model constructions. (input dataset: etl_filtered_v1.csv)
* monthly_autosklearn.ipynb: monthly fire frequency prediction model constructions using auto-sklearn, need to run on Colab. (input dataset: etl_filtered_v1.csv)
