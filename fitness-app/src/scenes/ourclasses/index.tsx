import { SelectedPage, ClassType } from "@/shared/type";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [ 
    {
        name: "Weightlifting",
        description: "Weight training is a type of strength training that uses weights for resistance. It helps to build muscle, increase strength, and improve overall fitness.",
        image: image1,
    },
    {
        name: "Yoga",
        description: "Yoga is a mind-body practice that combines physical postures, breathing exercises, and meditation. It helps to improve flexibility, strength, and mental well-being.",
        image: image2,
    },
    {
        name: "HIIT",
        description: "HIIT (high-intensity interval training) is a type of workout that alternates between intense bursts of activity and short rest periods. It helps to burn fat, build muscle, and improve cardiovascular fitness.",
        image: image3,
    },
    {
        name: "Pilates",
        description: "Pilates is a form of exercise that focuses on core strength, flexibility, and posture. It helps to improve balance, coordination, and overall body awareness.",
        image: image4,
    },
    {
        name: "Spin",
        description: "Spin is a high-intensity cycling workout that is done on a stationary bike. It helps to burn calories, improve cardiovascular fitness, and build leg strength.",
        image: image5,
    },
    {
        name: "Zumba",
        description: "Zumba is a dance workout that combines Latin and international music with dance moves. It helps to burn calories, improve coordination, and boost mood.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (selectedPage: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage}: Props) => {
  return (
    <>
        <section id="ourclasses" className="w-full bg-primary-100 py-4">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            > 
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            We offer a wide range of classes to suit every fitness level. 
                            From high intensity classes to yoga, there is something for everyone. 
                            Our classes are designed to help you achieve your fitness goals, 
                            whether you want to lose weight, build muscle, or improve your overall health.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item, index) => (
                            <Class 
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default OurClasses;