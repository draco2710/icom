"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Map, { Marker, Popup, NavigationControl, FullscreenControl, MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { IShopMember } from "@/shared/types";
import Link from "next/link";

interface MemberMapProps {
    members: IShopMember[];
    className?: string;
}

// Multiple map style sources for fallback (ordered by detail level)
const MAP_STYLES: (string | Record<string, unknown>)[] = [
    // Option 1: OSM Raster (Full details, always works)
    {
        version: 8 as const,
        sources: {
            osm: {
                type: 'raster' as const,
                tiles: [
                    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors'
            }
        },
        layers: [{
            id: 'osm',
            type: 'raster' as const,
            source: 'osm',
            minzoom: 0,
            maxzoom: 19
        }]
    },
    // Option 2: CartoDB Voyager (Beautiful vector)
    "https://tiles.basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
];

// Helper to parse coordinates safely (handles both comma and dot as decimal separator)
function parseCoordinate(value: number | string | undefined): number {
    if (typeof value === 'number') return value;
    if (!value) return 0;

    // Replace comma with dot for European/Vietnamese number format
    const stringValue = String(value).replace(',', '.');
    const parsed = parseFloat(stringValue);

    return isNaN(parsed) ? 0 : parsed;
}

export default function MemberMap({ members, className }: MemberMapProps) {
    const [popupInfo, setPopupInfo] = useState<IShopMember | null>(null);
    const [styleIndex, setStyleIndex] = useState(0);
    const mapRef = useRef<MapRef>(null);

    // Filter members with valid coordinates
    const validMembers = useMemo(() => {
        return members.filter(m => {
            const lat = parseCoordinate(m.lat);
            const lng = parseCoordinate(m.lng);
            return lat !== 0 && lng !== 0 && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
        });
    }, [members]);

    // Initial viewport - default to center of Vietnam if no members
    const initialViewState = useMemo(() => {
        if (validMembers.length === 0) {
            return {
                latitude: 15.8,
                longitude: 108.3,
                zoom: 5
            };
        }

        // Simple center calculation
        const lats = validMembers.map(m => parseCoordinate(m.lat));
        const lngs = validMembers.map(m => parseCoordinate(m.lng));

        return {
            latitude: (Math.min(...lats) + Math.max(...lats)) / 2,
            longitude: (Math.min(...lngs) + Math.max(...lngs)) / 2,
            zoom: validMembers.length === 1 ? 14 : 11
        };
    }, [validMembers]);

    // Force resize on mount and when container might change
    useEffect(() => {
        const timer = setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.resize();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Handle map errors - try next style source
    const handleMapError = (error: unknown) => {
        console.error('Map style error:', error);

        // Try next style if available
        if (styleIndex < MAP_STYLES.length - 1) {
            console.log(`Switching to fallback map style ${styleIndex + 1}`);
            setStyleIndex(prev => prev + 1);
        }
    };

    return (
        <div className={`relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-inner ${className || "w-full"}`}
            style={{ minHeight: '400px', height: '600px' }}>
            <Map
                ref={mapRef}
                initialViewState={initialViewState}
                style={{ width: "100%", height: "100%" }}
                mapStyle={MAP_STYLES[styleIndex] as any}
                reuseMaps
                onError={handleMapError}
            >
                <NavigationControl position="top-right" />
                <FullscreenControl position="top-right" />

                {validMembers.map((member) => (
                    <Marker
                        key={member.shop_id}
                        latitude={parseCoordinate(member.lat)}
                        longitude={parseCoordinate(member.lng)}
                        anchor="bottom"
                        onClick={e => {
                            e.originalEvent.stopPropagation();
                            setPopupInfo(member);
                        }}
                    >
                        <div className="cursor-pointer group flex flex-col items-center">
                            <div className="bg-primary text-white p-1 rounded-full shadow-lg border-2 border-white transform transition-transform group-hover:scale-110">
                                <span className="material-symbols-outlined text-[20px] block">storefront</span>
                            </div>
                            <div className="hidden group-hover:block absolute top-full mt-1 bg-white dark:bg-gray-800 text-xs font-bold py-1 px-2 rounded shadow-md whitespace-nowrap z-50">
                                {member.name}
                            </div>
                        </div>
                    </Marker>
                ))}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        latitude={parseCoordinate(popupInfo.lat)}
                        longitude={parseCoordinate(popupInfo.lng)}
                        onClose={() => setPopupInfo(null)}
                        closeButton={false}
                        className="custom-popup"
                    >
                        <div className="p-1 max-w-[200px]">
                            <div
                                className="h-20 w-full bg-cover bg-center rounded-lg mb-2"
                                style={{ backgroundImage: `url('${popupInfo.logo || "https://placehold.co/100"}')` }}
                            ></div>
                            <h5 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1">{popupInfo.name}</h5>
                            <p className="text-[10px] text-gray-500 line-clamp-2 mt-0.5">{popupInfo.industry}</p>
                            <Link
                                href={`/ishop/${popupInfo.shop_id}`}
                                className="mt-2 block text-center py-1.5 bg-primary text-white text-[10px] font-bold rounded-full hover:opacity-90 transition-opacity"
                            >
                                Chi tiết
                            </Link>
                        </div>
                    </Popup>
                )}
            </Map>

            {validMembers.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm z-10">
                    <div className="text-center p-6">
                        <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">map_off</span>
                        <p className="text-gray-500 font-medium">Không tìm thấy shop có tọa độ hiển thị</p>
                    </div>
                </div>
            )}
        </div>
    );
}
