"use client";

import Link from "next/link";
import { useState } from "react";
import { mockICom, mockShops } from "./data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShops = mockShops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto min-h-screen flex flex-col overflow-x-hidden pb-8 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-text-primary-light dark:text-text-primary-dark material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </button>
        <h1 className="text-base font-bold tracking-tight opacity-100 animate-[fadeIn_0.5s_ease-out_forwards]">
          {mockICom.name}
        </h1>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-text-primary-light dark:text-text-primary-dark material-symbols-outlined">
            menu
          </span>
        </button>
      </div>

      <div className="flex flex-col px-5 pt-2">
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="size-20 rounded-2xl bg-cover bg-center shadow-soft mb-3"
            style={{ backgroundImage: `url('${mockICom.logo}')` }}
          ></div>
          <h2 className="text-xl font-extrabold tracking-tight text-center">
            {mockICom.name}
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
            {mockICom.description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full group mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark material-symbols-outlined">
              search
            </span>
          </div>
          <input
            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-card-dark border-0 rounded-2xl text-sm shadow-soft ring-1 ring-gray-100 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            placeholder="Tìm cửa hàng, món ăn, dịch vụ..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories / Suggestions */}
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mr-1">
              Gợi ý:
            </span>
            <button
              onClick={() => setSearchQuery("F&B")}
              className="shrink-0 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              F&B
            </button>
            <button
              onClick={() => setSearchQuery("Retail")}
              className="shrink-0 px-4 py-2 bg-white dark:bg-card-dark ring-1 ring-gray-200 dark:ring-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium hover:ring-primary/50 transition-all"
            >
              Retail
            </button>
            <button
              onClick={() => setSearchQuery("Services")}
              className="shrink-0 px-4 py-2 bg-white dark:bg-card-dark ring-1 ring-gray-200 dark:ring-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium hover:ring-primary/50 transition-all"
            >
              Services
            </button>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1"></div>
            <button
              onClick={() => setSearchQuery("District 1")}
              className="shrink-0 px-4 py-2 bg-white dark:bg-card-dark ring-1 ring-gray-200 dark:ring-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium hover:ring-primary/50 transition-all"
            >
              District 1
            </button>
            <button
              onClick={() => setSearchQuery("District 3")}
              className="shrink-0 px-4 py-2 bg-white dark:bg-card-dark ring-1 ring-gray-200 dark:ring-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium hover:ring-primary/50 transition-all"
            >
              District 3
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
              {searchQuery ? `Kết quả cho "${searchQuery}"` : "iShop Nổi bật"}
            </h3>
          </div>

          {filteredShops.map((item) => (
            <Link
              key={item.id}
              href={`/ishop/${item.slug}`}
              className="group relative flex flex-col bg-white dark:bg-card-dark rounded-2xl shadow-soft overflow-hidden transition-transform active:scale-[0.98]"
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  {item.rating}
                </div>
              </div>
              <div className="p-4 relative">
                <div
                  className={`absolute -top-4 left-4 ${item.tagBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}
                >
                  {item.tag}
                </div>
                <div className="mt-2 flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] material-symbols-outlined">
                        location_on
                      </span>{" "}
                      {item.location}
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined text-xl material-symbols-outlined">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {filteredShops.length === 0 && (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-gray-300 material-symbols-outlined">
                search_off
              </span>
              <p className="mt-4 text-gray-500">Không tìm thấy cửa hàng nào</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
