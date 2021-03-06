 Show map 
```
self.map = GMSMapView.init(frame: CGRect.zero)

self.view = self.map
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 17)

self.mapControl = MPMapControl.init(map: self.map!)
```
 Show search on map 
```
let locations = MPLocationsProvider.init()
let queryObj = MPLocationQuery.init()

queryObj.categories = ["Toilet"]
queryObj.max = 50

locations.getLocationsUsing(queryObj) { (locationData, error) in
    if error == nil {
        self.mapControl?.searchResult = locationData!.list
        let firstLocation = locationData?.list?.first
        self.mapControl?.currentFloor = firstLocation?.floor         // You are not guaranteed that the visible floor contains any search results, so that is why we change floor
    }
}
```

[See the sample in ShowMultipleLocationsController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Show Multiple Locations/ShowMultipleLocationsController.swift)
