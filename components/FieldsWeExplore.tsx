"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Section from "./Section";

const fields = [
  { 
    name: "Neuroscience", 
    image: "/images/neuroscience.png",
    description: "Understanding the brain and nervous system",
    color: "from-blue-400 to-cyan-400",
    terms: ["Neurons", "Synapse", "EEG", "fMRI", "Dopamine", "Plasticity"]
  },
  { 
    name: "Artificial Intelligence", 
    image: "/images/ai.png",
    description: "Machine learning and cognitive computing",
    color: "from-purple-400 to-pink-400",
    terms: ["Neural Net", "Deep Learning", "Algorithm", "Training", "Inference"]
  },
  { 
    name: "Psychiatry", 
    image: "/images/psychiatry.png",
    description: "Mental health and behavioral disorders",
    color: "from-green-400 to-emerald-400",
    terms: ["Therapy", "Diagnosis", "Treatment", "Mental Health", "Behavior"]
  },
  { 
    name: "Cognitive Science", 
    image: "/images/cognitive.png",
    description: "Mind, perception, and information processing",
    color: "from-orange-400 to-red-400",
    terms: ["Cognition", "Memory", "Attention", "Learning", "Reasoning", "Perception", "Consciousness", "Intelligence", "Problem Solving", "Decision Making"]
  },
  { 
    name: "Life Science", 
    image: "/images/life.png",
    description: "Biology, genetics, and living systems",
    color: "from-teal-400 to-green-400",
    terms: ["Genome", "Protein", "Cell", "Evolution", "DNA", "Biology", "Genetics", "Molecular", "Organism", "Ecosystem"]
  },
  { 
    name: "Philosophy", 
    image: "/images/philosophy.png",
    description: "Fundamental questions about existence and knowledge",
    color: "from-indigo-400 to-purple-400",
    terms: ["Ethics", "Logic", "Metaphysics", "Epistemology", "Consciousness", "Truth", "Reality", "Existence", "Knowledge", "Wisdom"]
  },
  { 
    name: "Social Sciences", 
    image: "/images/social.png",
    description: "Human behavior and social structures",
    color: "from-pink-400 to-rose-400",
    terms: ["Society", "Culture", "Behavior", "Social", "Human", "Community", "Interaction", "Norms", "Values", "Institution"]
  },
  { 
    name: "Linguistics", 
    image: "/images/linguistics.png",
    description: "Language structure and communication",
    color: "from-yellow-400 to-orange-400",
    terms: ["Language", "Syntax", "Semantics", "Grammar", "Communication", "Linguistics", "Phonetics", "Morphology", "Pragmatics", "Discourse"]
  },
  { 
    name: "Psychology", 
    image: "/images/psychology.png",
    description: "Human mind, behavior, and mental processes",
    color: "from-cyan-400 to-blue-400",
    terms: ["Psychology", "Behavior", "Mind", "Personality", "Development", "Emotion", "Cognition", "Mental", "Therapy", "Research"]
  },
];


