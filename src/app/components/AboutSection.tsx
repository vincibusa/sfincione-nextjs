'use client';
import React from "react";

import { Calendar, Users, Award, History } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const AboutSection: React.FC = () => {

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "130.000+ Visitatori",
      description: "Oltre 130.000 presenze in tre giorni di festa"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Show Cooking",
      description: "Chef stellati e maestri panificatori in azione"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competizioni",
      description: "Sicily Young Bakery e Pizza dell'Identità"
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Tradizione",
      description: "Sfincione bianco e rosso della tradizione siciliana"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
          >
   
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            COS'È LO SFINCIONE FEST
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
        
                    </MotionDiv>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
            
            <p className="text-gray-600 leading-relaxed">
               Lo Sfincione Fest è una delle <b>principali manifestazioni enogastronomiche della Sicilia</b>, giunto alla settima edizione con oltre <b>130.000 visitatori</b> a Bagheria. Un evento unico nel suo genere che celebra lo <b>sfincione</b> come ambasciatore del territorio e la "pizza dei siciliani", forte attrattore enogastronomico e turistico che mobilita una filiera agroalimentare variegata e sostenibile.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                L'Esperienza <span className="text-red-600">Autentica</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tre giorni di festa nel corso Umberto I con degustazioni dello <b>sfincione bianco di Bagheria</b> e delle varianti tradizionali siciliane, cooking show con chef stellati come Tony Lo Coco, competizioni culinarie e spettacoli musicali. Un'esperienza che unisce tradizione culinaria, street food siciliano e intrattenimento di qualità.
              </p>
            </motion.div>


            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                La <span className="text-red-600">Produzione</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Una produzione di Catanzaro & Partners, società che organizza e produce eventi di caratura nazionale, impegnata nell'organizzazione dell'evento e nella valorizzazione turistico-rurale del territorio regionale, attraverso la progettazione e attuazione di politiche di sviluppo territoriale e di marketing turistico.
              </p>
            </motion.div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden mb-8 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <MotionImg
                src="https://www.allfoodsicily.it/wp-content/uploads/2021/12/sfincione-di-bagheria--1536x1024.jpeg"
                alt="Sfincione di Bagheria tradizionale"
                className="w-full h-[400px] object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-full flex items-center justify-center text-red-600"
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;