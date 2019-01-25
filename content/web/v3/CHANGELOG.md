# Changelog
Changelog for MapsIndoors SDK for JavaScript. This document structure is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


<!-- ## [Unreleased] -->


## [3.0.0] - 2018-10-23
### Changed
- Script must now be loaded with apikey parameter instead of solutionId, e.g. `https://app.mapsindoors.com/mapsindoors/js/sdk/mapsindoors-3.0.0-rc0.js?apikey=57e4e4992e74800ef8b69718`
- All services are now shared instances, so they cannot be newed. E.g. you must rewrite `let directionsService = new mapsindoors.DirectionsService();` to `let miDirectionsService =  mapsindoors.DirectionsService;`
- Location click events for a MapsIndoors instance are now subscribable with the event name `click` instead of `location_click`, e.g.         `google.maps.event.addListener(myMapsIndoors, 'click', (poi) => { console.log(poi.id); });`
- `DirectionService.route()` has been renamed to `DirectionService.getRoute()`.
- `DirectionRenderer.setDirections()` has been renamed to `DirectionRenderer.setRoute()`.
- `DirectionService.getRoute()` request parameter `travelMode` has been renamed to `mode`.
- `DirectionRenderer.setDirections()` now only accepts a single route instead of a route result, e.g. `DirectionRenderer.setRoute(myRouteResult.routes[0])`.
- To highlight locations on a map through a `MapsIndoors` instance, instead of providing a query object to `MapsIndoors.find()`, you must now pass a list of `locationId`'s to `MapsIndoors.filter()`.

### Removed
- Removed `MapsIndoors.find()`, use `MapsIndoors.filter()` instead
- Removed `MapsIndoors.locate()`, use `MapsIndoors.filter()` instead

### Added
- Icons for single Locations can now be updated independantly, by referencing the location id. E.g. `myMapsIndoors.setDisplayRule('some-location-id', { icon: { url: 'https://icon.url' } });`

### Fixed
- Fixed a rendering bug that was causing MapsIndoors' map markers to occasionally disappear