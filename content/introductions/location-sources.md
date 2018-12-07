---
title: Location Data Sources
---

> Note! This document describes a pre-release feature. We reserve the right to change this feature and the corresponding interfaces without further notice. Any mentioned SDK versions are not intended for production use.

At MapsPeople we are in the process of shaping up a new feature in MapsIndoors SDK for Android and iOS called Location Data Sources. Basically we are making it possible to register your own custom data source, adhering to a very simple interface, best described in the following illustration:

![Location Data Sources, Observers and their relation](source_observer.png)

## Creating your own Location Source
1. Implement a `LocationSource` that pulls data from your own or a 3rd party database, API or backend and convert this data into MapsIndoors `Location`'s
2. Pass the Locations as updates to MapsIndoors through the interface methods of the subscribing `LocationObserver`'s in your `LocationSource` implementation.

The Location Data Sources feature is expected to be released medio Q1 2019. If you are interested in evaluating this feature in a pre-release stage, please read on.

This feature is present in the MapsIndoors SDK for iOS version 3.0.0-alpha. To install this version, just follow the [latest version 2.1.6 install guide](/ios/v2)

Create an implementation of the `MPLocationSource` interface, implementing all the required methods. When you call `MPLocationObserver.onLocationsUpdate()` and provide results in `MPLocationSource.getLocations()` you need to create instances of `MPLocation`'s. This is done using a builder called `MPLocationUpdate`. See an example here:

```
let locationUpdate = MPLocationUpdate.init(id: 134, from: self)                         //Set unique id
locationUpdate.setType("ViewPoints")                                                    //Set type
locationUpdate.addPropertyValue("Empire State Building", forKey: MPLocationFieldName)   //Set name
locationUpdate.setFloor(86)                                                             //Set floor index
locationUpdate.setPosition(CLLocationCoordinate2DMake(40.7484445, -73.9878584))         //Set position
let location = locationUpdate.location()                                                //Generate location
```

While the location ID needs to be unique within your own Location Source, the ID does not need to be unique across all Location Sources.

When you have implemented all methods of your Location Source, you must register the source using the static method `MapsIndoors.register()`. The following example adds the MapsIndoors default location source as well:

```
MapsIndoors.register([
            MPMapsIndoorsLocationSource.init(),
            MyLocationsDataSource.init()
        ])
```

