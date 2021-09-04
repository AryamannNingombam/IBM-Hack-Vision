import random
import csv
import numpy as np


# helper functions;

def return_random_binary_zero_more():
    return random.choice([0, 0,1])


def return_random_binary():
    return random.choice([0, 1])


def return_from_zero_to_range(range_):
    return random.choice(list(range(0, range_+1)))


with (open('./x.csv', 'w')) as f:
    writer = csv.writer(f)
    # making 100bk samples;
    writer.writerow(["Number","0-5 MH", "0-5 FH", "0-5 MU", "0-5 FH",
                     "5-15 MH", "5-15 FH", "5-15 MU", "5-15 FU",
                     "15-25 MH", "15-25 FH", "15-25 MU", "15-25 FU",
                     "25-40 MH", "25-40 FH", "25-40 MU", "25-40 FU",
                     "40-60 MH", "40-60 FH", "40-60 MU", "40-60 FU",
                     "60+ MH", "60+ FH", "60+ MU", "60+ FU",
                     "Non-Veg","Veg","Vegans",
                     "Festivals",
                     "Holidays"
                     ])
    for _ in range(100000):
        # getting values for the age category (0-5,5-15,15-25,25-40,40-60,60+)
        # 6 in total;
        appending_array = [_+1]
        total_members = 0
        for _2 in range(6):
            # for each gender;
            for _3 in range(2):
                # for healthy and unhealthy
                for _4 in range(2):
                    result = return_random_binary_zero_more()
                    appending_array = np.append(appending_array, result)
                    total_members += result

        # adding total non-vegetarians
        non_vegetarians = return_from_zero_to_range(total_members//3)
        appending_array = np.append(appending_array, non_vegetarians)

        # adding total vegetarians
        vegetarians = return_from_zero_to_range(total_members//3)
        appending_array = np.append(appending_array, vegetarians)

        # adding total vegans (the remaining would be assumed to be vegans)
        appending_array = np.append(
            appending_array, total_members-non_vegetarians-vegetarians)

        # special features (festival/guest,holidays)
        appending_array = np.append(appending_array, return_random_binary())
        appending_array = np.append(appending_array, return_random_binary())
        writer.writerow(appending_array)
