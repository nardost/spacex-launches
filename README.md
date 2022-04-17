# SpaceX Launches

## Material UI Theme Used

Many of the components in this React application build on Material UI starter components.
Much credit is, therefore, due to https://mui.com/.

## Link to Presskit

Instead of making the entire row clickable, I have included a clickable icon as the first column.
Some presskit links are null and are indicated by a red icon.

## Rocket Details

Rocket details are too much to fit in a single row, and, therefore, I have chosen to implement
a Rocket component.
Only a fraction of the details is displayed in the Rocket component.

## Endpoint Used

```https://api.spacexdata.com/v5/launches/query```

## Query Payload

```javascript
{
    query: {},
    options: {
      select: "payloads rocket links flight_number name date_utc",
      limit: pageSize,
      page: page,
      sort: { date_utc: "desc" },
      populate: [
        {
          path: "payloads",
          select: {
            name: 1,
          },
        },
        {
          path: "rocket",
        },
        {
          path: "links",
          select: {
            presskit: 1,
          },
        },
      ],
    }
```
