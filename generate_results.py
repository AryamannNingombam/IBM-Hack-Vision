import numpy as np
import csv
import random


def return_from_range(range1, range2):
    return random.choice(list(range(range1, range2+1)))


with open('./y.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(["Number","Rice(qty)", "Rice(duration)",
                  "Wheat(qty)", "Wheat(duration)",
                  "Eggs(qty)", "Eggs(duration)",
                  "Milk(qty)", "Milk(duration)",
                  "Sugar(qty)", "Sugar(duration)",
                  "Fruits(qty)", "Fruits(duration)",
                  "Chicken(qty)", "Chicken(duration)",
                  "Fish(qty)", "Fish(duration)",
                  ])
    for _ in range(100000):
        appending_array = np.array([_+1], dtype=np.int32)
        # for rice
        appending_array = np.append(appending_array,return_from_range(5,30))
        appending_array = np.append(appending_array,return_from_range(5,30))

        # for wheat
        appending_array = np.append(appending_array,return_from_range(2,15))
        appending_array = np.append(appending_array,return_from_range(5,30))
        
        # for eggs
        appending_array = np.append(appending_array,return_from_range(1,3))
        appending_array = np.append(appending_array,return_from_range(3,12))
        
        # for milk
        appending_array = np.append(appending_array,return_from_range(3,5))
        appending_array = np.append(appending_array,return_from_range(2,5))

        # for sugar
        appending_array = np.append(appending_array,return_from_range(4,10))
        appending_array = np.append(appending_array,return_from_range(20,25))

        # for fruits/veggies
        appending_array = np.append(appending_array,return_from_range(1,3))
        appending_array = np.append(appending_array,return_from_range(10,12))

        # for chicken
        appending_array = np.append(appending_array,return_from_range(1,4))
        appending_array = np.append(appending_array,return_from_range(1,3))
        
        # for fish   
        appending_array = np.append(appending_array,return_from_range(1,4))
        appending_array = np.append(appending_array,return_from_range(1,3))


        writer.writerow(appending_array)