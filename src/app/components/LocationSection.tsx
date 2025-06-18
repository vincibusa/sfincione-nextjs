'use client';
import React from "react";

import { MapPinIcon, Clock, Phone, Info, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const LocationSection: React.FC = () => {
  // Coordinate di Bagheria - Corso Umberto I
  const coordinates = "38.078638,13.507068";
  const locationName = "Corso+Umberto+I,+Bagheria,+PA";
  
  // URL per mappa e navigazione
  const mapsUrl = `https://maps.google.com/maps?q=${coordinates}&z=17&t=m&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}&destination_place_id=${locationName}`;
  
  // Gestori eventi per aprire le mappe
  const handleOpenDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(directionsUrl, '_blank');
  };
  
  const handleOpenMap = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.google.it/maps/place/Corso+Umberto+I,+90011+Bagheria+PA/@38.078638,13.507068,17z/data=!3m1!4b1!4m6!3m5!1s0x1319e2f7eff195ab:0x5404a11c63305515!8m2!3d38.0786338!4d13.5096429!16s%2Fg%2F1vqt27yj?hl=it&entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D", '_blank');
  };

  return (
    <section
      id="location"
      className="py-24 bg-white relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Place"
      aria-labelledby="location-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=1200&q=30')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 
            id="location-heading"
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent inline-block"
            itemProp="name"
          >
            Dove Si Svolge
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-xl blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <MotionImg
                src="/luogo.JPG"
                alt="Bagheria, Sicilia"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
              />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex items-center gap-3">
                <MapPinIcon size={28} className="text-red-600" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800" itemProp="addressLocality">
                  Bagheria
                </h3>
              </div>
              <p className="text-gray-600 pl-10">
                <span itemProp="streetAddress">Corso Umberto I</span>, 
                <span itemProp="addressRegion"> Palermo</span>, 
                <span itemProp="addressRegion">Sicilia</span>
                <meta itemProp="addressCountry" content="IT" />
                <meta itemProp="postalCode" content="90011" />
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600">
                Bagheria è una vivace cittadina a circa 15 km da Palermo, famosa per le sue ville settecentesche e la sua ricca tradizione gastronomica siciliana.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                È conosciuta per le sue tradizioni culinarie, tra cui il famoso sfincione siciliano, e per la sua posizione strategica nella provincia palermitana.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-600/20 border-0 rounded-full px-8 flex items-center justify-center py-4"
                onClick={handleOpenDirections}
              >
                Come Arrivare <ExternalLink className="ml-2 h-4 w-4" />
              </button>
              <button
                className="border-red-600 text-red-600 hover:bg-red-50 rounded-full px-8 flex items-center justify-center py-4"
                onClick={handleOpenMap}
              >
                Visualizza Mappa <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">La Tradizione Gastronomica</h4>
                  <p className="text-gray-600">Bagheria è rinomata per la sua tradizione gastronomica siciliana e rappresenta un punto di incontro ideale per celebrare l'eccellenza culinaria dell'isola con il suo sfincione tradizionale.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Orari del Festival</h4>
                  <p className="text-gray-600">17-18 Maggio 2025, dalle 10:00 alle 23:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Contatto</h4>
                  <p className="text-gray-600">+39 327 167 7871</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;