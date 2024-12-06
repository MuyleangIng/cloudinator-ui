import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                     icon,
                                                     title,
                                                     description,
                                                 }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
        >
            <div className="flex items-center justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default FeatureCard;