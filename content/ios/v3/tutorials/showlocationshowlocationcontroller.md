 Show map 
```
self.map = GMSMapView.init(frame: CGRect.zero)

self.view = self.map
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)

self.mapControl = MPMapControl.init(map: self.map!)

let locations = MPLocationsProvider.init()
let queryObj = MPLocationQuery.init()

queryObj.query = "Paris"
queryObj.max = 1

locations.getLocationsUsing(queryObj) { (locationData, error) in
    if error == nil {
        let firstLocation = locationData?.list?.first
        self.mapControl?.selectedLocation = firstLocation
        self.mapControl?.currentFloor = firstLocation?.floor
    }
}
```

[See the sample in ShowLocationController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Show Location/ShowLocationController.swift)
