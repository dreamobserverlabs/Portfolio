export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'game' | 'desktop';
  categoryLabel: string;
  platform: string;
  description: string;
  problem: string;
  implementation: string;
  keySpecs: { label: string; value: string }[];
  tags: string[];
  features: string[];
  architecture: string[];
  mockupType:
    | 'vector-converter'
    | 'cog-viewer'
    | 'antic-maps'
    | 'earthquake-map'
    | 'travel-explorer'
    | 'spatial-collector'
    | 'static-rain'
    | 'spectral-indices'
    | 'ndvi-timeseries'
    | 'crs-transform'
    | 'terrain-3d';
}

export const PORTFOLIO_CONFIG = {
  brand: {
    name: 'DreamObserver',
    tagline: 'Web, desktop, mobile, and games',
    paragraphs: [
      'DreamObserver develops and publishes spatial applications for the web, for mobile devices, and for the desktop. Places and the information tied to them are gathered on maps, satellite and aerial images are studied, and measurements are drawn from those images. Mobile applications of other kinds, and mobile games, are developed as well.',
      'The applications include the disciplines of geographic information systems, remote sensing, image analysis, computer vision, and large language models. Geographic information systems provide the basis for organizing spatial data and using it on a map. Remote sensing and image analysis read satellite and aerial imagery and turn it into measurements. Computer vision is used to understand what an image contains. Large language models take part in products that work with text and language.',
    ],
    email: 'bekir@dreamobserver.dev',
    github: 'https://github.com/dreamobserverlabs',
    focusAreas: [
      { label: 'Geographic information systems', icon: 'map' },
      { label: 'Remote sensing', icon: 'satellite' },
      { label: 'Image analysis', icon: 'scan' },
      { label: 'Computer vision', icon: 'eye' },
      { label: 'Large language models', icon: 'message' },
    ],
  },

  projects: [
    {
      id: 'spatial-vector-data-converter',
      title: 'Spatial Vector Data Converter',
      subtitle: 'Web tool for geospatial format conversion and CRS reprojection',
      category: 'web',
      categoryLabel: 'Web application',
      platform: 'Web · Next.js · Python',
      description:
        'A browser tool for moving vector data between GeoJSON, zipped Shapefile, KML, and GeoPackage, with coordinate reprojection.',
      problem:
        'GIS analysts often meet incompatible vector formats and need a quick reprojection without opening QGIS or ArcGIS.',
      implementation:
        'A Next.js interface sits in front of a Python worker that uses GDAL/OGR and GeoPandas. The user uploads a file, previews the geometry, picks a target CRS such as EPSG:4326 or EPSG:3857, and downloads the result. Nest.js checks the upload before it reaches the worker.',
      keySpecs: [
        { label: 'Formats', value: 'GeoJSON, SHP, KML, GPKG' },
        { label: 'Projection', value: 'PROJ / EPSG' },
        { label: 'Engine', value: 'Python GDAL & GeoPandas' },
      ],
      tags: ['Next.js', 'React', 'Python', 'GDAL', 'GeoPandas', 'Nest.js'],
      features: [
        'Drag-and-drop upload with a map preview of the vectors',
        'Coordinate transformation between common EPSG codes',
        'Attribute table preview and a check of the column schema',
        'Download as zipped Shapefile, GeoJSON, or GeoPackage',
      ],
      architecture: [
        'Next.js interface with MapLibre GL for the geometry preview',
        'Nest.js API for upload handling',
        'Python worker using OGR drivers for the conversion',
      ],
      mockupType: 'vector-converter',
    },
    {
      id: 'cloud-optimized-geotiff-viewer',
      title: 'Cloud Optimized GeoTIFF Viewer',
      subtitle: 'Browser viewer for streaming Cloud Optimized GeoTIFF rasters',
      category: 'web',
      categoryLabel: 'Web application',
      platform: 'Web · Next.js · TiTiler · Python',
      description:
        'A map client for inspecting Cloud Optimized GeoTIFFs. It reads the tiles in the current view through HTTP range requests, instead of the whole file.',
      problem:
        'High-resolution imagery and elevation models are often many gigabytes. Downloading the whole file is a poor way to check it.',
      implementation:
        'TiTiler serves the raster. A Next.js map asks only for the overviews that match the current view and zoom. NDVI band math and a pixel probe sit on that same view.',
      keySpecs: [
        { label: 'Raster access', value: 'HTTP range requests (COG)' },
        { label: 'Band math', value: 'NDVI and true color' },
        { label: 'Tile service', value: 'TiTiler and Rasterio' },
      ],
      tags: ['Next.js', 'React', 'Python', 'Rasterio', 'TiTiler', 'WebGL'],
      features: [
        'Read a cloud object by URL, using HTTP range requests',
        'NDVI from near-infrared and red bands',
        'Click a pixel to read elevation or reflectance',
        'Colormap choice for terrain and multispectral bands',
      ],
      architecture: [
        'Next.js client with a MapLibre raster layer',
        'TiTiler service in a container',
        'Reads aimed at S3 and Google Cloud Storage',
      ],
      mockupType: 'cog-viewer',
    },
    {
      id: 'ancient-city-maps',
      title: 'Ancient City Maps',
      subtitle: 'Historical map of ancient settlements',
      category: 'web',
      categoryLabel: 'Web application',
      platform: 'Web · Next.js · PostGIS · Python',
      description:
        'A catalog of ancient Mediterranean and Anatolian settlements: walls, monuments, and the ground they stood on.',
      problem:
        'Archaeological plans often stay inside papers. One map makes the sites easier to compare.',
      implementation:
        'Published excavation plans are traced and placed on modern coordinates. PostGIS stores the features. Nest.js serves vector tiles. The Next.js map uses a muted historical style and a filter for period.',
      keySpecs: [
        { label: 'Database', value: 'PostgreSQL and PostGIS' },
        { label: 'Map rendering', value: 'Vector tiles (MVT)' },
        { label: 'Historical range', value: 'Archaic to Byzantine' },
      ],
      tags: ['Next.js', 'React', 'PostGIS', 'Python', 'Nest.js'],
      features: [
        'A period filter for the archaeological layers',
        'Polygons for acropolises, theaters, and agoras',
        'A card for each site, with coordinates and a short history',
        'Elevation contours where the terrain explains the walls',
      ],
      architecture: [
        'PostGIS for polygons, lines, and points',
        'Nest.js serving GeoJSON and vector tiles',
        'Next.js client with a restrained historical map style',
      ],
      mockupType: 'antic-maps',
    },
    {
      id: 'earthquake-map',
      title: 'Earthquake Map',
      subtitle: 'Seismic map with fault lines',
      category: 'web',
      categoryLabel: 'Web application',
      platform: 'Web · React · Next.js · Nest.js',
      description:
        'A map of recent earthquakes. Magnitude, depth, and major fault lines share one view.',
      problem:
        'Public earthquake maps are often crowded, and many of them leave out the faults next to the event.',
      implementation:
        'A Nest.js job reads public GeoJSON from USGS and EMSC about once a minute. The Next.js map draws clustered circles, a depth color, and a fault overlay.',
      keySpecs: [
        { label: 'Sources', value: 'USGS and EMSC GeoJSON' },
        { label: 'Refresh', value: 'About once a minute' },
        { label: 'Context layer', value: 'Tectonic boundaries' },
      ],
      tags: ['Next.js', 'React', 'Nest.js', 'GeoJSON'],
      features: [
        'Marker color by focal depth',
        'A magnitude filter, such as M4.0 and above',
        'Fault lines and plate boundaries on the same map',
        'An event card with time and epicenter',
      ],
      architecture: [
        'Nest.js worker that fetches and normalizes the feeds',
        'A short-lived cache in front of the map',
        'Next.js client with clustering for dense regions',
      ],
      mockupType: 'earthquake-map',
    },
    {
      id: 'satellite-index-calculator',
      title: 'Satellite Image Index Calculator',
      subtitle: 'Spectral indices from satellite band combinations',
      category: 'desktop',
      categoryLabel: 'Terminal application',
      platform: 'Desktop · Python',
      description:
        'A Python command-line tool that reads a multiband satellite image and writes water, vegetation, and burn indices from named band pairs.',
      problem:
        'NDVI, NDWI, and NBR are short formulas on two bands. Running each one by hand on the same scene is slow, and the band order is easy to mix up.',
      implementation:
        'Rasterio opens the scene. The operator names the bands, or passes a sensor preset such as Sentinel-2. NumPy computes NDVI, NDWI, NBR, and any extra pair given as a formula. Each index is written as its own single-band GeoTIFF, with the source CRS and transform kept.',
      keySpecs: [
        { label: 'Interface', value: 'Command line' },
        { label: 'Library', value: 'Rasterio and NumPy' },
        { label: 'Indices', value: 'NDVI, NDWI, NBR, custom pairs' },
      ],
      tags: ['Python', 'Rasterio', 'NumPy', 'GeoTIFF'],
      features: [
        'Presets for common sensors, with band names such as near-infrared and red',
        'Water, vegetation, and burn indices from the same scene',
        'A custom two-band formula when the preset is not enough',
        'One GeoTIFF per index, with the source georeferencing kept',
      ],
      architecture: [
        'Rasterio reads the bands and the raster profile',
        'NumPy applies the index formula',
        'Each output reuses the source transform and CRS',
      ],
      mockupType: 'spectral-indices',
    },
    {
      id: 'ndvi-time-series',
      title: 'NDVI Time Series Builder',
      subtitle: 'NDVI across a date range for a chosen area',
      category: 'desktop',
      categoryLabel: 'Terminal application',
      platform: 'Desktop · Python',
      description:
        'A Python tool that builds an NDVI series for a selected area between two dates.',
      problem:
        'A single NDVI image hides the season. A field, a burn scar, or a crop is easier to read as a sequence of values.',
      implementation:
        'The operator passes a bounding box or a vector outline, plus a start date and an end date. The tool searches a STAC catalog for Sentinel-2 scenes, leaves out cloudy observations, computes NDVI inside the area, and writes the mean value for each date.',
      keySpecs: [
        { label: 'Input', value: 'Area, start date, end date' },
        { label: 'Scenes', value: 'Sentinel-2 through STAC' },
        { label: 'Output', value: 'A table and a plot' },
      ],
      tags: ['Python', 'Rasterio', 'STAC', 'NDVI'],
      features: [
        'An area from a bounding box or a vector file',
        'A date window, with cloudy scenes left out of the mean',
        'Mean NDVI for each remaining scene',
        'A CSV of the series and a plot against time',
      ],
      architecture: [
        'Scene search against a STAC catalog',
        'A windowed raster read inside the chosen area',
        'A table of date, scene id, and mean NDVI',
      ],
      mockupType: 'ndvi-timeseries',
    },
    {
      id: 'raster-vector-crs',
      title: 'Raster and Vector Coordinate Transform',
      subtitle: 'One target CRS for rasters and vectors',
      category: 'desktop',
      categoryLabel: 'Terminal application',
      platform: 'Desktop · Python',
      description:
        'A command-line tool that reprojects raster files and vector files into the same coordinate reference system.',
      problem:
        'A satellite image and the parcels drawn on top of it often arrive with different EPSG codes. They cannot share a map until both use one code.',
      implementation:
        'GDAL warps each raster. GeoPandas reprojects each vector. The operator sets one target EPSG code, and chooses the resampling method for the raster. Shapefile, GeoPackage, GeoJSON, KML, and GeoTIFF all come out with that code.',
      keySpecs: [
        { label: 'Rasters', value: 'GDAL warp' },
        { label: 'Vectors', value: 'GeoPandas' },
        { label: 'Target', value: 'One EPSG code for every file' },
      ],
      tags: ['Python', 'GDAL', 'GeoPandas', 'Rasterio'],
      features: [
        'GeoTIFF and the other raster formats GDAL reads',
        'Shapefile, GeoPackage, GeoJSON, and KML',
        'A chosen resampling method for the raster',
        'The same target CRS written into every output',
      ],
      architecture: [
        'A Python command-line entry point',
        'GDAL for the raster warp',
        'GeoPandas for the vector reprojection',
      ],
      mockupType: 'crs-transform',
    },
    {
      id: 'terrain-surface',
      title: '3D Terrain Surface Viewer',
      subtitle: 'A terrain surface from an elevation raster',
      category: 'desktop',
      categoryLabel: 'Desktop application',
      platform: 'Python · PyVista',
      description:
        'A desktop view of a digital elevation model as a 3D surface, with height shading and an optional draped image.',
      problem:
        'A flat elevation raster hides the shape of a valley, a ridge, or a cut. A surface makes that shape readable.',
      implementation:
        'Rasterio reads the elevation GeoTIFF. The grid becomes a mesh, with one vertex per cell. PyVista opens a local 3D window. Vertical exaggeration is adjustable, and an orthophoto can be draped on the mesh. The camera orbits the surface.',
      keySpecs: [
        { label: 'Source', value: 'GeoTIFF elevation model' },
        { label: 'Mesh', value: 'A vertex per elevation cell' },
        { label: 'View', value: 'Local 3D window, PyVista' },
      ],
      tags: ['Python', 'Rasterio', 'PyVista', 'DEM'],
      features: [
        'Orbit, pan, and zoom on the surface',
        'Adjustable vertical exaggeration',
        'Height shading, or an image draped on the mesh',
        'An elevation readout at the cursor',
      ],
      architecture: [
        'Rasterio reads the elevation grid and its transform',
        'A mesh built from that grid',
        'PyVista draws the surface in a local window',
      ],
      mockupType: 'terrain-3d',
    },
    {
      id: 'travel-explorer',
      title: 'Travel Explorer',
      subtitle: 'Offline hiking and trail guide',
      category: 'mobile',
      categoryLabel: 'Mobile application',
      platform: 'Mobile · React Native',
      description:
        'A phone app for hikers: offline topographic maps, a recorded track, and an elevation profile.',
      problem:
        'Phone signal disappears on many trails, and an online map is useless there.',
      implementation:
        'A React Native app stores map regions as MBTiles and tracks in SQLite. The user downloads a region first, then records a GPS track and reads the elevation. A Python utility cuts those MBTiles from OpenStreetMap data.',
      keySpecs: [
        { label: 'Framework', value: 'React Native' },
        { label: 'Offline storage', value: 'MBTiles and SQLite' },
        { label: 'Location', value: 'GPS track on the device' },
      ],
      tags: ['React Native', 'Python', 'SQLite', 'MBTiles'],
      features: [
        'Offline maps from a downloaded MBTiles package',
        'Elevation along the track: ascent, descent, and grade',
        'GPX recording with waypoints and a short note',
        'A bearing back to the trailhead',
      ],
      architecture: [
        'React Native client with the device location API',
        'SQLite for tracks and waypoints',
        'Python utilities to package MBTiles',
      ],
      mockupType: 'travel-explorer',
    },
    {
      id: 'spatial-data-collector',
      title: 'Spatial Data Collector',
      subtitle: 'Field app for points, lines, and polygons',
      category: 'mobile',
      categoryLabel: 'Mobile application',
      platform: 'Mobile · React Native · Nest.js',
      description:
        'A survey app for logging point, line, and polygon features with a short attribute form.',
      problem:
        'Licensed field GIS tools are heavy when the job is a geometry, a few attributes, and an export.',
      implementation:
        'A React Native app keeps the survey on the phone. The operator places points, walks a line, or taps polygon corners, with a GPS accuracy ring on screen. When the network returns, GeoJSON syncs to Nest.js and PostGIS.',
      keySpecs: [
        { label: 'Geometry', value: 'Point, line, polygon' },
        { label: 'GPS', value: 'Device position and an accuracy ring' },
        { label: 'Sync', value: 'SQLite on the phone, then Nest.js' },
      ],
      tags: ['React Native', 'Nest.js', 'Python', 'SQLite'],
      features: [
        'Draft and edit points, lines, and polygons',
        'An accuracy ring so a bad fix is visible',
        'Short forms: text, categories, and a photo',
        'Local save first, then a sync when the network returns',
      ],
      architecture: [
        'React Native client with SQLite on the device',
        'Nest.js API that checks incoming GeoJSON',
        'Python export to Shapefile and a table',
      ],
      mockupType: 'spatial-collector',
    },
    {
      id: 'static-rain',
      title: 'Static Rain',
      subtitle: 'Cyberpunk runner through a city in the rain',
      category: 'game',
      categoryLabel: 'Mobile game',
      platform: 'Game · Godot',
      description:
        'Static Rain is a Godot game about one runner moving through a neon city at night, with rain on the street.',
      problem:
        'Rain, lights, and wet streets can hide the path. The run stays short so the city remains readable.',
      implementation:
        'Godot 4 runs the game. GDScript handles the runner. A few shaders draw the rain and the neon. Obstacle spacing is procedural.',
      keySpecs: [
        { label: 'Engine', value: 'Godot 4' },
        { label: 'Scripting', value: 'GDScript' },
        { label: 'Setting', value: 'Neon city, night rain' },
      ],
      tags: ['Godot', 'GDScript', 'Shaders'],
      features: [
        'A runner with a dash and a simple jump',
        'Rain and neon reflection on the street',
        'Procedural spacing of obstacles',
        'A short loop, then a stop, rather than an endless score',
      ],
      architecture: [
        'A small set of Godot scenes, with signals between them',
        'Pooled obstacles so the run does not hitch',
        'A narrow rendering setup aimed at a steady frame rate',
      ],
      mockupType: 'static-rain',
    },
  ] as ProjectItem[],

  stackGroups: [
    {
      title: 'Applications',
      items: [
        {
          name: 'Next.js & React',
          category: 'Web',
          description: 'Interfaces for maps, data tools, and other web applications.',
        },
        {
          name: 'Nest.js',
          category: 'APIs',
          description: 'TypeScript services for uploads, feeds, and background jobs.',
        },
        {
          name: 'React Native',
          category: 'Mobile',
          description: 'Phone applications, including maps, GPS, and field forms.',
        },
        {
          name: 'Python',
          category: 'Analysis',
          description: 'GDAL, GeoPandas, and Rasterio for vectors, rasters, indices, and time series.',
        },
        {
          name: 'Godot',
          category: 'Games',
          description: 'GDScript and shaders for mobile games such as Static Rain.',
        },
      ],
    },
    {
      title: 'Data',
      items: [
        {
          name: 'PostgreSQL & PostGIS',
          category: 'Database',
          description: 'One database for application tables and map features. PostGIS holds the geometries.',
        },
        {
          name: 'MongoDB',
          category: 'Documents',
          description: 'Flexible records, field forms, and event feeds.',
        },
        {
          name: 'SQLite & MBTiles',
          category: 'On device',
          description: 'Offline maps, tracks, and survey drafts stored on the phone.',
        },
      ],
    },
    {
      title: 'Infrastructure',
      items: [
        {
          name: 'AWS',
          category: 'Cloud',
          description: 'Object storage and compute for imagery, tiles, and batch jobs.',
        },
        {
          name: 'Docker',
          category: 'Containers',
          description: 'Images for Python workers, tile services, and local tools.',
        },
        {
          name: 'Linux',
          category: 'Systems',
          description: 'The environment for terminal tools, servers, and long raster jobs.',
        },
      ],
    },
  ],
};
