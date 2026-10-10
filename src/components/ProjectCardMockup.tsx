import React from 'react';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Activity, 
  FileCode, 
  Navigation, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Sliders,
  Crosshair,
  Radio,
  Gamepad2
} from 'lucide-react';

interface MockupProps {
  type:
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
  title: string;
}

export const ProjectCardMockup: React.FC<MockupProps> = ({ type, title }) => {
  if (type === 'vector-converter') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081f33] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 font-sans select-none">

        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A00D]"></span>
            <span className="text-xs font-mono font-medium text-[#E5A00D] tabular-nums">VECTOR CONVERTER</span>
          </div>
          <div className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            EPSG:4326 → EPSG:3857
          </div>
        </div>

        <div className="relative my-auto flex items-center justify-between px-2 sm:px-6">

          <div className="p-2.5 rounded-lg bg-[#0a2742] border border-[#145388] text-center w-24">
            <div className="text-[10px] font-mono text-slate-400">INPUT</div>
            <div className="text-xs font-bold text-white mt-0.5">SHP / ZIP</div>
            <div className="text-[9px] text-[#E5A00D] mt-0.5">14.820 Polys</div>
          </div>

          <div className="flex-1 flex flex-col items-center px-2">
            <div className="w-full h-0.5 bg-gradient-to-r from-[#145388] via-[#E5A00D] to-[#145388] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E5A00D] flex items-center justify-center text-slate-950 text-[9px] font-bold shadow-md shadow-[#E5A00D]/50">
                ⚡
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-400 mt-2">GDAL / GEOPANDAS</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0a2742] border border-[#E5A00D]/60 text-center w-24 shadow-md shadow-[#E5A00D]/10">
            <div className="text-[10px] font-mono text-slate-400">OUTPUT</div>
            <div className="text-xs font-bold text-[#E5A00D] mt-0.5">GeoJSON</div>
            <div className="text-[9px] text-emerald-400 mt-0.5">Clean Topology</div>
          </div>
        </div>

        <div className="z-10 bg-[#061726]/90 backdrop-blur-sm border border-[#0D416D] rounded-lg p-2 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Topological Validation: 100% OK
          </span>
          <span className="font-mono text-[#E5A00D] text-[11px]">0.34s Process</span>
        </div>
      </div>
    );
  }

  if (type === 'cog-viewer') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#E5A00D]" />
            <span className="text-xs font-mono font-medium text-slate-200">COG RASTER ENGINE</span>
          </div>
          <span className="text-[11px] font-mono text-[#E5A00D] bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            HTTP RANGE REQUEST
          </span>
        </div>

        <div className="relative h-28 w-full my-auto rounded-lg overflow-hidden border border-[#145388]/60 bg-[#05111c] flex items-center justify-center">

          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D416D] via-emerald-800 to-[#E5A00D] opacity-60" />
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <pattern id="cog-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cog-grid)" />
          </svg>

          <div className="z-10 bg-[#061726]/90 border border-[#E5A00D] rounded-md p-2 text-center shadow-lg">
            <div className="text-[10px] font-mono text-slate-400">PIXEL INSPECTOR</div>
            <div className="text-xs font-mono font-bold text-[#E5A00D] mt-0.5">NDVI: +0.68 (Dense Vegetation)</div>
            <div className="text-[9px] font-mono text-slate-300">Bands: NIR (B8) · RED (B4)</div>
          </div>
        </div>

        <div className="z-10 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono text-[11px] text-slate-400">TiTiler Streaming Server</span>
          <span className="font-mono text-emerald-400 text-[11px]">Range request</span>
        </div>
      </div>
    );
  }

  if (type === 'antic-maps') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#131b26] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-xs text-[#E5A00D]">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-mono font-medium">HISTORICAL SPATIAL LAYER</span>
          </div>
          <span className="text-[11px] font-mono text-amber-200 bg-[#241d13] px-2 py-0.5 rounded border border-[#E5A00D]/40">
            ERA: 450 BCE
          </span>
        </div>

        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

            <path d="M 30,190 Q 150,110 320,160 T 580,90" fill="none" stroke="#E5A00D" strokeWidth="1.2" strokeDasharray="4 2" />
            <path d="M 50,140 Q 180,70 340,110 T 560,50" fill="none" stroke="#E5A00D" strokeWidth="1" />

            <polygon points="120,60 260,40 320,130 220,180 90,140" fill="rgba(229, 160, 13, 0.12)" stroke="#E5A00D" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-around my-auto">
          <div className="text-center">
            <div className="w-6 h-6 mx-auto bg-[#0D416D] border border-[#E5A00D] rounded-full flex items-center justify-center text-[10px] text-[#E5A00D] font-bold">
              🏛
            </div>
            <div className="text-[10px] font-mono text-slate-300 mt-1">Acropolis</div>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto bg-[#0D416D] border border-[#E5A00D] rounded-full flex items-center justify-center text-[10px] text-[#E5A00D] font-bold">
              🏟
            </div>
            <div className="text-[10px] font-mono text-slate-300 mt-1">Theater</div>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto bg-[#0D416D] border border-[#E5A00D] rounded-full flex items-center justify-center text-[10px] text-[#E5A00D] font-bold">
              ⚓
            </div>
            <div className="text-[10px] font-mono text-slate-300 mt-1">Ancient Port</div>
          </div>
        </div>

        <div className="z-10 bg-[#0a1826]/90 border border-[#0D416D] rounded-lg p-2 flex items-center justify-between text-xs text-slate-300">
          <span className="truncate">Ephesus & Ionia Spatial Catalog</span>
          <span className="font-mono text-[#E5A00D] text-[11px]">3D DEM Terrain</span>
        </div>
      </div>
    );
  }

  if (type === 'earthquake-map') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#0a1624] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-xs text-rose-400">
            <Activity className="w-3.5 h-3.5" />
            <span className="font-mono font-medium">LIVE SEISMIC TELEMETRY</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            WEBSOCKET: CONNECTED
          </span>
        </div>

        <div className="relative my-auto flex items-center justify-center">

          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,40 Q 140,90 280,60 T 520,120" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="6 3" />
          </svg>

          <div className="relative z-10 text-center">
            <div className="relative inline-block">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center animate-pulse">
                <span className="text-xs font-mono font-bold text-white">M 6.4</span>
              </div>
              <div className="absolute -inset-2 rounded-full border border-rose-400/40 animate-ping pointer-events-none" />
            </div>
            <div className="text-[10px] font-mono text-slate-300 mt-2 bg-[#061726]/80 px-2 py-0.5 rounded inline-block">
              Depth: 10 km · USGS Stream
            </div>
          </div>
        </div>

        <div className="z-10 bg-[#061726]/90 border border-[#0D416D] rounded-lg p-2 flex items-center justify-between text-xs text-slate-300">
          <span className="text-[11px] font-mono text-slate-400">Deck.gl Supercluster</span>
          <span className="text-[11px] font-mono text-[#E5A00D]">1.420 Events Cached</span>
        </div>
      </div>
    );
  }

  if (type === 'travel-explorer') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-xs text-[#E5A00D]">
            <Navigation className="w-3.5 h-3.5 rotate-45" />
            <span className="font-mono font-medium">TRAVEL EXPLORER MOBILE</span>
          </div>
          <span className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            100% OFFLINE
          </span>
        </div>

        <div className="relative my-auto h-[4.5rem] w-full rounded-lg border border-[#145388] bg-[#05111c] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18 H280 M0 40 H280 M0 58 H280 M50 0 V72 M110 0 V72 M180 0 V72 M240 0 V72" stroke="#145388" strokeOpacity="0.45" />
            <path d="M0 50 C 40 46, 70 28, 110 32 S 170 58, 220 36 S 260 22, 280 26" stroke="#0D416D" strokeWidth="10" strokeLinecap="round" />
            <path d="M18 58 C 55 50, 90 22, 140 28 S 200 48, 262 18" stroke="#E5A00D" strokeWidth="2" strokeDasharray="4 3" />
            <g transform="translate(46 34)">
              <path d="M8 0 C3.6 0 0 3.4 0 7.6 0 13 8 20 8 20 S16 13 16 7.6 C16 3.4 12.4 0 8 0Z" fill="#E5A00D" />
              <circle cx="8" cy="7.4" r="2.4" fill="#061320" />
            </g>
            <g transform="translate(128 10)">
              <path d="M8 0 C3.6 0 0 3.4 0 7.6 0 13 8 20 8 20 S16 13 16 7.6 C16 3.4 12.4 0 8 0Z" fill="#E5A00D" />
              <circle cx="8" cy="7.4" r="2.4" fill="#061320" />
            </g>
            <g transform="translate(214 4)">
              <path d="M8 0 C3.6 0 0 3.4 0 7.6 0 13 8 20 8 20 S16 13 16 7.6 C16 3.4 12.4 0 8 0Z" fill="#ffffff" />
              <circle cx="8" cy="7.4" r="2.4" fill="#E5A00D" />
            </g>
          </svg>
          <div className="absolute left-2 bottom-1.5 flex gap-1.5 text-[9px] font-mono">
            <span className="bg-[#061726]/90 text-slate-300 px-1.5 py-0.5 rounded border border-[#0D416D]">Trailhead</span>
            <span className="bg-[#061726]/90 text-slate-300 px-1.5 py-0.5 rounded border border-[#0D416D]">Spring</span>
            <span className="bg-[#061726]/90 text-[#E5A00D] px-1.5 py-0.5 rounded border border-[#0D416D]">Summit</span>
          </div>
        </div>

        <div className="z-10 flex items-center justify-between text-xs text-slate-300">
          <span className="text-[11px] font-mono text-slate-400">MBTiles Vector Engine</span>
          <span className="text-[11px] font-mono text-emerald-400">GPS Accuracy: ±3m</span>
        </div>
      </div>
    );
  }

  if (type === 'spatial-collector') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-xs text-sky-400">
            <Crosshair className="w-3.5 h-3.5 text-[#E5A00D]" />
            <span className="font-mono font-medium">FIELD GIS SURVEYOR</span>
          </div>
          <span className="text-[11px] font-mono text-[#E5A00D] bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            GNSS RTK READY
          </span>
        </div>

        <div className="relative my-auto flex items-center justify-center">
          <svg className="w-56 h-24" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              points="30,20 110,15 160,65 70,70" 
              fill="rgba(13, 65, 109, 0.5)" 
              stroke="#E5A00D" 
              strokeWidth="2" 
            />

            <circle cx="30" cy="20" r="4" fill="#ffffff" stroke="#E5A00D" strokeWidth="2" />
            <circle cx="110" cy="15" r="4" fill="#ffffff" stroke="#E5A00D" strokeWidth="2" />
            <circle cx="160" cy="65" r="4" fill="#ffffff" stroke="#E5A00D" strokeWidth="2" />
            <circle cx="70" cy="70" r="4" fill="#ffffff" stroke="#E5A00D" strokeWidth="2" />
          </svg>
          <div className="absolute bottom-0 text-[10px] font-mono text-slate-300 bg-[#061726]/90 px-2 py-0.5 rounded border border-[#0D416D]">
            Area: 4.850 m² · 4 Vertices
          </div>
        </div>

        <div className="z-10 bg-[#061726]/90 border border-[#0D416D] rounded-lg p-2 flex items-center justify-between text-xs text-slate-300">
          <span className="text-[11px] font-mono text-slate-400">Layer: Parcel Boundary</span>
          <span className="text-[11px] font-mono text-emerald-400">Sync: Ready</span>
        </div>
      </div>
    );
  }

  if (type === 'spectral-indices') {
    const rows = [
      { name: 'NDVI', note: 'Vegetation', value: '+0.62', width: '78%' },
      { name: 'NDWI', note: 'Water', value: '+0.21', width: '46%' },
      { name: 'NBR', note: 'Burn', value: '−0.14', width: '32%' },
    ];
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <span className="text-xs font-mono font-medium text-[#E5A00D]">SPECTRAL INDICES</span>
          <span className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            SENTINEL-2
          </span>
        </div>
        <div className="my-auto space-y-2.5">
          {rows.map((row) => (
            <div key={row.name} className="grid grid-cols-[52px_1fr_52px] items-center gap-2">
              <div>
                <div className="text-[11px] font-mono font-bold text-white">{row.name}</div>
                <div className="text-[9px] font-mono text-slate-400">{row.note}</div>
              </div>
              <div className="h-1.5 rounded-full bg-[#061726] border border-[#0D416D] overflow-hidden">
                <div className="h-full bg-[#E5A00D]" style={{ width: row.width }} />
              </div>
              <div className="text-[11px] font-mono text-[#E5A00D] text-right">{row.value}</div>
            </div>
          ))}
        </div>
        <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Rasterio · NumPy</span>
          <span className="text-emerald-400">GeoTIFF per index</span>
        </div>
      </div>
    );
  }

  if (type === 'ndvi-timeseries') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <span className="text-xs font-mono font-medium text-[#E5A00D]">NDVI SERIES</span>
          <span className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            2019-04 → 2024-09
          </span>
        </div>
        <div className="relative my-auto h-24 rounded-lg border border-[#145388]/60 bg-[#05111c] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 80" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#E5A00D"
              strokeWidth="2"
              points="8,58 28,52 48,40 68,46 88,28 108,34 128,22 148,30 168,18 188,26 208,16 228,24"
            />
            <polyline
              fill="rgba(229,160,13,0.15)"
              stroke="none"
              points="8,58 28,52 48,40 68,46 88,28 108,34 128,22 148,30 168,18 188,26 208,16 228,24 228,74 8,74"
            />
          </svg>
          <div className="absolute left-2 bottom-1.5 text-[10px] font-mono text-slate-400">AOI · mean NDVI</div>
        </div>
        <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>STAC · Sentinel-2</span>
          <span className="text-emerald-400">Cloudy scenes excluded</span>
        </div>
      </div>
    );
  }

  if (type === 'crs-transform') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081f33] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <span className="text-xs font-mono font-medium text-[#E5A00D]">CRS TRANSFORM</span>
          <span className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            TARGET EPSG:5254
          </span>
        </div>
        <div className="my-auto grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="space-y-2">
            <div className="rounded-lg border border-[#145388] bg-[#0a2742] px-2.5 py-2">
              <div className="text-[9px] font-mono text-slate-400">RASTER</div>
              <div className="text-[11px] font-mono font-bold text-white">scene.tif</div>
              <div className="text-[10px] font-mono text-slate-300">EPSG:32636</div>
            </div>
            <div className="rounded-lg border border-[#145388] bg-[#0a2742] px-2.5 py-2">
              <div className="text-[9px] font-mono text-slate-400">VECTOR</div>
              <div className="text-[11px] font-mono font-bold text-white">parcels.shp</div>
              <div className="text-[10px] font-mono text-slate-300">EPSG:4326</div>
            </div>
          </div>
          <div className="text-[#E5A00D] font-mono text-lg">→</div>
          <div className="rounded-lg border border-[#E5A00D]/60 bg-[#0a2742] px-2.5 py-3 text-center">
            <div className="text-[9px] font-mono text-slate-400">OUTPUT</div>
            <div className="text-[11px] font-mono font-bold text-[#E5A00D] mt-1">EPSG:5254</div>
            <div className="text-[10px] font-mono text-slate-300 mt-1">Raster + vector</div>
          </div>
        </div>
        <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>GDAL warp</span>
          <span className="text-emerald-400">GeoPandas</span>
        </div>
      </div>
    );
  }

  if (type === 'terrain-3d') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081a2b] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
        <div className="flex items-center justify-between z-10">
          <span className="text-xs font-mono font-medium text-[#E5A00D]">TERRAIN SURFACE</span>
          <span className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            EXAGGERATION 2.5×
          </span>
        </div>
        <div className="relative my-auto flex items-center justify-center">
          <svg className="w-28 h-28" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <radialGradient id="terrain-sphere" cx="38%" cy="32%" r="70%">
                <stop offset="0%" stopColor="#2a7eae" />
                <stop offset="45%" stopColor="#0D416D" />
                <stop offset="100%" stopColor="#041018" />
              </radialGradient>
              <clipPath id="terrain-clip">
                <circle cx="60" cy="60" r="46" />
              </clipPath>
            </defs>
            <circle cx="60" cy="60" r="47" fill="url(#terrain-sphere)" stroke="#E5A00D" strokeOpacity="0.7" />
            <g clipPath="url(#terrain-clip)" fill="none" strokeLinecap="round">
              <ellipse cx="60" cy="60" rx="46" ry="16" stroke="#9fd0ea" strokeOpacity="0.45" />
              <ellipse cx="60" cy="60" rx="46" ry="32" stroke="#9fd0ea" strokeOpacity="0.28" />
              <ellipse cx="60" cy="60" rx="16" ry="46" stroke="#9fd0ea" strokeOpacity="0.45" />
              <ellipse cx="60" cy="60" rx="32" ry="46" stroke="#9fd0ea" strokeOpacity="0.28" />
              <path d="M18 78 C 32 62, 46 70, 60 58 S 88 40, 104 48" stroke="#E5A00D" strokeWidth="2" />
              <path d="M22 88 C 40 74, 58 80, 74 66 S 96 58, 108 64" stroke="#E5A00D" strokeOpacity="0.55" />
              <path d="M16 50 H104" stroke="#E5A00D" strokeOpacity="0.35" />
            </g>
            <circle cx="78" cy="46" r="3" fill="#E5A00D" />
          </svg>
          <div className="absolute right-2 top-1 text-[10px] font-mono text-slate-300 bg-[#061726]/90 px-2 py-0.5 rounded border border-[#0D416D]">
            Elev. 1,284 m
          </div>
        </div>
        <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>DEM GeoTIFF</span>
          <span className="text-emerald-400">PyVista</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 sm:h-64 bg-[#050d17] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 text-xs text-[#E5A00D]">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span className="font-mono font-bold tracking-wider">GODOT 4 · STATIC RAIN</span>
        </div>
        <span className="text-[11px] font-mono text-[#E5A00D] bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
          CYBERPUNK ENGINE
        </span>
      </div>

      <div className="relative my-auto h-24 w-full flex items-center justify-center">

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-around opacity-30">
          <div className="w-8 h-18 bg-[#0D416D]" />
          <div className="w-12 h-24 bg-[#145388]" />
          <div className="w-10 h-16 bg-[#0D416D]" />
          <div className="w-14 h-22 bg-[#145388]" />
        </div>

        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#E5A00D_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0D416D] to-[#E5A00D] border-2 border-white shadow-[0_0_20px_#E5A00D] flex items-center justify-center text-slate-950 font-bold text-xs">
            ▶
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">RUNNER 09</div>
            <div className="text-[10px] font-mono text-[#E5A00D]">Volumetric Rain Shaders</div>
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-300">
        <span className="text-emerald-400">NIGHT RAIN</span>
        <span className="text-slate-400">GDScript + C# Physics</span>
      </div>
    </div>
  );
};
