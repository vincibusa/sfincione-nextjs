'use client';
import React from "react";

import { CalendarIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const scheduleDays = [
  {
    day: "17 Maggio",
    title: "Sabato - Sfincione Open & Eventi",
    time: "10:30 - 23:00", // Overall time from "SFINCIONE OPEN Ore 10:30-23:00"
    color: "red",
    events: [
      {
        time: "10:30 - 23:00",
        desc: "Sfincione Taste e Sfincione Expo. Inaugurazione del festival.", // From image: "SFINCIONE TASTE, Sfincione Expo INAUGURAZIONE DEL FESTIVAL"
        location: "Piazza Vittorio Emanuele", // From image top right
        type: "Esposizione"
      },
      {
        time: "11:00", // From image: "Ore 11:00"
        desc: "Talk Show: 'Lo sfincione prodotto identitario e principe dei dolci dell'enogastronomia siciliana'.", // From image: "TALK SHOW Lo sfincione: prodotto identitario e principe dei dolci dell'enogastronomia siciliana"
        location: "Palco Centrale", // Inferred, standard for such an event
        type: "Culturale"
      },
      {
        time: "17:00", // From image: "Ore 17:00"
        desc: "Presentazione libro di Mario Liberto: 'Storia dell'enogastronomia siciliana. Da Polifemo alla patria alimentare'.", // From image: "PRESENTAZIONE LIBRO Presentazione del libro di Mario Liberto 'Storia dell'enogastronomia siciliana. Da Polifemo alla patria alimentare'"
        location: "Area Cultura", // Inferred
        type: "Culturale"
      },
      {
        time: "18:00", // From image: "Ore 18:00"
        desc: "Workshop sulla cassata con degustazione a cura di Giuseppe Sparacello.", // From image: "WORKSHOP GIUSEPPE SPARACELLO Workshop sulla cassata con degustazione."
        location: "Area Workshop", // Inferred
        type: "Workshop"
      },
      {
        time: "19:00", // From image: "Ore 19:00"
        desc: "Cooking Show con Salvatore Capizzi, patron e pizzaiolo di 'Molecola'.", // From image: "COOKING SHOW SALVATORE CAPIZZI patron e pizzaiolo di 'Molecola'"
        location: "Palco Show Cooking", // Inferred
        type: "Workshop" // Cooking shows are often workshop-like
      },
      {
        time: "19:00", // From image: "Ore 19:00"
        desc: "Sicily Young Pastry Chef Competition: La sfida per diventare il miglior giovane pasticcere della Sicilia.", // From image: "SICILY YOUNG PASTRY CHEF COMPETITION La sfida per diventare il miglior giovane pasticcere della Sicilia."
        location: "Palco Competizioni", // Inferred
        type: "Competizione"
      },
      {
        time: "22:00", // From image: "Ore 22:00"
        desc: "Welcome to the Party: Una grande festa con DJ SET di Radio 105.", // From image: "WELCOME TO THE PARTY Una grande festa con DJ SET della radio più famosa d'Italia." (Logo Zoo 105 visible)
        location: "Piazza Vittorio Emanuele", // Main event area
        type: "Spettacolo"
      },
    ],
  },
  {
    day: "18 Maggio",
    title: "Domenica - Sfincione Open & Eventi",
    time: "10:30 - 23:00", // Overall time from "SFINCIONE OPEN Ore 10:30-23:00"
    color: "red",
    events: [
      {
        time: "10:30 - 23:00",
        desc: "Sfincione Taste e Sfincione Expo. Inaugurazione del festival.", // From image: "SFINCIONE TASTE, Sfincione Expo INAUGURAZIONE DEL FESTIVAL"
        location: "Piazza Vittorio Emanuele", // From image top right
        type: "Esposizione"
      },
      {
        time: "11:00", // From image: "Ore 11:00"
        desc: "Premio Sfincione Ambassador 2025 a Gianni Marino (volto TV e concorrente della 14ª di Master Chef Italia).", // From image: "SFINCIONE AMBASSADOR 2025 Premio a Gianni Marino, volto TV e concorrente della 14ª di Master Chef Italia."
        location: "Palco Centrale", // Inferred
        type: "Cerimonia"
      },
      {
        time: "12:00", // From image: "Ore 12:00"
        desc: "Talk Show: 'Un'isola premiata dal gusto con il riconoscimento di Sicilia Regione Gastronomica 2025'.", // From image: "TALK SHOW Un'isola premiata dal gusto con il riconoscimento di Sicilia Regione Gastronomica 2025."
        location: "Area Cultura", // Inferred
        type: "Culturale"
      },
      {
        time: "13:00", // From image: "Ore 13:00"
        desc: "Workshop: 'Lo Street Food siciliano autentico di Ke Palle' con degustazione.", // From image: "WORKSHOP KE PALLE 'Street Food siciliano autentico di Ke Palle' con degustazione."
        location: "Area Workshop", // Inferred
        type: "Workshop"
      },
      {
        time: "16:00", // From image: "Ore 16:00"
        desc: "Workshop sul panettone con degustazione a cura di Mario Fiasconaro.", // From image: "WORKSHOP MARIO FIASCONARO Workshop sul panettone con degustazione."
        location: "Area Workshop", // Inferred
        type: "Workshop"
      },
      {
        time: "17:00", // From image: "Ore 17:00"
        desc: "Workshop sulla cassata con degustazione a cura di Giovanni Cappello.", // From image: "WORKSHOP GIOVANNI CAPPELLO Workshop sulla cassata con degustazione."
        location: "Area Workshop", // Inferred
        type: "Workshop"
      },
      {
        time: "18:00 - 22:00", // From image: "Ore 18:00-22:00"
        desc: "Man vs Sfincione Competition: La sfida a chi mangia lo sfincione più grande.", // From image: "MAN VS SFINCIONE COMPETITION La sfida a chi mangia lo sfincione più grande."
        location: "Palco Competizioni", // Inferred
        type: "Competizione"
      },
    ],
  },
];

const eventTypeColors = {
  Cerimonia: "bg-purple-100 text-purple-700",
  Workshop: "bg-blue-100 text-blue-700",
  Gastronomia: "bg-emerald-100 text-emerald-700", // This type is defined but not used in the schedule from the image
  Spettacolo: "bg-pink-100 text-pink-700",
  Culturale: "bg-amber-100 text-amber-700",
  Competizione: "bg-red-100 text-red-700",
  Esposizione: "bg-indigo-100 text-indigo-700",
};

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white relative">
      {/* Background elements - kept as in original code */}
      <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-600/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent inline-block">
            Programma del Festival
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                          Unisciti a noi per due giorni di eccellenza culinaria, intrattenimento e celebrazione culturale. Tutti gli eventi sono programmati con cura per garantirti di non perdere nessuna delle emozioni dello Sfincione Fest.
          </p>
        </MotionDiv>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 relative">
          {/* Timeline visual element - kept as in original code */}
          <div className="absolute left-8 sm:left-[27px] lg:left-1/2 top-[60px] bottom-0 w-1 bg-gradient-to-b from-red-600 to-red-700 rounded-full opacity-30 lg:-ml-0.5"></div>

          {scheduleDays.map((day, dayIndex) => (
            <MotionDiv
              key={dayIndex}
              className={`relative ${
                dayIndex % 2 === 1 ? "lg:ml-auto" : ""
              } lg:w-[calc(50%-20px)]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className={`absolute left-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white flex items-center justify-center z-10 ml-2 -mt-1 sm:-ml-7 border-2 border-red-600 shadow-lg 
                lg:left-[calc(100%+20px)] ${
                  dayIndex % 2 === 1 ? "lg:left-auto lg:right-[calc(100%+20px)]" : ""
                }`}
              >
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>

              <div className="ml-16 sm:ml-10 lg:ml-0 pl-4 sm:pl-6 bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <div>
                    <span className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-red-100 text-red-700 mb-2 sm:mb-3 inline-block">
                      {day.day}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                      {day.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-4 sm:space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <MotionDiv
                      key={eventIndex}
                      initial={{ opacity: 0, x: dayIndex % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * eventIndex }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                        {/* Event Time - Not present in the original snippet's event rendering, but present in the data */}
                        {/* If you want to display event.time here, you can add it. For now, following original structure. */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                            {event.type && (
                              <span className={`text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                                {event.type}
                              </span>
                            )}
                            {event.location && (
                              <span className="text-xs sm:text-sm text-gray-500 flex items-center">
                                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                                {event.location}
                              </span>
                            )}
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                            <strong className="text-gray-800">{event.time}: </strong>{event.desc} {/* Added event.time here for clarity */}
                          </p>
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;