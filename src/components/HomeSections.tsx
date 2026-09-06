import React from "react";

import { ServicesSection } from "./ServicesSection";
// import { NetworkSection } from "./NetworkSection";

/**
 * New home layout: services carousel + static network grid.
 *
 * To revert to the original combined section, replace this component in App.tsx:
 *
 *   <HomeSections onNavigate={setCurrentPage} />
 *
 * with:
 *
 *   <FocusAreas onNavigate={setCurrentPage} />
 *
 * FocusAreas.tsx is kept unchanged for easy rollback.
 */
export function HomeSections({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  return (
    <>
      <ServicesSection onNavigate={onNavigate} />
      {/* <NetworkSection onNavigate={onNavigate} /> */}
    </>
  );
}
