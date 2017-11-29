---

title: Changelog

---
# Changelog

## [3.1.1] - 16-11-2017

### Added

### Changed

### Fixed
- Only use localstorage to check solution when reloading.
- Collapsing the sidebar updates the map-size, preventing grey areas with no tiles.
- Fixed an error when trying to save a location with no name set for one or more languages.

>>>>>>> develop
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
