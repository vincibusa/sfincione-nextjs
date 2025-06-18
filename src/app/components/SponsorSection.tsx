'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;

// Categorie di sponsor secondo l'immagine di riferimento
const coOrganizzazione = [
  {
    name: "Comune di Piana degli Albanesi",
    image: "/loghi istituzionali/loghi istituzionali-19.png",
  },
  {
    name: "Catanzaro & Partners",
    image: "/loghi istituzionali/loghi istituzionali-20.png",
  },
];

const patrocinioIstituzionale = [
  {
    name: "Regione Sicilia",
    image: "/loghi istituzionali/loghi istituzionali-21.png",
  },
  {
    name: "Sicilia Enogastronomica",
    image: "/loghi istituzionali/loghi istituzionali-22.png",
  },  
];





const organizzato = [
  {
    name: "La Piana d'Oro",
    image: "/sponsor/1 la piana d'oro.png",
  },
];

const producer = [
  {
    name: "Catanzaro & Partners",
    image: "/sponsor/2 catanzaro&partners_Tavola disegno 1.png",
  },
];

const patrocinioContributo = [
  {
    name: "Regione Sicilia",
    image: "/sponsor/3 regione-sicilia-800x579.png",
  },
  {
    name: "Sicilia Enogastronomica",
    image: "/sponsor/4 siciliaenogastronomica-02.png",
  },
  
];

const patrocinio = [
  {
    name: "Comune di Bagheria",
    image: "/sponsor/5 comune di bagheria.png",
  },

];

const partnership = [
  {
    name: "Camera di Commercio",
    image: "/sponsor/6 camera di commercio-02.png",
  },
  {
    name: "Sprint",
    image: "/sponsor/sprint-02.png",
  },
  {
    name: "Punto Impresa",
    image: "/sponsor/7 punto impresa-02.png",
  },
  {
    name: "FEAMPA",
    image: "/sponsor/FEAMPA.png",
  },
  {
    name: "Unione Europea",
    image: "/sponsor/UNIONE EUROPEA-02.png",
  },
  {
    name: "Ministero",
    image: "/sponsor/MINISTERO-02.png",
  },
  {
    name: "Regione",
    image: "/sponsor/sponsor-02.png",
  },
];

const mainSponsor = [
  {
    name: "Deco",
    image: "/sponsor/DECO-02.png",
  },
  {
    name: "Riggi",
    image: "/sponsor/RIGGI.png",
  },
  {
    name: "Sagrim Electrolux",
    image: "/sponsor/SAGRIM ELECTROLUX-02.png",
  },
  {
    name: "Cuzzupe",
    image: "/sponsor/cuzzupe-02.png",
  },
];

// Categorie specifiche
const officialCategories = [
  {
    title: "OFFICIAL WATER",
    sponsors: [{ name: "Acqua Panna", image: "/sponsor/acqua panna-02.png" }],
  },
  {
    title: "OFFICIAL WINE",
    sponsors: [{ name: "Bonsignore", image: "/sponsor/bonsignore-02.png" }],
  },
  {
    title: "OFFICIAL AMARO",
    sponsors: [{ name: "Granamaro", image: "/sponsor/granamaro-02.png" }],
  },
  {
    title: "OFFICIAL PASTA",
    sponsors: [{ name: "La Siciliana", image: "/sponsor/la siciliana-02.png" }],
  },
  {
    title: "OFFICIAL FORNI",
    sponsors: [{ name: "Moretti Forni", image: "/sponsor/MORETTI FORNI.png" }],
  },
  {
    title: "OFFICIAL ELETTRONICA",
    sponsors: [{ name: "Cascino", image: "/sponsor/cascino-02.png" }],
  },
  {
    title: "OFFICIAL OTTICA",
    sponsors: [{ name: "Gagliano", image: "/sponsor/gagliano-02.png" }],
  },
  {
    title: "OFFICIAL ASSICURAZIONE",
    sponsors: [{ name: "Assiguzzo", image: "/sponsor/assiguzzo-02.png" }],
  },
  {
    title: "OFFICIAL CAFFÈ",
    sponsors: [{ name: "G d'Oro", image: "/sponsor/g d'oro-02.png" }],
  },
  {
    title: "OFFICIAL IMBALLAGGIO",
    sponsors: [{ name: "Pitarresi", image: "/sponsor/pitarresi-02.png" }],
  },
  {
    title: "OFFICIAL SERVICE",
    sponsors: [{ name: "Mediacom", image: "/sponsor/mediacom-02.png" }],
  },
  {
    title: "OFFICIAL OLIO",
    sponsors: [{ name: "Barbera", image: "/sponsor/barbera logo.png" }],
  },
  {
    title: "OFFICIAL PIZZA",
    sponsors: [{ name: "Biga", image: "/sponsor/BIGA-02.png" }],
  },
  {
    title: "OFFICIAL PARTNER",
    sponsors: [
      { name: "Menu", image: "/sponsor/menu-02.png" },
      { name: "Mariano Durante", image: "/sponsor/mariano durante-02.png" },
      {
        name: "Alimenti e Ambiente",
        image: "/sponsor/alimenti e ambiente-02.png",
      },
    ],
  },
];

const mediaPartner = [
  { name: "Giornale di Sicilia", image: "/sponsor/giornale di sicilia-02.png" },
  { name: "All Food", image: "/sponsor/all food-02.png" },
  { name: "Fermento Pizza", image: "/sponsor/fermento-02.png" },
  { name: "Centro Studi Aurora", image: "/sponsor/centro studi aurora-02.png" },
];


const SponsorSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span
            className="text-red-600 font-medium mb-4 block"
            whileHover={{ scale: 1.05 }}
          >
            I Nostri Partner
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Partner Istituzionali
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
        </MotionDiv>

        {/* Sezione principale ispirata all'immagine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* CO-ORGANIZZAZIONE */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
              CO-ORGANIZZAZIONE
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {coOrganizzazione.map((partner, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </motion.div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* PATROCINIO ISTITUZIONALE */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
              PATROCINIO ISTITUZIONALE
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {patrocinioIstituzionale.map((partner, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </motion.div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* MEDIA PARTNER */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
              MEDIA PARTNER
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {mediaPartner.map((partner, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </motion.div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANIZZATO DA */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            ORGANIZZATO DA
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {organizzato.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="max-h-24 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* PRODUCER */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            PRODUCER
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {producer.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="max-h-24 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* PATROCINIO E CONTRIBUTO */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            PATROCINIO E CONTRIBUTO
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {patrocinioContributo.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-h-20 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* PATROCINIO */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            PATROCINIO
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {patrocinio.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-h-20 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* PARTNERSHIP */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            PARTNERSHIP
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partnership.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-h-20 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* MAIN SPONSOR */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#e30613] tracking-wider uppercase mb-8 text-center">
            MAIN SPONSOR
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {mainSponsor.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="max-h-24 max-w-full object-contain"
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* OFFICIAL CATEGORIES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#e30613] tracking-wider uppercase mb-12 text-center">
            OFFICIAL CATEGORIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {officialCategories.map((category, categoryIndex) => (
              <MotionDiv
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="text-sm font-bold text-[#e30613] tracking-wider uppercase mb-6">
                  {category.title}
                </h4>
                <div className="flex  justify-center gap-4">
                  {category.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div
                      key={sponsorIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        width={120}
                        height={80}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
