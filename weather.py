import pandas as pd

frames = []
for i in range(9):
  temp = pd.read_csv(f"weather-merge/merged_{i+1}.csv", sep=",")
  frames.append(temp)
weather = pd.concat(frames)

weather.to_csv("weather.csv")