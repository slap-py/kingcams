import json

f = open('data/rdot_raw.json').read()
data = json.loads(f)
print(data['features'][0])