### takes raw.json and outputs new version of bvdot.json, rdot.json & wsdot.json with each camera and its attributes
import json

rdot = []
bvdot = []
wsdot = []

raw = open(r'data\raw.json')
raw_content = json.loads(raw.read())
raw.close()

def convertOwner(owner):
    if owner == 'Bellevue' or owner=='COB':
        return 'BVDOT'
    elif owner == 'WSDOT':
        return owner
    elif owner == 'Redmond':
        return 'RDOT'
    else:
        return 'convert error'

for camera in raw_content['features']:
    properties = camera['properties']
    geometry = camera['geometry']
    id = convertOwner(properties['OwnedBy'])+'-'+properties['ID']
    url = properties['ID']+'L'
    address = properties['Display_Address'].rstrip()
    coordinates = {'latitude':geometry['coordinates'][1],'longitude':geometry['coordinates'][0]}
    owner = convertOwner(properties['OwnedBy'])
    cameraType = properties['CameraType']
    mediaType = properties['Media']

    object = {'id':id,'URL':url,'address':address,'coordinates':coordinates,'owner':owner,'type':cameraType,'media':mediaType}
    if owner == 'BVDOT':
        bvdot.append(object)
    elif owner == 'RDOT':
        rdot.append(object)
    elif owner == 'WSDOT':
        wsdot.append(object)


open(r'data\bvdot.json','w').write(json.dumps(bvdot))
open(r'data\rdot.json','w').write(json.dumps(rdot))
open(r'data\wsdot.json','w').write(json.dumps(wsdot))