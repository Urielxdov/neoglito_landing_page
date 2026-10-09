"use client";

import { useReducer } from "react";
import { SERVICES } from "@/lib/landing/content";
import { initialServicesState, servicesReducer } from "@/lib/landing/state/servicesReducer";
import { ServiceRow } from "./ServiceRow";
import { IntegrationIllustration } from "./illustrations/IntegrationIllustration";
import { ProductIllustration } from "./illustrations/ProductIllustration";
import { RulesIllustration } from "./illustrations/RulesIllustration";

const ILLUSTRATIONS = [ProductIllustration, RulesIllustration, IntegrationIllustration];

/** Lista de servicios; el servicio bajo el puntero anima su ilustración. */
export function ServiceList() {
  const [{ hovered }, dispatch] = useReducer(servicesReducer, initialServicesState);

  return (
    <div className="border-t border-line-2">
      {SERVICES.map((service, i) => {
        const Illustration = ILLUSTRATIONS[i];
        return (
          <ServiceRow
            key={service.title}
            index={i}
            title={service.title}
            description={service.description}
            onHover={() => dispatch({ type: "services/hover", index: i })}
            onLeave={() => dispatch({ type: "services/leave" })}
          >
            <Illustration active={hovered === i} />
          </ServiceRow>
        );
      })}
    </div>
  );
}