export default function FieldsWeExplore() {
  const [hoveredField, setHoveredField] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Get all unique terms from all fields with better distribution
  const allTerms = fields.flatMap(field => field.terms);
  const uniqueTerms = Array.from(new Set(allTerms));
  
  // Create a more diverse term pool by adding field-specific terms
  const extendedTerms = [
    // Neuroscience terms
    'Neurons', 'Synapse', 'Hippocampus', 'Cortex', 'EEG', 'fMRI', 'Dopamine', 'Axon', 'Dendrite', 'Plasticity', 'Amygdala', 'Glia',
    // AI terms
    'Transformer', 'Reinforcement', 'Neural Net', 'Backprop', 'Embedding', 'Attention', 'Generative', 'Inference', 'Agent', 'Planning',
    // Psychiatry terms
    'Mood', 'Cognition', 'Anxiety', 'Depression', 'Therapy', 'Diagnosis', 'Clinical', 'Resilience', 'Trauma', 'Mind',
    // Cognitive Science terms
    'Perception', 'Memory', 'Language', 'Reasoning', 'Concepts', 'Decision', 'Learning', 'Representation', 'Schema', 'Consciousness',
    // Life Science terms
    'Genome', 'Protein', 'Cell', 'Evolution', 'Metabolism', 'Homeostasis', 'Biodiversity', 'Embryo', 'Microbiome', 'Adaptation',
    // Philosophy terms
    'Being', 'Ethics', 'Logic', 'Knowledge', 'Ontology', 'Causality', 'Metaphysics', 'Phenomenology', 'Truth', 'Reality',
    // Social Sciences terms
    'Network', 'Culture', 'Institution', 'Inequality', 'Norms', 'Mobility', 'Collective', 'Identity', 'Demography', 'Community',
    // Linguistics terms
    'Syntax', 'Semantics', 'Phonology', 'Morphology', 'Pragmatics', 'Prosody', 'Grammar', 'Discourse', 'Lexicon', 'Phonetics',
    // Psychology terms
    'Motivation', 'Emotion', 'Personality', 'Stress', 'Executive', 'Intelligence', 'Development', 'Behavior', 'Mental', 'Research'
  ];
  
  const finalTerms = Array.from(new Set([...allTerms, ...extendedTerms]));

  return (
    <Section>
      <div ref={containerRef} className="container-custom relative overflow-hidden py-20 rounded-2xl border border-white/10">
        {/* Enhanced Scrolling terminology background */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, rowIndex) => {
            const directionLeft = rowIndex % 2 === 0;
            const duration = 25 + rowIndex * 4;
            const rowTop = `${rowIndex * 12.5}%`;
            const height = '12.5%';
            
            // Create a mixed row with terms from all fields, randomly shuffled
            const mixedRowTerms: string[] = [];
            
            // Add terms from each field to ensure representation
            fields.forEach(field => {
              const fieldTerms = field.terms.filter(term => finalTerms.includes(term));
              const termsPerField = Math.ceil(fieldTerms.length / 8); // Distribute field terms across rows
              const startIdx = rowIndex * termsPerField;
              const endIdx = Math.min(startIdx + termsPerField, fieldTerms.length);
              mixedRowTerms.push(...fieldTerms.slice(startIdx, endIdx));
            });
            
            // Add some extended terms to fill the row
            const remainingSlots = Math.max(0, 15 - mixedRowTerms.length);
            const extendedTermsForRow = extendedTerms
              .filter(term => !mixedRowTerms.includes(term))
              .slice(0, remainingSlots);
            mixedRowTerms.push(...extendedTermsForRow);
            
            // Shuffle the mixed terms using a deterministic seed based on rowIndex
            const shuffledTerms = [...mixedRowTerms].sort((a, b) => {
              // Use rowIndex as seed for deterministic randomization
              const seed = rowIndex * 7 + a.charCodeAt(0) + b.charCodeAt(0);
              return (seed % 3) - 1; // Returns -1, 0, or 1
            });
            
            return (
              <div
                key={`row-${rowIndex}`}
                className="absolute left-0 w-full overflow-hidden"
                style={{ top: rowTop, height }}
              >
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: directionLeft ? [0, -800] : [-800, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                >
                  {shuffledTerms.map((term, j) => {
                    const sizeClass = j % 6 === 0
                      ? 'text-[8px] sm:text-xs'
                      : j % 6 === 1
                        ? 'text-xs sm:text-sm'
                        : j % 6 === 2
                          ? 'text-sm sm:text-base'
                          : j % 6 === 3
                            ? 'text-base sm:text-lg'
                            : j % 6 === 4
                              ? 'text-lg sm:text-xl'
                              : 'text-xl sm:text-2xl';
                    
                    const isHovered = hoveredField !== null && fields[hoveredField].terms.includes(term);
                    
                    return (
                      <motion.span
                        key={`row-${rowIndex}-item-${j}`}
                        className={`mx-4 md:mx-8 text-gray-400 font-mono ${sizeClass} transition-all duration-300 ${
                          isHovered 
                            ? `text-transparent bg-clip-text bg-gradient-to-r ${fields[hoveredField].color} font-bold` 
                            : 'hover:text-gray-300'
                        }`}
                        animate={isHovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        {term}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-mono-display mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fields We <span className="gradient-text">Explore</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-futura-1 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              To understand reality, we must connect the sciences of mind, life, and society. 
              Noetex integrates knowledge across disciplines to reveal the patterns that shape 
              intelligence, behavior, and the world itself.
            </motion.p>
          </motion.div>

          {/* Enhanced Fields Grid with Interactive Effects */}
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredField(index)}
                onHoverEnd={() => setHoveredField(null)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl border transition-all duration-300 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              >
                {/* Background gradient effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-4 md:p-6">
                  <div className="text-center">
                    <h3 
                      className="text-sm md:text-base font-orbitron font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 break-words hyphens-auto"
                      style={{ 
                        wordBreak: 'break-word',
                        hyphens: 'auto',
                        WebkitHyphens: 'auto',
                        msHyphens: 'auto'
                      }}
                    >
                      {field.name}
                    </h3>
                  </div>
                </div>

                {/* Animated border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${field.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, ${field.color.includes('blue') ? '#3b82f6' : field.color.includes('purple') ? '#8b5cf6' : '#10b981'}, transparent)`,
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'padding-box, border-box'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
