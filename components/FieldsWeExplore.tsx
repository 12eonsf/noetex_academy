"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const fields = [
  { name: "Neuroscience", image: "/images/neuroscience.png" },
  { name: "Artificial Intelligence", image: "/images/ai.png" },
  { name: "Psychiatry", image: "/images/psychiatry.png" },
  { name: "Cognitive Science", image: "/images/cognitive.png" },
  { name: "Life Science", image: "/images/life.png" },
  { name: "Philosophy", image: "/images/philosophy.png" },
  { name: "Social Sciences", image: "/images/social.png" },
  { name: "Linguistics", image: "/images/linguistics.png" },
  { name: "Psychology", image: "/images/psychology.png" },
];


export default function FieldsWeExplore() {

  return (
    <Section>
      <div className="container-custom relative overflow-hidden py-20 rounded-2xl border border-white/10">
        {/* Scrolling terminology background (deterministic, hydration-safe) */}
        <div className="pointer-events-auto absolute inset-0 opacity-15">
          {Array.from({ length: 10 }).map((_, rowIndex) => {
            const directionLeft = rowIndex % 2 === 0;
            const duration = 22 + rowIndex * 3;
            const rowTop = `${rowIndex * 10}%`;
            const height = '10%';
            const terms = [
              'Neurons','Synapse','Hippocampus','Cortex','EEG','fMRI','Dopamine','Axon','Dendrite','Plasticity','Amygdala','Glia',
              'Transformer','Reinforcement','Neural Net','Backprop','Embedding','Attention','Generative','Inference','Agent','Planning',
              'Mood','Cognition','Anxiety','Depression','Therapy','Diagnosis','Clinical','Resilience','Trauma','Mind',
              'Perception','Memory','Language','Reasoning','Concepts','Decision','Learning','Representation','Schema',
              'Genome','Protein','Cell','Evolution','Metabolism','Homeostasis','Biodiversity','Embryo','Microbiome','Adaptation',
              'Being','Ethics','Logic','Knowledge','Ontology','Causality','Metaphysics','Phenomenology',
              'Network','Culture','Institution','Inequality','Norms','Mobility','Collective','Identity','Demography',
              'Syntax','Semantics','Phonology','Morphology','Pragmatics','Prosody','Grammar','Discourse','Lexicon',
              'Motivation','Emotion','Personality','Stress','Executive','Intelligence','Development','Behavior'
            ];
            const itemsPerRow = 16;
            return (
              <div
                key={`row-${rowIndex}`}
                className="absolute left-0 w-full overflow-hidden"
                style={{ top: rowTop, height }}
              >
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: directionLeft ? [0, -600] : [-600, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                >
                  {Array.from({ length: itemsPerRow }).map((__, j) => {
                    const term = terms[(rowIndex * 7 + j) % terms.length];
                    const sizeClass = j % 5 === 0
                      ? 'text-[10px] sm:text-xs'
                      : j % 5 === 1
                        ? 'text-xs sm:text-sm'
                        : j % 5 === 2
                          ? 'text-sm sm:text-base'
                          : j % 5 === 3
                            ? 'text-base sm:text-lg'
                            : 'text-lg sm:text-xl';
                    return (
                      <span
                        key={`row-${rowIndex}-item-${j}`}
                        className={`mx-6 md:mx-10 text-gray-400 font-mono ${sizeClass} transition-colors duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-400`}
                      >
                        {term}
                      </span>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 animate-fade-in"
          >
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Fields We <span className="gradient-text">Explore</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-futura-1">
              To understand reality, we must connect the sciences of mind, life, and society. 
              Noetex integrates knowledge across disciplines to reveal the patterns that shape 
              intelligence, behavior, and the world itself.
            </p>
          </motion.div>

          {/* Fields Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer py-6 px-4 md:py-6 md:px-4 rounded-2xl text-lg font-medium 
                  backdrop-blur-md border transition-all duration-300
                  bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20
                  w-full"
              >
                <span className="block text-center font-brand-3 text-xs sm:text-sm md:text-base leading-tight break-words whitespace-normal">
                  {field.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
