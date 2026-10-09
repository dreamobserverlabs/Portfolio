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
  type: 'vector-converter' | 'cog-viewer' | 'antic-maps' | 'earthquake-map' | 'travel-explorer' | 'spatial-collector' | 'blade-runner';
  title: string;
}

export const ProjectCardMockup: React.FC<MockupProps> = ({ type, title }) => {
  // 1. Spatial Vector Data Converter
  if (type === 'vector-converter') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#081f33] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 font-sans select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A00D]"></span>
            <span className="text-xs font-mono font-medium text-[#E5A00D] tabular-nums">VECTOR CONVERTER</span>
          </div>
          <div className="text-[11px] font-mono text-slate-300 bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
            EPSG:4326 → EPSG:3857
          </div>
        </div>

        {/* Vector Nodes & Conversion Flow */}
        <div className="relative my-auto flex items-center justify-between px-2 sm:px-6">
          {/* Source node */}
          <div className="p-2.5 rounded-lg bg-[#0a2742] border border-[#145388] text-center w-24">
            <div className="text-[10px] font-mono text-slate-400">INPUT</div>
            <div className="text-xs font-bold text-white mt-0.5">SHP / ZIP</div>
            <div className="text-[9px] text-[#E5A00D] mt-0.5">14.820 Polys</div>
          </div>

          {/* Transform beam */}
          <div className="flex-1 flex flex-col items-center px-2">
            <div className="w-full h-0.5 bg-gradient-to-r from-[#145388] via-[#E5A00D] to-[#145388] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E5A00D] flex items-center justify-center text-slate-950 text-[9px] font-bold shadow-md shadow-[#E5A00D]/50">
                ⚡
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-400 mt-2">GDAL / GEOPANDAS</span>
          </div>

          {/* Target node */}
          <div className="p-2.5 rounded-lg bg-[#0a2742] border border-[#E5A00D]/60 text-center w-24 shadow-md shadow-[#E5A00D]/10">
            <div className="text-[10px] font-mono text-slate-400">OUTPUT</div>
            <div className="text-xs font-bold text-[#E5A00D] mt-0.5">GeoJSON</div>
            <div className="text-[9px] text-emerald-400 mt-0.5">Clean Topology</div>
          </div>
        </div>

        {/* Status footer */}
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

  // 2. Cloud Optimized Geotiff Viewer
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

        {/* Simulated Spectral Bands Grid */}
        <div className="relative h-28 w-full my-auto rounded-lg overflow-hidden border border-[#145388]/60 bg-[#05111c] flex items-center justify-center">
          {/* Raster heat color gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D416D] via-emerald-800 to-[#E5A00D] opacity-60" />
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <pattern id="cog-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cog-grid)" />
          </svg>

          {/* Raster crosshair pixel inspect */}
          <div className="z-10 bg-[#061726]/90 border border-[#E5A00D] rounded-md p-2 text-center shadow-lg">
            <div className="text-[10px] font-mono text-slate-400">PIXEL INSPECTOR</div>
            <div className="text-xs font-mono font-bold text-[#E5A00D] mt-0.5">NDVI: +0.68 (Dense Vegetation)</div>
            <div className="text-[9px] font-mono text-slate-300">Bands: NIR (B8) · RED (B4)</div>
          </div>
        </div>

        <div className="z-10 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono text-[11px] text-slate-400">TiTiler Streaming Server</span>
          <span className="font-mono text-emerald-400 text-[11px]">Lat: 160ms · 60 FPS</span>
        </div>
      </div>
    );
  }

  // 3. Antic City Maps
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

        {/* Ancient parchment map drawing vector */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Topographic elevation lines */}
            <path d="M 30,190 Q 150,110 320,160 T 580,90" fill="none" stroke="#E5A00D" strokeWidth="1.2" strokeDasharray="4 2" />
            <path d="M 50,140 Q 180,70 340,110 T 560,50" fill="none" stroke="#E5A00D" strokeWidth="1" />
            {/* Ancient city wall boundary */}
            <polygon points="120,60 260,40 320,130 220,180 90,140" fill="rgba(229, 160, 13, 0.12)" stroke="#E5A00D" strokeWidth="2" />
          </svg>
        </div>

        {/* Ancient Monument markers */}
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

  // 4. Earthquake Map
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

        {/* Fault lines & seismic epicenter circles */}
        <div className="relative my-auto flex items-center justify-center">
          {/* Tectonic plate fault line */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,40 Q 140,90 280,60 T 520,120" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="6 3" />
          </svg>

          {/* Pulse Epicenter */}
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

  // 5. Travel Explorer
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

        {/* Trail Elevation profile preview */}
        <div className="my-auto space-y-1">
          <div className="flex items-baseline justify-between text-xs font-mono px-1">
            <span className="text-slate-400 text-[11px]">Distance: 18.4 km</span>
            <span className="text-[#E5A00D] font-bold">Elevation: +820m</span>
          </div>
          <div className="h-16 w-full bg-[#05111c] rounded-lg border border-[#145388] p-1.5 flex items-end">
            <svg className="w-full h-full" viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 0,45 Q 40,30 80,40 T 140,10 T 200,25 T 280,5" 
                stroke="#E5A00D" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M 0,45 Q 40,30 80,40 T 140,10 T 200,25 T 280,5 L 280,50 L 0,50 Z" 
                fill="rgba(229, 160, 13, 0.15)" 
              />
            </svg>
          </div>
        </div>

        <div className="z-10 flex items-center justify-between text-xs text-slate-300">
          <span className="text-[11px] font-mono text-slate-400">MBTiles Vector Engine</span>
          <span className="text-[11px] font-mono text-emerald-400">GPS Accuracy: ±3m</span>
        </div>
      </div>
    );
  }

  // 6. Spatial Data Collector
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

        {/* Polygon editing canvas representation */}
        <div className="relative my-auto flex items-center justify-center">
          <svg className="w-56 h-24" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              points="30,20 110,15 160,65 70,70" 
              fill="rgba(13, 65, 109, 0.5)" 
              stroke="#E5A00D" 
              strokeWidth="2" 
            />
            {/* Vertex handles */}
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

  // 7. Blade Runner (Godot Game)
  return (
    <div className="relative w-full h-56 sm:h-64 bg-[#050d17] rounded-xl overflow-hidden border border-[#0D416D] flex flex-col justify-between p-4 select-none">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 text-xs text-[#E5A00D]">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span className="font-mono font-bold tracking-wider">GODOT 4 · BLADE RUNNER</span>
        </div>
        <span className="text-[11px] font-mono text-[#E5A00D] bg-[#061726] px-2 py-0.5 rounded border border-[#0D416D]">
          CYBERPUNK ENGINE
        </span>
      </div>

      {/* Atmospheric cyberpunk neon skyline & runner */}
      <div className="relative my-auto h-24 w-full flex items-center justify-center">
        {/* Neon skyscrapers silhouettes */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-around opacity-30">
          <div className="w-8 h-18 bg-[#0D416D]" />
          <div className="w-12 h-24 bg-[#145388]" />
          <div className="w-10 h-16 bg-[#0D416D]" />
          <div className="w-14 h-22 bg-[#145388]" />
        </div>

        {/* Rain streaks */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#E5A00D_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Player vehicle / runner */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0D416D] to-[#E5A00D] border-2 border-white shadow-[0_0_20px_#E5A00D] flex items-center justify-center text-slate-950 font-bold text-xs">
            ▶
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">SPINNER #09</div>
            <div className="text-[10px] font-mono text-[#E5A00D]">Volumetric Rain Shaders</div>
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-300">
        <span className="text-emerald-400">LOCKED 60 FPS</span>
        <span className="text-slate-400">GDScript + C# Physics</span>
      </div>
    </div>
  );
};
