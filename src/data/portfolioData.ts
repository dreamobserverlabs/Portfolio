export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'game';
  categoryLabel: string;
  year: string;
  platform: string;
  description: string;
  problem: string;
  implementation: string;
  keySpecs: { label: string; value: string }[];
  tags: string[];
  features: string[];
  architecture: string[];
  mockupType: 'vector-converter' | 'cog-viewer' | 'antic-maps' | 'earthquake-map' | 'travel-explorer' | 'spatial-collector' | 'blade-runner';
  githubUrl?: string;
}

export const PORTFOLIO_CONFIG = {
  brand: {
    name: 'DreamObserver',
    tagline: 'Web & Mobile GIS Software Studio',
    summary: 'DreamObserver builds spatial web applications, cloud-optimized geospatial data tools, mobile field mapping solutions, and interactive Godot games.',
    email: 'contact@dreamobserver.dev',
    location: 'Remote · Available Worldwide',
    github: 'https://github.com/dreamobserver',
    linkedin: 'https://linkedin.com/company/dreamobserver',
    twitter: 'https://x.com/dreamobserver_gis',
    techStackSummary: ['Next.js', 'Nest.js', 'React', 'React Native', 'Python', 'Godot']
  },

  // 7 Grounded, Realistic Projects
  projects: [
    {
      id: 'spatial-vector-data-converter',
      title: 'Spatial Vector Data Converter',
      subtitle: 'Web-based geospatial format converter and CRS reprojection tool',
      category: 'web',
      categoryLabel: 'Web GIS Application',
      year: '2025',
      platform: 'Web · Next.js · Python',
      description: 'A browser utility for translating spatial datasets between GeoJSON, ESRI Shapefile (zipped), KML, and GeoPackage formats with automated coordinate reference system (CRS) reprojection.',
      problem: 'GIS analysts frequently encounter incompatible vector formats and need quick reprojection without launching heavy desktop software like QGIS or ArcGIS.',
      implementation: 'Built with a Next.js frontend and a lightweight Python backend using GDAL/OGR and GeoPandas. Users upload files, inspect geometry on an interactive map preview, choose target CRS (such as WGS84 EPSG:4326 or Web Mercator EPSG:3857), and download the converted dataset.',
      keySpecs: [
        { label: 'Supported Formats', value: 'GeoJSON, SHP, KML, GPKG' },
        { label: 'Projection Support', value: 'PROJ / EPSG Datums' },
        { label: 'Backend Engine', value: 'Python GDAL & GeoPandas' }
      ],
      tags: ['Next.js', 'React', 'Python', 'GDAL', 'GeoPandas', 'Nest.js'],
      features: [
        'Drag-and-drop vector upload with immediate vector map preview',
        'Automatic coordinate transformation between standard EPSG codes',
        'Attribute table preview with column schema verification',
        'Zipped Shapefile and single GeoJSON / GeoPackage download'
      ],
      architecture: [
        'Next.js 14 client interface with MapLibre GL for geometry preview',
        'Nest.js API gateway managing upload payloads and sanitization',
        'Python worker utilizing OGR drivers for reliable format conversion'
      ],
      mockupType: 'vector-converter',
      githubUrl: 'https://github.com/dreamobserver/spatial-vector-converter'
    },
    {
      id: 'cloud-optimized-geotiff-viewer',
      title: 'Cloud Optimized Geotiff Viewer',
      subtitle: 'Browser-based viewer for streaming and inspecting Cloud-Optimized GeoTIFF rasters',
      category: 'web',
      categoryLabel: 'Web GIS Application',
      year: '2025',
      platform: 'Web · Next.js · TiTiler · Python',
      description: 'An interactive satellite raster inspection client designed to stream Cloud-Optimized GeoTIFFs (COGs) hosted on cloud storage via HTTP range requests without requiring full-file downloads.',
      problem: 'High-resolution multispectral imagery and digital elevation models often exceed several gigabytes, making local downloading impractical for quick visual verification.',
      implementation: 'Leveraged TiTiler on the server side and a Next.js map client with WebGL raster rendering. The viewer requests only the specific tile overviews required for the current map viewport and zoom level, supporting live NDVI band math and pixel value probing.',
      keySpecs: [
        { label: 'Raster Protocol', value: 'HTTP Range Requests (COG)' },
        { label: 'Band Math', value: 'NDVI & True Color' },
        { label: 'Tile Server', value: 'TiTiler & Rasterio' }
      ],
      tags: ['Next.js', 'React', 'Python', 'Rasterio', 'TiTiler', 'WebGL'],
      features: [
        'Direct streaming from cloud bucket URLs via HTTP GET range headers',
        'Interactive NDVI band calculation slider (NIR - Red / NIR + Red)',
        'Point-click pixel value inspector displaying elevation or reflectance',
        'Dynamic colormap selection for terrain and multispectral bands'
      ],
      architecture: [
        'Next.js frontend with MapLibre raster layer integration',
        'Python TiTiler dynamic tile service deployed as a container',
        'Direct read capability for AWS S3 and Google Cloud Storage buckets'
      ],
      mockupType: 'cog-viewer',
      githubUrl: 'https://github.com/dreamobserver/cog-viewer'
    },
    {
      id: 'antic-city-maps',
      title: 'Antic City Maps',
      subtitle: 'Historical GIS cartography platform documenting ancient archaeological settlements',
      category: 'web',
      categoryLabel: 'Web GIS Application',
      year: '2024',
      platform: 'Web · Next.js · PostGIS · Python',
      description: 'A dedicated historical cartography catalog tracking the spatial footprints, defense walls, and significant monuments of ancient Mediterranean and Anatolian settlements.',
      problem: 'Archaeological site data and historical sketches are often scattered across academic papers without an accessible, unified spatial web interface.',
      implementation: 'Digitized archaeological excavation plans and referenced them to modern coordinates. Data is stored in PostGIS and served via Nest.js vector tiles, rendered in Next.js using a custom antique-styled cartographic map layer with chronological era filters.',
      keySpecs: [
        { label: 'Database', value: 'PostgreSQL + PostGIS' },
        { label: 'Map Rendering', value: 'Vector Tiles (MVT)' },
        { label: 'Historical Range', value: 'Archaic to Byzantine' }
      ],
      tags: ['Next.js', 'React', 'PostGIS', 'Python', 'Nest.js'],
      features: [
        'Chronological era slider filtering archaeological periods on the map',
        'Digitized boundary polygons for ancient acropolises, theaters, and agoras',
        'Detailed site information cards with coordinate references and history',
        'High-resolution elevation contours highlighting natural defense terrain'
      ],
      architecture: [
        'PostGIS database storing spatial polygons, lines, and point features',
        'Nest.js REST service delivering GeoJSON and vector tile endpoints',
        'Next.js web client with interactive parchment cartography styles'
      ],
      mockupType: 'antic-maps',
      githubUrl: 'https://github.com/dreamobserver/antic-city-maps'
    },
    {
      id: 'earthquake-map',
      title: 'Earthquake Map',
      subtitle: 'Real-time seismic activity map with tectonic plate fault line overlays',
      category: 'web',
      categoryLabel: 'Web GIS Application',
      year: '2024',
      platform: 'Web · React · Next.js · Nest.js',
      description: 'A live global earthquake monitoring web application displaying recent seismic events with magnitude-proportional markers, focal depths, and major tectonic fault boundaries.',
      problem: 'Public earthquake trackers are often cluttered with ads or fail to provide spatial context like proximity to known active geological fault lines.',
      implementation: 'Engineered a real-time ingestion pipeline in Nest.js polling public GeoJSON feeds from USGS and EMSC every 60 seconds. The Next.js frontend renders earthquakes as clustered circle layers with color-coded depth gradients alongside global fault lines.',
      keySpecs: [
        { label: 'Data Sources', value: 'USGS & EMSC GeoJSON Feeds' },
        { label: 'Update Interval', value: '60 Seconds Automated' },
        { label: 'Fault Data', value: 'Global Tectonic Boundary Layer' }
      ],
      tags: ['Next.js', 'React', 'Nest.js', 'Python', 'GeoJSON'],
      features: [
        'Color-coded markers based on focal depth (shallow vs deep)',
        'Magnitude filter slider (e.g. show only M4.0+ earthquakes)',
        'Interactive tectonic fault lines and plate boundary overlays',
        'Detailed event card with timestamp, UTC time, and epicenter coordinates'
      ],
      architecture: [
        'Nest.js scheduled worker fetching and normalizing seismic GeoJSON feeds',
        'In-memory cache ensuring zero database bottleneck during high event volume',
        'Next.js client with clustering algorithms for smooth map interaction'
      ],
      mockupType: 'earthquake-map',
      githubUrl: 'https://github.com/dreamobserver/earthquake-map'
    },
    {
      id: 'travel-explorer',
      title: 'Travel Explorer',
      subtitle: 'Offline-capable mobile hiking and trail exploration guide',
      category: 'mobile',
      categoryLabel: 'Mobile Application',
      year: '2024',
      platform: 'Mobile · React Native (iOS & Android)',
      description: 'A mobile outdoor application built for hikers and wilderness travelers, offering offline vector topographic maps, trail routing, GPX track recording, and elevation profiles.',
      problem: 'Cellular signals frequently drop in mountain and forest areas, rendering conventional online map apps useless during outdoor expeditions.',
      implementation: 'Developed in React Native using local SQLite storage and MBTiles vector tile archives. Users can download regional map packages before heading out, track their GPS position with minimal battery drain, and view live elevation charts.',
      keySpecs: [
        { label: 'Framework', value: 'React Native & Expo' },
        { label: 'Offline Storage', value: 'MBTiles & SQLite' },
        { label: 'GPS Tracking', value: 'Power-Optimized Background Location' }
      ],
      tags: ['React Native', 'Python', 'SQLite', 'MBTiles', 'Mobile GIS'],
      features: [
        'Full offline map functionality with pre-downloaded MBTiles packages',
        'Live elevation profile plotting showing ascent, descent, and gradient',
        'GPX track recording with customizable waypoint pins and notes',
        'Compass bearing and backtrack navigation to initial trailhead'
      ],
      architecture: [
        'React Native cross-platform application with native location module',
        'Local SQLite storage holding track geometries and user waypoints',
        'Python script utilities for slicing and packaging MBTiles from OSM data'
      ],
      mockupType: 'travel-explorer',
      githubUrl: 'https://github.com/dreamobserver/travel-explorer'
    },
    {
      id: 'spatial-data-collector',
      title: 'Spatial Data Collector',
      subtitle: 'Mobile field GIS survey application for logging spatial geometries and attributes',
      category: 'mobile',
      categoryLabel: 'Mobile Application',
      year: '2024',
      platform: 'Mobile · React Native · Nest.js',
      description: 'A field GIS data collection tool designed for field workers, environmental surveyors, and urban asset inspectors to capture point, line, and polygon geometries with attribute forms.',
      problem: 'Proprietary field GIS software licenses can be costly and overly complex for field teams who just need straightforward geometry logging and standard GeoJSON/Shapefile export.',
      implementation: 'Built with React Native for offline field operation. Operators can drop points, walk paths, or tap polygon vertices with live GPS accuracy indicators. When network connectivity is available, surveys sync to a central Nest.js/PostGIS database.',
      keySpecs: [
        { label: 'Geometry Types', value: 'Point, Polyline, Polygon' },
        { label: 'GPS Precision', value: 'Device GNSS with Accuracy Ring' },
        { label: 'Sync Pipeline', value: 'Offline-First SQLite to Nest.js' }
      ],
      tags: ['React Native', 'Nest.js', 'Python', 'SpatiaLite', 'Mobile GIS'],
      features: [
        'Point, polyline, and polygon drafting with vertex editing and snapping',
        'Live GPS accuracy radius indicator to prevent logging inaccurate readings',
        'Customizable attribute entry forms (text fields, categories, photo attachments)',
        'Local offline storage with one-tap sync to cloud GIS database'
      ],
      architecture: [
        'React Native client with offline SQLite spatial geometry cache',
        'Nest.js backend API validating incoming GeoJSON features',
        'Python scripts for batch exporting collected features to Shapefile and Excel'
      ],
      mockupType: 'spatial-collector',
      githubUrl: 'https://github.com/dreamobserver/spatial-data-collector'
    },
    {
      id: 'blade-runner',
      title: 'Blade Runner',
      subtitle: 'Cyberpunk atmospheric action and navigation game prototype built in Godot Engine',
      category: 'game',
      categoryLabel: 'Godot Engine Game',
      year: '2024',
      platform: 'Game · Godot Engine (GDScript / C#)',
      description: 'An atmospheric cyberpunk action runner prototype created in Godot Engine, featuring high-speed navigation through dystopian urban skylines with custom neon lighting shaders and fluid physics.',
      problem: 'Achieving consistent 60 FPS performance on lower-tier hardware while running dense particle systems like volumetric rain, dynamic lights, and neon reflections.',
      implementation: 'Engineered in Godot 4 using GDScript and lightweight custom GLSL shaders. Focused on deterministic physics step loops, procedural obstacle spacing, and a responsive kinematic vehicle controller.',
      keySpecs: [
        { label: 'Game Engine', value: 'Godot 4.3' },
        { label: 'Scripting', value: 'GDScript & C#' },
        { label: 'Target Frame Rate', value: 'Solid 60 FPS' }
      ],
      tags: ['Godot', 'GDScript', 'C#', 'GLSL Shaders', '2D/3D Physics'],
      features: [
        'Kinematic vehicle controller with responsive gravity and dash mechanics',
        'Custom GLSL shaders for neon sign bloom and rain reflections on asphalt',
        'Procedural obstacle generation with seeded layout algorithms',
        'Synthesizer soundtrack synced to in-game speed and player maneuvers'
      ],
      architecture: [
        'Modular Godot Node scene tree with Signal-driven decoupled events',
        'Object pooling system to eliminate runtime garbage collection stutter',
        'Lightweight forward rendering pipeline optimized for multiplatform builds'
      ],
      mockupType: 'blade-runner',
      githubUrl: 'https://github.com/dreamobserver/blade-runner-godot'
    }
  ] as ProjectItem[],

  // Core Tech Stack
  techStack: [
    {
      name: 'Next.js & React',
      category: 'Web GIS Frontend',
      description: 'Building fast, responsive web mapping interfaces, server components, and WebGL layer integration.'
    },
    {
      name: 'Nest.js',
      category: 'Backend & APIs',
      description: 'Scalable TypeScript backend services, RESTful GIS endpoints, and real-time WebSocket feeds.'
    },
    {
      name: 'React Native',
      category: 'Mobile GIS',
      description: 'Cross-platform iOS and Android mobile GIS apps with offline MBTiles mapping and background GPS.'
    },
    {
      name: 'Python',
      category: 'Geospatial Engineering',
      description: 'GDAL/OGR, GeoPandas, Rasterio, and TiTiler for processing spatial vectors, raster overviews, and COGs.'
    },
    {
      name: 'Godot Engine',
      category: 'Interactive & Games',
      description: 'GDScript, C#, custom shaders, and 2D/3D physics mechanics for responsive games and simulations.'
    },
    {
      name: 'PostGIS & Spatial DBs',
      category: 'Spatial Storage',
      description: 'PostgreSQL with PostGIS extensions, spatial indexing (GIST), and SQLite/MBTiles for offline use.'
    }
  ]
};
