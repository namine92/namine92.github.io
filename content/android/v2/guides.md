---

title: MapsIndoors SDK for iOS v2 - Guides

---

## Searching for Locations and Displaying the Results on a Map

Use the `MPLocationsProvider` class to search for content in your MapsIndoors solution.

This example shows how to setup a query for the nearest single best matching location and display the result on the map:

```
mLocationsProvider = new MPLocationsProvider();

mLocationQueryBuilder =     new LocationQuery.Builder();

// init the query builder, in this case we will query the coffee machine in our office
mLocationQueryBuilder.
        setQuery("coffee machine").
        setOrderBy( LocationQuery.NO_ORDER ).
        setFloor(1).
        setMaxResults(1);
// Build the query
mLocationQuery = mLocationQueryBuilder.build();
// Query the data
mLocationsProvider.getLocationsAsync( mLocationQuery, new OnLocationsReadyListener()
{
    @Override
    public void onLocationsReady( @Nullable List< Location > locations, @Nullable MIError error )
    {
        if( locations != null && locations.size() != 0 )
        {
            mMapControl.displaySearchResults( Collections.singletonList( locations.get( 0 ) ), true );
        }
    }
});
```

This example shows how to setup a query for a group of locations and display the result on the map:

```
mLocationsProvider = new MPLocationsProvider();

mLocationQueryBuilder =     new LocationQuery.Builder();

// init the query builder, in this case we will query the coffee machine in our office
mLocationQueryBuilder.
        setQuery("Toilet").
        setOrderBy( LocationQuery.NO_ORDER ).
        setFloor(1).
        setMaxResults(50);
// Build the query
mLocationQuery = mLocationQueryBuilder.build();
// Query the data
mLocationsProvider.getLocationsAsync( mLocationQuery, new OnLocationsReadyListener()
{
    @Override
    public void onLocationsReady( @Nullable List< Location > locations, @Nullable MIError error )
    {
        if( locations != null && locations.size() != 0 )
        {
            mMapControl.displaySearchResults( locations, true );
        }
    }
});
```

Please note that you are not guaranteed that the visible floor contains any search results, so that is why we change floor in the above example.
