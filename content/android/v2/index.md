---
title: MapsIndoors for Android - Getting Started

---

## Basic Example

You will find in the [link](https://github.com/namine92/mapsIndooriOSTut) a repo that contains the minimum code to start a MapsIndoors project.

You can also follow the steps below to start your app from scratch or to enhance the Basic Examples, more features will be explained in the [guides](/android/v2/guides).

## Setup MapsIndoors

Add the MapsIndoors SDK as a dependency to your project. The AAR for the MapsIndoors SDK contains both Java classes, SDK resources and AndroidManifest.xml template which gets merged into your application’s AndroidManifest.xml during build process. Add or merge in the following to your app’s build gradle file (usually called build.gradle).

First, make sure that the minimum Android SDK version is 21 or above:

```groovy
android {
    defaultConfig {
        minSdkVersion 21
    }
    ...
}
```

Secondly, MapsIndoors rely on Java 8 features, so you must add the following compile options, also in *android* section of your *build.gradle* file:

```groovy
android {
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

Finally, add the following dependencies and the MapsIndoors maven repository:

```groovy
dependencies {
    implementation 'com.android.support:support-v4:27.1.0'
    implementation 'com.google.android.gms:play-services-maps:11.8.0'
    implementation 'com.google.code.gson:gson:2.8.2'
    implementation 'com.mapspeople.mapsindoors:mapsindoorssdk:{{%product-version%}}@aar'
}
repositories{
    maven {
        url 'http://maven.mapsindoors.com/'
    }
}
```



## Setup a Google Map with MapsIndoors

Use the `MPMapControl` class to set up a Google map with MapsPeople venues, buildings & locations. Place the following code in the `viewDidLoad` method in your view controller displaying the Google map.

```
// Place the map above the demo-building
let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
// Initialise the Google map
mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
view = mapView
let myMapControl = MPMapControl.init(map: mapView)!
```

Head to the [guides](/ios/v2/guides) to learn about searching, getting directions, display settings and more.

## Download and Bundle Offline Content

If needed, it is possible to bundle MapsIndoors content to make your app work better in offline or poor network conditions. (Please note that while MapsIndoors content can be used offline, Google Maps does not provide offline features. Outdoor wayfinding, google places searches will be unavailable and the surrounding map may be unavailable unless it has been cached.)

In your app targets build phases, add a "Run Script" build phase containing the following command:

```
${SRCROOT}/Pods/MapsIndoors/Scripts/derive_ressources.sh --content-key=YOUR_MAPSINDOORS_CONTENT_KEY --api-key=YOUR_MAPSINDOORS_API_KEY --language=en
```

Replace:

* `YOUR_MAPSINDOORS_CONTENT_KEY` with your own MapsIndoors content key
* `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API key. Some MapsIndoors solutions is deployed with open APIs, in this case, you may remove this input parameter entirely
* `en` with any one of the languages that your MapsIndoors solution supports (Two letter ISO-639-1 language code). If you only have one language deployed you may remove this input parameter entirely

Depending on the overall size of your MapsIndoors deployment, this may take some time, so during development you might want to check the "Run script only when installing" option. This means that content will only be bundled when archiving for e.g. a release.