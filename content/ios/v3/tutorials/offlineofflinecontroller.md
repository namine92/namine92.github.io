Add a `GMSMapView` and a `MPMapControl` to the class
```
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
var syncButton: UIButton? = nil
var stackView: UIStackView? = nil
```
Setup map so that it shows the demo venue and initialise mapControl
```
self.map = GMSMapView.init(frame: CGRect.zero)
self.mapControl = MPMapControl.init(map: self.map!)
```
Setup a button that targets a method (`syncContent`) in your class
```
self.syncButton = UIButton.init()
self.syncButton!.setTitle("Sync Content", for: .normal)
self.syncButton!.setTitle("Synchronising...", for: .disabled)
self.syncButton!.addTarget(self, action: #selector(syncContent), for: .allTouchEvents)
self.syncButton!.backgroundColor = UIColor.blue
```
Arrange the map view and the button in a stackview
```
self.stackView = UIStackView.init(arrangedSubviews: [self.map!, self.syncButton!])
self.stackView!.axis = .vertical
view = stackView
```
Define an objective-c method `syncContent` that will receive events from your button, and handle them:

* Initialise `MySearchController`
* Assign self as delegate
* Present the new view controller
```
@objc func syncContent() {
    self.syncButton!.isEnabled = false
    MapsIndoors.synchronizeContent { (error) in
        DispatchQueue.main.async {
            self.syncButton!.isEnabled = true
        }
    }
}

```

[See the sample in OfflineController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS-Demo-Samples/blob/master/Offline/OfflineController.swift)
