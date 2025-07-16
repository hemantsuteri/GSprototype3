import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const StaggeredBlocks = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {["Block 1", "Block 2", "Block 3", "Block 4", "Block 5"].map((text, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredBlocks;
