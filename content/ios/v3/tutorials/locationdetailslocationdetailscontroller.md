---
title: Show Location Details
---

This is an example of displaying some details of a MapsIndoors location

Start by creating a `UIViewController` class that conforms to the `GMSMapViewDelegate` protocol
```
class LocationDetailsController: UIViewController, GMSMapViewDelegate { 
```
Add a `GMSMapView` and a `MPMapControl` to the class
```
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```
Add other views needed for this example
```
var detailsView:UIStackView = UIStackView.init()
var mainView:UIStackView = UIStackView.init()
var nameLabel = UILabel.init()
var descrLabel = UILabel.init()
```
Inside `viewDidLoad`, setup the map and the mapControl instance
```
self.map = GMSMapView.init(frame: CGRect.zero)
self.map?.delegate = self
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
```
Setup the label views
```
nameLabel = UILabel.init()
descrLabel = UILabel.init()
nameLabel.backgroundColor = UIColor.white
descrLabel.backgroundColor = UIColor.white
```
Arrange the labels inside a stackview
```
detailsView = UIStackView.init(arrangedSubviews: [nameLabel, descrLabel])
detailsView.axis = .vertical
```
Arrange the map and the stackview inside another stackview
```
mainView = UIStackView.init(arrangedSubviews: [map!, detailsView])
mainView.axis = .vertical
```
When marker is tapped, get related MapsIndoors location object and set label text, based on the name and description of the location
```
func mapView(_ mapView: GMSMapView, didTap marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        self.nameLabel.text = location?.name
        self.descrLabel.text = location?.descr
    }
    return false
}
```
When map is tapped, reset label text
```
func mapView(_ mapView: GMSMapView, didTapAt coordinate: CLLocationCoordinate2D) {
    self.nameLabel.text = nil
    self.descrLabel.text = nil
}
```

[See the sample in LocationDetailsController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Location Details/LocationDetailsController.swift)
