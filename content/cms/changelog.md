---
title: Changelog
---

## [3.5.0] - 20-03-2018

### Added
 - Navigate between buildings or reset the venue view in export map.
 - Filter locations by floor (list view).
 - New Map (google maps js api 3.32).

### Changed
 - Moved location type to the top to better indicate its importance. 
 - The name of a location is now automatically set to the type. Can still be changed if needed.
 - Split display settings and types in two pages.
 - Improved analytics.

### Fixed
 - Floor selector displays name rather than ID.
 - Displaying default language name on venues instead of Adm. ID.

## [3.4.1] - 20-02-2018

### Added

### Changed

### Fixed
- Creating a new location with custom properties did not work on all solutions.

## [3.4.0] - 20-02-2018

### Added
- Select all/deselect all, locations table.
- Graph bounds and editing.

### Changed
- Refactored locations list.
- Improved ordering of locations.
- Improved database performance greatly improving system responsiveness when loading many locations.
- Ordered types by viewdistance.

### Fixed
- In some situations custom fields on locations would not save correctly.
- Error message when trying to add an existing user.

## [3.3.1] - 19-01-2018

### Added

### Changed

### Fixed
- Deleting locations now works.

## [3.3.0] - 11-12-2017

### Added
- Venue bounds, network visualiser.
- Edit venue bounds.
- Remember last venue (until changing solution).
- Create new venue.
- Delete venue.
- Toggle labels for locations map.
- Solution types.
- Solution expiration date.

### Changed
- Moved from Angular Http to Angular HttpClient.
- Buildings moved to separate page.

### Fixed

## [3.2.0] - 29-11-2017

### Added
- Label rotation and type for export map.
- Icon size for export map.
- Master data (venue, buildings) page.
- Tooltip for type and image in edit panel for locations.

### Changed
- Tighter display settings page allowing more types to be shown at the time.

### Fixed
- Styling issues related to toolbars.

## [3.1.1] - 16-11-2017

### Added

### Changed

### Fixed
- Only use localstorage to check solution when reloading.
- Collapsing the sidebar updates the map-size, preventing grey areas with no tiles.
- Fixed an error when trying to save a location with no name set for one or more languages.

## [3.1.0] - 14-11-2017

### Added
- Zoom level indcator.
- Modified and modified by to the location list.

### Changed
- Updated to Angular 5.
- Types has a create/edit panel.
- Types page changed to focus more on display settings.

### Fixed
- Bug where categories would not be set on locations.
- Bug where new locations with categories would not be created.
- Login issues when using the email/password form.

## [3.0.0] - 06-11-2017

### Added
- Customer and partners page.
- App configurations page.
- Network visualiser.
- Categories management. It is now possible to create, edit and delete categories.
- Entering a category name when multiple languages are present in a solution will try to translate via Google translate API.
- Import graphs.
- Automatic user invitaions.
- Reset password.
- Solutions management.
- New filters for locations.

### Changed
- Locations are now managed on venue level.
- Menu is split into venue mangement, general settings and administration.
- Top level venue select.
- Type settings has a new layout which is easier to use and takes up less space.
- Venue and buildings became the Master data page.
- Locations is now one page with view settings for map and list.
- User management for customers now lives in a solution limited space.
- User management reworked.
- New bulk edit.
- New export map.

### Fixed
- Remember last solution.
- Custom fields update when changing type of a location.
- Location search now works as intended.
- Hundreds of bugs. Too many to list, the codebase is entirely new.

### Removed
- AngularJS.
- Bootstrap 3.0.
- Unused libraries.
- Complexity.
