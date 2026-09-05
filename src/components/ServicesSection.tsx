import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

import {
  investmentAreas,
  SERVICE_SCROLL_EVENT,
} from "../data/homeContent";

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setSlidesPerView(mediaQuery.matches ? 3 : 1);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return slidesPerView;
}

export function ServicesSection({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const slidesPerView = useSlidesPerView();
  const totalPages = Math.ceil(investmentAreas.length / slidesPerView);
  const [page, setPage] = useState(0);

  const canScrollPrev = page > 0;
  const canScrollNext = page < totalPages - 1;

  const visibleServices = investmentAreas.slice(
    page * slidesPerView,
    page * slidesPerView + slidesPerView,
  );

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(totalPages - 1, 0)));
  }, [totalPages]);

  useEffect(() => {
    const handleScrollToService = (event: Event) => {
      const { index } = (event as CustomEvent<{ index: number }>).detail;
      const targetPage = Math.floor(index / slidesPerView);
      setPage(Math.min(targetPage, totalPages - 1));
    };

    window.addEventListener(SERVICE_SCROLL_EVENT, handleScrollToService);
    return () =>
      window.removeEventListener(SERVICE_SCROLL_EVENT, handleScrollToService);
  }, [slidesPerView, totalPages]);

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We enable access to equity capital, debt financing, and structured
            instruments. From transaction readiness to post-fundraise strategy,
            we help companies prepare for capital, align with the right
            partners, and execute successful fundraises that unlock sustainable
            growth.
          </p>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleServices.map((area) => (
                <div key={area.id} id={`service-${area.id}`}>
                  <div className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all group">
                    <div
                      className={`w-16 h-16 rounded-3xl ${area.bg} ${area.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                    >
                      <area.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => onNavigate?.("about")}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-[15px]">
              <button
                type="button"
                onClick={() => setPage((current) => current - 1)}
                disabled={!canScrollPrev}
                aria-label="Previous services"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setPage((current) => current + 1)}
                disabled={!canScrollNext}
                aria-label="Next services"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
