import json

# Reading the JSON file
with open('../seeds.json', 'r') as file:
    data = json.load(file)

# Appending a new number to the array
data.append(100)  # You can change this number to the one you wish to append

# Writing the updated data back to the JSON file
with open('../seeds.json', 'w') as file:
    json.dump(data, file)