Add a `GMSMapView` and a `MPMapControl` to the class
```
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
var venue:MPVenue? = nil
```
Setup map so that it shows the demo venue and initialise mapControl
```
self.map = GMSMapView.init(frame: CGRect.zero)
self.mapControl = MPMapControl.init(map: self.map!)

self.view = self.map

MPVenueProvider().getVenuesWithCompletion { (coll, err) in
    let venues:[MPVenue] = coll!.venues as! [MPVenue]
    self.venue = venues.first!
    let bounds = self.venue!.getBoundingBox()
    self.map?.animate(with: GMSCameraUpdate.fit(bounds!))
    self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Map Style", style: .plain, target: self, action: #selector(self.activateMapStyleSelector(sender:)))
}

c
 activateMapStyleSelector(sender: UIBarButtonItem) {

let alertController = UIAlertController(title: "Map Style", message: "Please Select Map Style", preferredStyle: .alert)

for style in venue!.styles! {
    let action = UIAlertAction(title: style.folder, style: .default) { (action) in
        self.mapControl?.mapStyle = style
    }
    alertController.addAction( action )
}
let cancel = UIAlertAction(title: "Cancel", style: .cancel)
alertController.addAction( cancel )

self.present(alertController, animated: true, completion: nil)


```

[See the sample in MapStylesController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Map Styles/MapStylesController.swift)
