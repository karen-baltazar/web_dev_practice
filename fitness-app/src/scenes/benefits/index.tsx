import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/type";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
 } from "@heroicons/react/24/solid";
 import { motion, stagger } from "framer-motion";
 import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="w-6 h-6" />,
        title: "State of the Art Facility",
        description: "Top of the line equipment and facilities to help you reach your fitness goals."
    },
    {
        icon: <UserGroupIcon className="w-6 h-6" />,
        title: "100's of Group Classes",
        description: "Group classes to help you get motivated by others and reach your goals."
    },
    {
        icon: <AcademicCapIcon className="w-6 h-6" />,
        title: "Expert Personal Trainers",
        description: "Our trainers are here to help you reach your goals and push you to your limits."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <>
        <section 
            id="benefits" 
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div 
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit 
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHICS */}
                    <img 
                        className="mx-auto"
                        alt="benefits-page-graphics"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Our members are our top priority. We provide the best facilities, 
                                trainers and classes to help you reach your fitness goals. 
                                With millions of happy members, we are confident that you will 
                                love our gym as much as we do.
                            </p>
                            <p className="mb-5">
                                Our goal is to help you achieve your fitness goals and live a 
                                healthier lifestyle. We provide the tools and support you need 
                                to succeed, whether you want to lose weight, build muscle, or 
                                improve your overall health.                                
                            </p>
                        </motion.div>

                        {/*BUTTON*/}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    </>
  )
}

export default Benefits;